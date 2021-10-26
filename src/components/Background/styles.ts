import styled from 'styled-components';
import Bg1 from '../../assets/bg-1.svg';
import Bg2 from '../../assets/bg-2.svg';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: #141418;
  overflow: hidden;
  position: relative;

  ::before, ::after {
    content: '';
    width: 90%;
    height: 90%;
    max-width: 460px;
    max-height: 460px;
    position: absolute;
  }
  ::after {
    background: url(${Bg1}) no-repeat bottom;
    background-size: contain;
    left: 0;
    bottom: 0;
  }
  ::before {
    background: url(${Bg2}) no-repeat top;
    background-size: contain;
    top: 0;
    right: 0;
  }

  .circle {
    position: absolute;
    width: 250px;
    height: 250px;
    right: -50px;
    bottom: -50px;
    background: #28292b20;
    border-radius: 50%;
  }
`;
