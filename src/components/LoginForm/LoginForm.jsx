import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { LoginFormWrap } from './LoginForm.styled';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <LoginFormWrap onSubmit={handleSubmit} autoComplete="off">
      <label className="label-form">
        Email
        <input type="email" name="email" className="input-form" />
      </label>
      <label className="label-form">
        Password
        <input type="password" name="password" className="input-form" />
      </label>
      <button type="submit" className="btn-form">
        Sign In
      </button>
    </LoginFormWrap>
  );
};
