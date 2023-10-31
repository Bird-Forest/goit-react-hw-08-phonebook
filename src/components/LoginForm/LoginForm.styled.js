import styled from 'styled-components';

export const LoginFormWrap = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  width: 320px;
  height: 200px;
  gap: 15px;
  background-color: white;
  margin-top: 100px;
  padding: 10px;
  box-shadow: 0px 4px 7px 1px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 0px 4px 7px 1px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 4px 7px 1px rgba(0, 0, 0, 0.75);
  margin: 0 auto;
  .label-form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 5px;
    font-size: 16px;
    font-weight: 500;
    color: #00e676;
  }
  .input-form {
    border-radius: 4px;
    width: 300px;
    height: 30px;
    padding: 0 8px;
    font-size: 16px;
    font-weight: 700;
    color: #388e3c;
    outline: none;
    border: 1px solid #00e676;
    &:hover,
    :focus {
      background-color: #ccff90;
      border: 1px solid #ccff90;
    }
  }
  .btn-form {
    display: inline-block;
    font-size: 16px;
    font-weight: 500;
    color: white;
    width: 120px;
    height: 30px;
    background-color: #64dd17;
    border-radius: 4px;
    border: 1px solid #64dd17;
    box-shadow: 0px 4px 7px 1px rgba(0, 0, 0, 0.75);
    -webkit-box-shadow: 0px 4px 7px 1px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 4px 7px 1px rgba(0, 0, 0, 0.75);
    cursor: pointer;
    &:hover,
    :focus {
      background-color: #76ff03;
      border: 1px solid #76ff03;
    }
  }
`;
