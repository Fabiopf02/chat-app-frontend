import React from 'react';

import { FormContainer as Form, FormTitle } from './styles';

interface Props {
  title: string;
}

const FormContainer: React.FC<Props> = ({ children, title }) => {
  return (
    <Form>
      <FormTitle>{title}</FormTitle>
      {children}
    </Form>
  );
};

export default FormContainer;
