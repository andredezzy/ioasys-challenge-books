import { useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';

import * as Yup from 'yup';

import { Form } from '@unform/web';

import Button from '../../components/Button';
import Header from '../../components/Header';
import Input from '../../components/Input';
import { useAuthentication } from '../../hooks/useAuthentication';

import { BackgroundImage, Container, ErrorTooltip } from './styles';

function Login() {
  const formRef = useRef(null);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState();

  const { signIn, isSigningIn } = useAuthentication();

  const history = useHistory();

  async function handleSignIn() {
    try {
      formRef.current?.setErrors({});

      setError(null);

      const schema = Yup.object().shape({
        email: Yup.string()
          .required('E-mail obrigatório')
          .email('Digite um e-mail válido'),
        password: Yup.string().required('Senha obrigatória'),
      });

      await schema.validate({ email, password }, { abortEarly: false });

      await signIn(email, password);

      history.push('/');
    } catch {
      setError('Email e/ou senha incorretos.');
    }
  }

  return (
    <>
      <Container>
        <Header color="#fff" />

        <Form ref={formRef} onSubmit={handleSignIn}>
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
            <Button type="submit" loading={isSigningIn}>
              Entrar
            </Button>
          </Input>

          {error && <ErrorTooltip>{error}</ErrorTooltip>}
        </Form>
      </Container>

      <BackgroundImage />
    </>
  );
}

export default Login;
