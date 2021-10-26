import styled from 'styled-components';

export const Container = styled.div`
  width: auto;
  max-width: 700px;
  height: 100%;
  max-height: 500px;
  text-align: center;
  color: #FFFFFF;
  font-size: 22px;
  
  .ex {
    display: inline-block;
    width: 200px;
    height: 150px;
    margin: 10% 5%;
    border-radius: 15px;
    background: #444444;
  }

  @media (max-width: 840px) {
    display: none;
  }
`;
