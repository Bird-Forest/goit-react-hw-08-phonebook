import styled from 'styled-components';
export const WrapNav = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 0;
  padding: 0;
  .navigate {
    font-family: 'Prompt', sans-serif;
    display: block;
    font-size: 20px;
    font-weight: 700;
    color: white;
    text-decoration: none;
    transition: all 0.3s;

    &.active {
      color: #ffeb3b;
    }
  }
`;
