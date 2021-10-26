import React from 'react';

import { Container, Content, Title, UserImage, Wrapper } from './styles';

interface IMessage {
  id: string;
  right: boolean;
  content: string;
}

interface Props {
  data: IMessage;
}

const Message: React.FC<Props> = ({ data }) => {
  return (
    <Wrapper>
      <Container right={data.right}>
        <UserImage right={data.right} />
        <Title>Title 12345</Title>
        <Content>{data.content}</Content>
      </Container>
    </Wrapper>
  );
};

export default Message;
