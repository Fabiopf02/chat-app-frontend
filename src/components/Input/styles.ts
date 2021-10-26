import styled from 'styled-components';

export const InputContainer = styled.div`
  width: 100%;
  margin: 10px 0;

  label {
    font-size: 16px;
    line-height: 23px;
    color: rgba(255, 255, 255, 1);
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 33px;
  border-radius: 8px;
  padding: 4px;
  font-size: 16px;
  border: none;
  outline: none;
  
  background: #C4C4C4;

  :focus {
    background: #CCCCCC;
    border: 1px solid #fff;
  }
`;
