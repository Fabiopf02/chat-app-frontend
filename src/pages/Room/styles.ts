import styled from 'styled-components';
import QrCodeReact from 'qrcode.react';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  width: 100%;
  max-width: 1280px;
  height: calc(100% - 70px);
  position: absolute;
  z-index: 2;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

export const Text = styled.p`
  text-align: center;
  width: 80%;
  text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  color: #56CCF2;
  left: 0;
  right: 0;
  margin: 20px auto;
`;

export const QrContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 200px;
  border-radius: 10px;
  padding: 10px 0;
  left: 0;
  right: 0;
  background: #fff;
  margin: 0 auto;
  border: 8px solid #28292b;
`;

export const QrCode = styled(QrCodeReact).attrs({
  size: 175,
  bgColor: "transparent",
  fgColor: "#141418",

})``;

export const Code = styled.p`
  font-size: 18px;
  font-weight: 400;
  text-align: center;
  margin: 10px 0;
  color: #9B51E0;
`;

export const LinkButton = styled(Link)`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 40px;
  background: rgba(111, 207, 151, .4);
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  transition: .3s;
  p {
    font-size: 20px;
    font-weight: 400; 
    color: #F9F9F9;
  }

  :hover {
    filter: brightness(1.15);
  }
`;
