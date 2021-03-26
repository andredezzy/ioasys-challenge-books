import { useState } from 'react';
import { useHistory } from 'react-router-dom';

import Button from '../../components/Button';
import Header from '../../components/Header';
import Input from '../../components/Input';
import { useAuthentication } from '../../hooks/useAuthentication';

import { BackgroundImage, Container, Form } from './styles';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { signIn, isSigningIn } = useAuthentication();

  const history = useHistory();

  async function handleSignIn() {
    await signIn('desafio@ioasys.com.br', '12341234');

    history.push('/');
  }

  return (
    <>
      <Container>
        <Header color="#fff" />

        <Form>
          <Input
            name="email"
            label="Email"
            id="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <Input
            name="password"
            label="Senha"
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          >
            <Button loading={isSigningIn} onClick={handleSignIn}>
              Entrar
            </Button>
          </Input>
        </Form>
      </Container>

      <BackgroundImage />
    </>
  );
}

export default Login;
