// import { Helmet } from 'react-helmet';
import { LoginForm } from 'components/LoginForm/LoginForm';
import { TitleLoginPage, WrapLoginPage } from './Page.styled';

export default function Login() {
  return (
    <WrapLoginPage>
      {/* <Helmet>Authorization</Helmet> */}
      <TitleLoginPage>Authorization</TitleLoginPage>
      <LoginForm />
    </WrapLoginPage>
  );
}
