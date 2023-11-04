import styled from 'styled-components';

export const WrapHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  background-color: #ff6d00;
  min-width: 360px;
  max-height: 100px;
  margin: 0 auto;
  padding: 0;
  box-shadow: 0px 4px 7px 1px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 0px 4px 7px 1px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 4px 7px 1px rgba(0, 0, 0, 0.75);
  @media screen and (min-width: 800px) {
    width: 800px;
    height: 60px;
  }
`;

export const HeaderLeft = styled.div`
  display: flex;
  width: 80px;
  justify-content: flex-start;
  align-items: center;
  padding: 8px 16px;
  .navigate-home {
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
  @media screen and (min-width: 800px) {
    padding: 8px 20px;
  }
`;
export const HeaderRight = styled.div`
  display: flex;
  gap: 10px;
  min-width: 360px;
  justify-content: flex-end;
  align-items: center;
  background-color: #ff6d00;
  padding: 8px 16px;
  @media screen and (min-width: 800px) {
    padding: 8px 20px;
  }
`;
