import styled from 'styled-components';
export const FilterWrap = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 4px;
  padding: 0;
  margin: 0;
  .icon-search {
    width: 30px;
    height: 30px;
    fill: #ffeb3b;
  }
`;
export const FilterInput = styled.input`
  width: 150px;
  height: 30px;
  font-size: 16px;
  font-weight: 700;
  border-radius: 4px;
  outline: none;
  color: #ff6d00;
  border: 1px solid #ff6d00;
  padding: 0 8px;
  cursor: pointer;
`;
