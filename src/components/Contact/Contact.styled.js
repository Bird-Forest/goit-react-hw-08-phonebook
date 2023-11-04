import styled from 'styled-components';

export const ContactWrap = styled.li`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-end;
  min-width: 360px;
  gap: 8px;
  padding: 0;
  margin: 0;
`;
export const ContactName = styled.p`
  display: inline-block;
  width: 280px;
  height: 30px;
  font-size: 16px;
  font-weight: 700;
  border-radius: 4px;
  outline: none;
  border: 1px solid #7e57c2;
  color: #673ab7;
  padding: 0 8px;
  margin: 0;
`;
export const WrapNumber = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  width: 240px;
  padding: 0;
  margin: 0;
`;
export const ContactNumber = styled.p`
  width: 180px;
  height: 30px;
  font-size: 16px;
  font-weight: 700;
  border-radius: 4px;
  outline: none;
  color: #673ab7;
  border: 1px solid #7e57c2;
  padding: 0 8px;
  margin: 0;
  cursor: pointer;
`;
export const BtnDelete = styled.button`
  display: inline-block;
  background-color: #ede7f6;
  width: 30px;
  height: 30px;
  color: white;
  outline: none;
  border: none;
  cursor: pointer;
  padding: 0;
  margin: 0;
  .icon-delete {
    width: 30px;
    height: 30px;
    fill: #673ab7;
    &:hover,
    :focus {
      fill: #7c4dff;
    }
  }
`;
