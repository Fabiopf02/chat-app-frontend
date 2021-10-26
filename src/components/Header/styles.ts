import styled from 'styled-components';

export const HeaderContainer = styled.header`
  width: 100%;
  max-width: 1180px;
  min-height: 70px;
  left: 0;
  right: 0;
  margin: 0 auto;
  padding: 20px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  .row {
    display: flex;
    justify-content: space-between;
    width: auto;
    margin-right: 60px;
    padding: 2px 4px;
    display: flex;
    align-items: center;
  }

  @media (max-width: 500px) {
    flex-direction: column;
  }
`;


export const Back = styled.button.attrs({
  title: 'back',
})`
  padding: 6px;
  font-size: 30px;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0;
  color: #ffffff;
  margin-right: 15px;
  cursor: pointer;

  :hover {
    filter: brightness(0.8);
  }
`;

export const Title = styled.h1`
  font-size: 32px;
  font-weight: 500;
  color: #FFFFFF;
  min-width: 150px;
`;

export const RoomName = styled.h2`
  font-weight: 400;
  font-size: 22px;
  color: #56CCF2;
`;
