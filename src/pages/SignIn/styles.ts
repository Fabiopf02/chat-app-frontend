import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  min-width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  position: absolute;
  z-index: 2;
  top: 0;
  left: 0;
`;

export const Form = styled.form`
  margin-top: 20px;
  width: 100%;
`;

export const ForgotPassword = styled.div`
  width: 100%;
  margin: 4px 0;
  font-size: 14px;
  text-align: right;
  color: rgba(249, 249, 249, 0.9);
  cursor: pointer;
  margin-bottom: 20px;

  :hover {
    filter: brightness(0.9);
  }
`;

export const Submit = styled.div`
  margin: 15px 0;
`;

export const FormLink = styled(Link)`
  button {
    background: rgba(86, 204, 242, 0.2);
  }
  text-decoration: none;
`;
