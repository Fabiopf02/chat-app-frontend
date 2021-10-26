import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import history from '../../utils/history';

import { Back, HeaderContainer, RoomName, Title } from './styles';

interface Props {
  title: string;
  room?: string;
  back?: boolean;
}

const { goBack } = history;
function renderBack(render: boolean) {
  if (!render) {
    return;
  }
  return (
    <Back onClick={goBack}>
      <FiArrowLeft />
    </Back>
  );
}

const Header: React.FC<Props> = ({ title, room, back = false}) => {
  return (
    <HeaderContainer>
      <div className="row">
        {renderBack(back)}
        <Title>{title}</Title>
      </div>
      {room !== undefined && <RoomName>{`< ${room} />`}</RoomName>}
    </HeaderContainer>
  );
}

export default Header;
