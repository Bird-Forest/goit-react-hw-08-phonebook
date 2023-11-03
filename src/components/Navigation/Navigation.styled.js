import styled from 'styled-components';
export const WrapNav = styled.div`
  display: flex;
  width: 150px;
  justify-content: center;
  align-items: center;
  /* gap: 10px; */
  margin: 0;
  padding: 8px 16px;
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
  .title {
    font-family: 'Prompt', sans-serif;
    display: block;
    font-size: 20px;
    font-weight: 700;
    color: white;
    margin: 0;
    padding: 0;
  }
  @media screen and (min-width: 800px) {
    /* width: 800px; */
    padding: 8px 20px;
  }
`;
