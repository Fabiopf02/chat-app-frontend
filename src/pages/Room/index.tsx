import React from 'react';
import { useParams } from 'react-router-dom';
import Background from '../../components/Background';
import ChatPreview from '../../components/PreviewContainer';
import FormContainer from '../../components/FormContainer';
import Header from '../../components/Header';
import MessageList from '../../components/MessageList'

import { Code, Container, QrCode, QrContainer, Text, LinkButton } from './styles';

function Room() {
  const { id } = useParams<{ id: string }>();

  return (
    <Background>
      <Header title="Chat-App" room={id} back={true} />
      <Container>
        <ChatPreview padding={0}>
          <MessageList />
        </ChatPreview>
        <FormContainer title="Entrar na sala">
          <Text>Compartilhe o QrCode abaixo para acessar a sala</Text>
          <QrContainer>
            <QrCode value={id} />
          </QrContainer>
          <Code>{id}</Code>
          <LinkButton to={`${id}/details`}>
            <p>Mais detalhes</p>
          </LinkButton>
        </FormContainer>
      </Container>
    </Background>
  );
}

export default Room;
