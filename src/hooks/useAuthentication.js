import { useContext } from 'react';

import { AuthenticationContext } from '../contexts/AuthenticationContext';

export function useAuthentication() {
  const context = useContext(AuthenticationContext);

  return context;
}
