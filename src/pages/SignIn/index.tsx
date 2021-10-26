import React from 'react';

import Background from '../../components/Background';
import Button from '../../components/Button';
import FormContainer from '../../components/FormContainer';
import Input from '../../components/Input';
import Header from '../../components/Header';

import {
  Container,
  ForgotPassword,
  Form,
  FormLink,
  Submit,
} from './styles';

function SignIn() {
  return (
    <Background>
      <Header title="Bem-vindo de volta" />
      <Container>
        <FormContainer title="Acessar">
          <Form>
            <Input label="E-mail" />
            <Input label="Senha" />
            <ForgotPassword>Esqueceu sua senha?</ForgotPassword>
            <Submit>
              <Button>Entrar</Button>
            </Submit>
          </Form>
          <FormLink to="/signup">
            <Button>Não possui uma conta?</Button>
          </FormLink>
        </FormContainer>
      </Container>
    </Background>
  );
}

export default SignIn;
