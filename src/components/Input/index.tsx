import React from 'react';

import { Input as InputElement, InputContainer } from './styles';

interface Props {
  label: string;
}

const Input: React.FC<Props> = ({ label }) => {
  return (
    <InputContainer>
      <label>
        {label}
        <InputElement />
      </label>
    </InputContainer>
  );
}

export default Input;
