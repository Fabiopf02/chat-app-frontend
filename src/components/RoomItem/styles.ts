import styled from 'styled-components';

import { Link as RouterLink } from 'react-router-dom';

export const Link = styled(RouterLink)`
  text-decoration: none;
`;

export const Container = styled.div`
  width: 95%;
  height: 87px;
  border-radius: 8px;
  background: rgba(79, 79, 79, 0.18);
  margin: 15px 0;
  transition: .15s;
  padding: 10px;
  cursor: pointer;
  
  :hover {
    filter: brightness(1.22);
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, .1);
    transform: scale(1.006);
  }
`;

export const Title = styled.h4`
  font-size: 17px;
  margin-bottom: 1px;
  font-weight: 550;
  color: #9B51E0;
  line-height: 19px;
`;

export const Message = styled.p`
  max-width: 100%;
  font-size: 15px;
  line-height: 19px;
  color: #ccc;
  font-weight: 200;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
