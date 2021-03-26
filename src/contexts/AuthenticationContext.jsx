import { createContext, useState } from 'react';

import PropTypes from 'prop-types';

import api from '../services/api';

export const AuthenticationContext = createContext({});

export function AuthenticationProvider({ children }) {
  const [user, setUser] = useState(() => {
    const storageUser = localStorage.getItem('user');

    if (storageUser) {
      const parsedUser = JSON.parse(storageUser);

      return parsedUser;
    }

    return null;
  });

  const [isSigningIn, setIsSigningIn] = useState(false);

  function isLoggedIn() {
    const accessToken = localStorage.getItem('access_token');
    const refreshToken = localStorage.getItem('refresh_token');

    return !!user && !!accessToken && !!refreshToken;
  }

  async function signIn(email, password) {
    try {
      setIsSigningIn(true);

      const response = await api.post('/auth/sign-in', { email, password });

      setUser(response.data);

      const accessToken = response.headers.authorization;
      const refreshToken = response.headers['refresh-token'];

      api.defaults.headers.authorization = `Bearer ${accessToken}`;

      localStorage.setItem('user', JSON.stringify(response.data));
      localStorage.setItem('access_token', accessToken);
      localStorage.setItem('refresh_token', refreshToken);
    } finally {
      setIsSigningIn(false);
    }
  }

  function signOut() {
    setUser(null);

    localStorage.removeItem('user');
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
  }

  return (
    <AuthenticationContext.Provider
      value={{
        user,
        isLoggedIn,
        isSigningIn,
        signIn,
        signOut,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
}

AuthenticationContext.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
