import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: auto;
  padding: 6px 30px;
  display: flex;
  flex-direction: column;
`;

interface Props {
  right?: boolean;
}

export const Container = styled.div<Props>`
  position: relative;
  align-self: ${props => props.right ? 'flex-end' : 'flex-start'};
  width: auto;
  max-width: 85%;
  height: auto;
  padding: 12px;
  background: #444;
  border-radius: 10px;

  ::after {
    content: "";
    position: absolute;
    width: 14px;
    height: 14px;
    border-radius: 4px;
    background: #444;
    transform: rotateZ(45deg);
    ${props => props.right ? 'right: -5px;' : 'left: -5px;'}
    top: calc(30% - 10px);
  }
`;

export const UserImage = styled.div<Props>`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: #555;
  position: absolute;
  ${props => props.right ? 'right: -45px;' : 'left: -45px;'}
  top: calc(30% - 20px);
`;
  
export const Title = styled.h4`
  font-size: 16px;
  line-height: 19px;
  color: #9B51E0;
`;

export const Content = styled.p`
  margin-top: 5px;
  font-size: 16px;
  line-height: 19px;
  color: #FFFFFF;
  font-weight: 300;
`;
