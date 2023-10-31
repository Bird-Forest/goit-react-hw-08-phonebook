import { Helmet } from 'react-helmet';
import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { TitleRegisterPage, WrapRegisterPage } from './Page.styled';

export default function Register() {
  return (
    <WrapRegisterPage>
      <Helmet>Registration</Helmet>
      <TitleRegisterPage>Registration</TitleRegisterPage>
      <RegisterForm />
    </WrapRegisterPage>
  );
}
