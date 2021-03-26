import { AuthenticationProvider } from './contexts/AuthenticationContext';
import Routes from './routes';
import GlobalStyle from './styles/global';

function App() {
  return (
    <>
      <AuthenticationProvider>
        <Routes />
      </AuthenticationProvider>

      <GlobalStyle />
    </>
  );
}

export default App;
