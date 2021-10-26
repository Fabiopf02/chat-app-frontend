import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1280px;
  height: calc(100% - 70px);
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 20px;
  padding-bottom: 40px;
  position: absolute;
  z-index: 2;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
`;

export const Title = styled.h3`
  font-size: 20px;
  line-height: 23px;
  margin-bottom: 8px;
  font-weight: 350;
  color: #FFFFFF;
`;

export const Rooms = styled.div`
  width: 100%;
  height: auto;
  margin-bottom: 20px; 
  max-width: 700px;
`;
