import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  gap: 8px;
  min-width: 420px;
  margin-top: 80px;
  padding: 8px;
`;
export const MarkField = styled.label`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 4px;
  font-size: 12px;
  font-weight: 500;
  color: #7e57c2;
  padding: 0;
  margin: 0;
`;
export const ContactName = styled.input`
  width: 250px;
  height: 30px;
  font-size: 16px;
  font-weight: 700;
  border-radius: 4px;
  outline: none;
  border: 1px solid #7e57c2;
  color: #673ab7;
  padding: 0 8px;
  &:hover,
  :focus {
    background-color: #b39ddb;
    border: 1px solid #b39ddb;
  }
`;
export const ContactNumber = styled.input`
  width: 150px;
  height: 30px;
  font-size: 16px;
  font-weight: 700;
  border-radius: 4px;
  outline: none;
  color: #673ab7;
  border: 1px solid #7e57c2;
  padding: 0 8px;
  cursor: pointer;
  &:hover,
  :focus {
    background-color: #b39ddb;
    border: 1px solid #b39ddb;
  }
`;
export const BtnAdd = styled.button`
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
  .icon-add {
    width: 30px;
    height: 30px;
    fill: #673ab7;
    &:hover,
    :focus {
      fill: #7c4dff;
    }
  }
`;
