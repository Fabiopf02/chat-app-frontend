import React from 'react';
import Background from '../../components/Background';
import Button from '../../components/Button';
import Header from '../../components/Header';
import ProfileDetails from '../../components/ProfileDetails';
import { Buttons, Container } from './styles';



const data = {
  name: 'Nome do usuário',
  avatar_url: 'http://astronomy.com/~/media/91C30DC3C221461C813777A84738AA53.jpg',
  bio: 'Aqui vai a bio do usuário... uma descrição curta e simples',
  created_at: new Date(),
  more: ['user.email@provider.com'],
};

function UserDetails() {
  return (
    <Background>
      <Header title="Perfil" back={true} />
      <Container>
        <ProfileDetails data={data}>
          <Buttons>
            <Button>Criar sala</Button>
            <Button bg="#7159c1">Minhas salas</Button>
          </Buttons>
        </ProfileDetails>
      </Container>
    </Background>
  );
}

export default UserDetails;
