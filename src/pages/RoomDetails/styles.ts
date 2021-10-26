import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: calc(100% - 70px);
  position: absolute;
  z-index: 2;
  left: 0;
  bottom: 0;
`;

export const Buttons = styled.div`
  width: 100%;
  margin: 12px 0;
  display: flex;
  align-items: center;
  gap: 5%;
  justify-content: space-between;
`;
