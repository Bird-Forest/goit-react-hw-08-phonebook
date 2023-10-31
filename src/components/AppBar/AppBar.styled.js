import styled from 'styled-components';

export const WrapHeader = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: #ff6d00;
  width: 100%;
  height: 60px;
  padding: 0;
  box-shadow: 0px 4px 7px 1px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 0px 4px 7px 1px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 4px 7px 1px rgba(0, 0, 0, 0.75);
`;

export const Header = styled.header`
  display: flex;
  gap: 10px;
  min-width: 420px;
  justify-content: space-between;
  align-items: center;
  padding: 8px 16px;
  margin: 0 auto;
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
`;
