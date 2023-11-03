import { useAuth } from 'hooks';
import { HeaderLeft, WrapHeader } from './AppBar.styled';
// import { NavLink, Navigate } from 'react-router-dom';
import { UserMenu } from 'components/userMenu/UserMenu';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { Navigation } from 'components/Navigation/Navigation';
import { NavLink } from 'react-router-dom';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <WrapHeader>
      <HeaderLeft>
        <NavLink to="/" className="navigate-home">
          Home
        </NavLink>
      </HeaderLeft>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </WrapHeader>
  );
};
