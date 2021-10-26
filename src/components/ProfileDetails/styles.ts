import styled from 'styled-components';

export const Container = styled.div`
  // position: absolute;
  width: 100%;
  max-width: 700px;
  height: 100%;
  left: 0;
  right: 0;
  padding: 15px;
  overflow-y: auto;
  margin: 0 auto;
  // z-index: 2;
`;

export const Header = styled.div`
  width: 100%;
  height: auto;
  min-height: 400px;
  background: #191919;
  border-radius: 10px;
  position: relative;
  box-shadow: 0 0 4px #131316;

  ::after {
    content: "";
    width: 100%;
    height: 150px;
    position: absolute;
    background: #6FCF9799;
    top: 0;
    left: 0;
    border-radius: 10px 10px 0 0;
  }
`;

export const Block = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 2;
  padding: 0 16px;
`;

export const ImageBlock = styled.div`
  width: 100%;
  height: 230px;
  display: flex;
  align-items: flex-end;
  position: relative;
  
  .border {
    border-radius: 50%;
    border: 8px solid #191919;
    background: #7159c1;
    width: 180px;
    height: 180px;
  }

  @media (max-width: 550px) {
    justify-content: center;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: #6FCF9799;
  object-fit: cover;
  cursor: pointer;
`;

export const Texts = styled.div`
  width: 100%;
  height: auto;
  padding: 4px;
  
  @media (max-width: 550px) {
    text-align: center;
  }
`;

export const UserName = styled.h2`
  color: #cccccc;
  font-weight: 500;
`;

export const Bio = styled.p`
  color: #a8a8b3;
  padding: 5px 0;
  margin-bottom: 10px;
  font-size: 16px;
  font-weight: 350;
`;

export const MoreInfo = styled(Bio)`
  color: #cacaca;
  padding: 2px 0;
  margin: 0;
  font-weght: 400;
`;
