import React from 'react';

import ChatPreview from '../../../../components/PreviewContainer';

import { Container } from './styles';

function Presentation() {
  return (
    <Container>
      <ChatPreview>
        Envie mensagens e mídias em tempo real  com o{' '}
        <span className="purple">Chat-App</span> direto do seu navegador, sem precisar baixar nada.
        <div className="ex">application example animation</div>
        <div className="ex">application example animation</div>
      </ChatPreview>
    </Container>
  );
}

export default Presentation;
