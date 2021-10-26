import styled from 'styled-components';

interface Props {
  bg?: string;
}

export const Button = styled.button<Props>`
  transition: .1s;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 350px;
  min-height: 37px;
  border-radius: 8px;
  font-size: 18px;
  line-height: 26px;
  color: #FFFFFF;
  background: ${props => props.bg ? props.bg : '#27AE60'};
  border: 1px;
  cursor: pointer;
  filter: drop-shadow(0 0 4px rgba(0, 0, 0, .2));

  :hover {
    filter: brightness(0.9);
  }
  :active {
    filter: brightness(0.7);
  }
`;