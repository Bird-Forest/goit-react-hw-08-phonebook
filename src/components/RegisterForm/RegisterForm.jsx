import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { RegisterFormWrap } from './RegisterForm.styled';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const user = {
      name: form.elements.name.value,
      email: form.elements.email.value,
      password: form.elements.password.value,
    };

    dispatch(register(user));
    form.reset();
  };

  return (
    <RegisterFormWrap onSubmit={handleSubmit} autoComplete="off">
      <label className="label-form">
        Username
        <input type="text" name="name" className="input-form" />
      </label>
      <label className="label-form">
        Email
        <input type="email" name="email" className="input-form" />
      </label>
      <label className="label-form">
        Password
        <input type="password" name="password" className="input-form" />
      </label>
      <button type="submit" className="btn-form">
        Sign Up
      </button>
    </RegisterFormWrap>
  );
};
