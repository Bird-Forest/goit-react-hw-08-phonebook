import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-end;
  gap: 4px;
  min-width: 360px;
  /* margin-top: 100px; */
  /* margin-left: auto;
  margin-right: auto; */
  padding: 8px 0;
  margin: 0 auto;
  @media screen and (min-width: 800px) {
    width: 800px;
    /* margin-top: 60px; */
  }
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
  width: 280px;
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
export const WrapNumber = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 8px;
  width: 240px;
`;
export const ContactNumber = styled.input`
  width: 180px;
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
