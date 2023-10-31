import { useAuth } from 'hooks';
import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/userMenu/UserMenu';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { Header, WrapHeader } from './AppBar.styled';
import { NavLink } from 'react-router-dom';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <WrapHeader>
      <Header>
        <NavLink to="/" className="navigate-home">
          Home
        </NavLink>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </Header>
    </WrapHeader>
  );
};
