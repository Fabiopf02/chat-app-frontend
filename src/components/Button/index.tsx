import React from 'react';

import { Button as ButtonComponent } from './styles';

interface Props {
  bg?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button: React.FC<Props> = ({ children, bg, onClick }) => {
  return (
    <ButtonComponent bg={bg} onClick={onClick}>
      {children}
    </ButtonComponent>
  );
};

export default Button;
