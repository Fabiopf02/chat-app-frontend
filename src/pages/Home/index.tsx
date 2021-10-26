import React from 'react';

import Background from '../../components/Background';
import RoomList from '../../components/RoomList';
import ChatPreview from '../../components/PreviewContainer';
import Header from '../../components/Header';
import Profile from './components/Profile';

import { Container, Rooms, Title } from './styles';

function Home() {
  return (
    <Background>
      <Header title="Olá" />
      <Container>
        <Rooms>
          <Title>Salas disponíveis</Title>
          <ChatPreview padding={0}>
            <RoomList />
          </ChatPreview>
        </Rooms>
        <Profile />
      </Container>
    </Background>
  );
}

export default Home;
