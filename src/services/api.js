import axios from 'axios';

const api = axios.create({
  baseURL: 'https://books.ioasys.com.br/api/v1',
});

api.interceptors.request.use(
  config => {
    const accessToken = localStorage.getItem('access_token');

    if (accessToken) {
      config.headers.authorization = `Bearer ${accessToken}`; // eslint-disable-line no-param-reassign
    }

    return config;
  },
  error => Promise.reject(error),
);

api.interceptors.response.use(
  response => response,
  async error => {
    const request = error.config;

    if (
      request.url === '/auth/refresh-token' &&
      error.response.status !== 204
    ) {
      localStorage.removeItem('user');
      localStorage.removeItem('access_token');
      localStorage.removeItem('refresh_token');

      window.location.href = '/';

      return Promise.reject(error);
    }

    if (error.response.status === 401 && !request.already_retried) {
      request.already_retried = true;

      const refreshToken = localStorage.getItem('refresh_token');

      const response = await api.post('/auth/refresh-token', {
        refreshToken,
      });

      const accessToken = response.headers.authorization;
      const newRefreshToken = response.headers['refresh-token'];

      api.defaults.headers.authorization = `Bearer ${accessToken}`;

      localStorage.setItem('access_token', accessToken);
      localStorage.setItem('refresh_token', newRefreshToken);

      return api(request);
    }

    return Promise.reject(error);
  },
);

export default api;
