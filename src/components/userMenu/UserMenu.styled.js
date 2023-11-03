import styled from 'styled-components';

export const WrapUserMenu = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  min-width: 260px;
  gap: 10px;
  margin: 0;
  padding: 8px 16px;

  /* .navigate {
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
  } */
`;
// export const TextUserMenu = styled.p`
//   font-size: 20px;
//   font-weight: 700;
//   color: #ffeb3b;
// `;
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
