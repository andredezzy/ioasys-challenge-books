import { Route as ReactDOMRoute, Redirect } from 'react-router-dom';

import PropTypes from 'prop-types';

import { useAuthentication } from '../hooks/useAuthentication';

function Route({ isPrivate, component: Component, ...rest }) {
  const { isLoggedIn } = useAuthentication();

  return (
    <ReactDOMRoute
      {...rest}
      render={({ location }) => {
        return isPrivate === isLoggedIn() ? (
          <Component />
        ) : (
          <Redirect
            to={{
              pathname: isPrivate ? '/login' : '/',
              state: { from: location },
            }}
          />
        );
      }}
    />
  );
}

Route.propTypes = {
  isPrivate: PropTypes.bool,
  component: PropTypes.elementType.isRequired,
};

Route.defaultProps = {
  isPrivate: false,
};

export default Route;
