import styled from 'styled-components';

export const FormContainer = styled.div`
  width: 100%;
  max-width: 350px;
  height: auto;
  min-height: 450px;
  border-radius: 10px;
  padding: 25px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  background: #28292B;
  position: relative;
  overflow-x: hidden;
  
  ::after {
    content: "";
    width: 150%;
    height: 45%;
    border-radius: 0 0 50% 50%;
    background: rgba(0, 0, 0, .1);
    position: absolute;
    top: 0;
    left: -25%;
    z-index: -1;
  }
`;

export const FormTitle = styled.h3`
  font-size: 26px;
  font-weight: 400;
  margin: 14px 0;
  text-align: center;
  color: #27AE60;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;
