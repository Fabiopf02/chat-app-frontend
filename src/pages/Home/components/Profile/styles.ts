import styled from 'styled-components';

import { MdQrCodeScanner } from 'react-icons/md';
import { Link } from 'react-router-dom';

export const ImageBlock = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const Avatar = styled.img.attrs({
  alt: 'Profile image'
})`
  width: 180px;
  height: 180px;
  border-radius: 50%;
  background: #444444;
  position: relative;
  left: 0;
  right: 0;
  margin: 0 auto;
  border: 4px solid #28292b;
`;

export const Bio = styled.p`
  max-width: 100%;
  text-align: center;
  font-size: 16px;
  margin: 12px 0;
  color: #ffffff;
  font-weight: 200;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

export const LinkButton = styled(Link)`
  width: 100%;
  margin-top: 15px;
  text-decoration: none;
`;

export const MoreOptions = styled.div`
  padding: 8px 10%;

  button {
    margin: 3px 0;
  }
`;

export const ScannerIcon = styled(MdQrCodeScanner).attrs({
  size: 16,
})`
  margin-left: 4px;
`;
