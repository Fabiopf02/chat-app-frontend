import React from 'react';
import Button from '../../../../components/Button';
import FormContainer from '../../../../components/FormContainer';
import { Avatar, Bio, ImageBlock, LinkButton, MoreOptions, ScannerIcon } from './styles';

const Profile: React.FC = () => {
  return (
    <FormContainer title="Perfil">
      <ImageBlock>
        <Avatar src="http://astronomy.com/~/media/91C30DC3C221461C813777A84738AA53.jpg" />
      </ImageBlock>
      <Bio>Mensagem, não muito longa, do usuário para a rede.</Bio>
      <LinkButton to="/profile">
        <Button>Ver mais</Button>
      </LinkButton>
      <MoreOptions>
        <Button bg="#9B51E0">Criar sala</Button>
        <Button bg="#7159c1">
          Entrar
          <ScannerIcon />
        </Button>
      </MoreOptions>
    </FormContainer>
  );
};

export default Profile;
