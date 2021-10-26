import React from 'react';

import Background from '../../components/Background';
import Button from '../../components/Button';
import FormContainer from '../../components/FormContainer';
import Header from '../../components/Header';
import Input from '../../components/Input';

import Presentation from './components/Presentation';

import { FormLink, Submit } from '../SignIn/styles';
import { Container, Form } from './styles';

function SignUp() {
  return (
    <Background>
      <Header title="Bem-vindo ao Chat-App" />
      <Container>
        <Presentation />
        <FormContainer title="Novo usuário">
          <Form>
            <Input label="Nome" />
            <Input label="E-mail" />
            <Input label="Senha" />

            <Submit>
              <Button>Cadastrar</Button>
            </Submit>
          </Form>
          <FormLink to="/">
            <Button>Já possui uma conta?</Button>
          </FormLink>
        </FormContainer>
      </Container>
    </Background>
  );
}

export default SignUp;
