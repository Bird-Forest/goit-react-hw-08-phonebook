import { styled } from 'styled-components';

export const WrapContainair = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  min-width: 360px;
  height: 1200px;
  margin: 0 auto;
  padding: 0;
  @media screen and (min-width: 800px) {
    width: 800px;
  }
`;
