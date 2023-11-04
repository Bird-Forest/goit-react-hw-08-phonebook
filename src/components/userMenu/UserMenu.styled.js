import styled from 'styled-components';

export const WrapUserMenu = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  min-width: 260px;
  gap: 10px;
  margin: 0;
  padding: 8px 16px;
`;

export const BtnUserMenu = styled.button`
  display: inline-block;
  color: white;
  width: 40px;
  height: 40px;
  outline: none;
  border: none;
  cursor: pointer;
  background-color: #ff6d00;
  .icon-exit {
    width: 30px;
    height: 30px;
    fill: white;
    &:hover,
    :focus {
      fill: #ffeb3b;
    }
  }
`;
