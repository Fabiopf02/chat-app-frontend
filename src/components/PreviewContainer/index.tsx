import React from 'react';

import { PreviewContainer as Container } from './styles';

interface Props {
  padding?: number;
}

const PreviewContainer: React.FC<Props> = ({ children, padding = 15 }) => {
  return (
    <Container padding={padding}>
      {children}
    </Container>
  );
}

export default PreviewContainer;
