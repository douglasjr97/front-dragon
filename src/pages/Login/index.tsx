import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Input } from '../../components/Input';
import { Toast } from '../../plugins/sweetAlert';
import { Button, Container, Title } from './styles';

export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  let navigate = useNavigate();

  function handleLogin(email: string, password: string) {
    if (email === 'dragao@gmail.com' && password === '123') {
      navigate('home');
    } else {
      Toast.fire({
        icon: 'error',
        title:
          'Não foi possível fazer login, verifique as credenciais novamente',
      });
    }
  }

  return (
    <Container>
      <Title>Login</Title>
      <Input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />

      <Input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        placeholder="Senha"
      />

      <Button onClick={() => handleLogin(email, password)}>Login</Button>
    </Container>
  );
}
