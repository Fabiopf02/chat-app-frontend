import React from 'react';

import { Container, Message, Title, Link } from './styles';

interface IData {
  id: string;
  name: string;
  bio: string;
}

interface Props {
  data: IData;
}

const RoomItem: React.FC<Props> = ({ data }) => {
  return (
    <Link to={`/room/${data.id}`}>
      <Container>
        <Title>{data.name}</Title>
        <Message>{data.bio}</Message>
      </Container>
    </Link>
  );
};

export default RoomItem;
