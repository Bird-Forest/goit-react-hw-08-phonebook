import { LoginForm } from 'components/LoginForm/LoginForm';
import { TitleLoginPage, WrapLoginPage } from './Page.styled';

export default function Login() {
  return (
    <WrapLoginPage>
      <TitleLoginPage>Authorization</TitleLoginPage>
      <LoginForm />
    </WrapLoginPage>
  );
}
