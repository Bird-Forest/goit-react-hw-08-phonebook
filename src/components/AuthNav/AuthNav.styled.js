import styled from 'styled-components';

export const WrapAuthNaw = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  min-width: 200px;
  gap: 10px;
  margin: 0;
  padding: 8px 16px;
  .navigate-up {
    font-family: 'Prompt', sans-serif;
    display: block;
    font-size: 20px;
    font-weight: 700;
    color: white;
    text-decoration: none;
    transition: all 0.3s;
    &.active {
      color: #0091ea;
    }
  }
  .navigate-in {
    font-family: 'Prompt', sans-serif;
    display: block;
    font-size: 20px;
    font-weight: 700;
    color: white;
    text-decoration: none;
    transition: all 0.3s;
    &.active {
      color: #64dd17;
    }
  }
  @media screen and (min-width: 800px) {
    /* width: 800px; */
    padding: 8px 20px;
  }
`;
