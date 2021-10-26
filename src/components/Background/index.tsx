import React from 'react';

import { Container } from './styles';

const Background:React.FC = ({ children }) => {
  return (
    <Container>
      <div className="circle"></div>
      {children}
    </Container>
  );
}

export default Background;
