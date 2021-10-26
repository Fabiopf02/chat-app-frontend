import styled from 'styled-components';

interface Props {
  padding?: number;
}

export const PreviewContainer = styled.section<Props>`
  width: 100%;
  max-width: 700px;
  height: 100%;
  max-height: 500px;
  border-radius: 10px;
  padding: ${props => props.padding}px;
  background-color: #28292b;
  position: relative;
  overflow: hidden;
`;
