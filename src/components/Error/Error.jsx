import React from 'react';
import { WrapError } from './Error.styled';

export const ErrorMessage = ({ message }) => {
  return <WrapError>{message}</WrapError>;
};

export default ErrorMessage;
