import React from 'react';

import {
  Bio,
  Block,
  Container,
  Header,
  Image,
  ImageBlock,
  MoreInfo,
  Texts,
  UserName,
} from './styles';

interface Props {
  data: {
    name: string;
    avatar_url: string;
    bio: string;
    created_at: Date;
    more?: string[];
  };
}

function renderMoreInfo(data: string[]) {
  return data.map(item => {
    return <MoreInfo key={item}>{item}</MoreInfo>;
  });
}

const ProfileDetails: React.FC<Props> = ({ children, data }) => {
  return (
    <Container>
      <Header>
        <Block>
          <ImageBlock>
            <div className="border">
              <Image src={data.avatar_url} alt="Profile image" />
            </div>
          </ImageBlock>
          <Texts>
            <UserName>{data.name}</UserName>
            <Bio>{data.bio}</Bio>
            <MoreInfo>Desde: {data.created_at.toLocaleDateString()}</MoreInfo>
            {data.more && renderMoreInfo(data.more)}
          </Texts>
        </Block>
      </Header>
      {children}
    </Container>
  );
}

export default ProfileDetails;
