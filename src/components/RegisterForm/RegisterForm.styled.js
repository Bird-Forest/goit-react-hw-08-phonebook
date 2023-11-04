import styled from 'styled-components';

export const RegisterFormWrap = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  max-width: 320px;
  height: 280px;
  gap: 15px;
  background-color: white;
  margin: 0 auto;
  padding: 10px;
  box-shadow: 0px 4px 7px 1px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 0px 4px 7px 1px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 4px 7px 1px rgba(0, 0, 0, 0.75);

  .label-form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 5px;
    font-size: 16px;
    font-weight: 500;
    color: #03a9f4;
  }
  .input-form {
    border-radius: 4px;
    width: 300px;
    height: 30px;
    padding: 0 8px;
    font-size: 16px;
    font-weight: 700;
    color: #01579b;
    outline: none;
    border: 1px solid #03a9f4;
    &:hover,
    :focus {
      background-color: #80d8ff;
      border: 1px solid #80d8ff;
    }
  }
  .btn-form {
    display: inline-block;
    font-size: 16px;
    font-weight: 500;
    color: white;
    width: 120px;
    height: 30px;
    background-color: #0091ea;
    border-radius: 4px;
    border: 1px solid #0091ea;
    box-shadow: 0px 4px 7px 1px rgba(0, 0, 0, 0.75);
    -webkit-box-shadow: 0px 4px 7px 1px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 4px 7px 1px rgba(0, 0, 0, 0.75);
    cursor: pointer;
    &:hover,
    :focus {
      background-color: #00b0ff;
      border: 1px solid #00b0ff;
    }
  }
`;
