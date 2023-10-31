import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks';
import { WrapNav } from './Navigation.styled';
// import { UserMenu } from 'components/userMenu/UserMenu';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <WrapNav>
      {isLoggedIn && (
        <NavLink to="/contacts" className="navigate">
          Contacts
        </NavLink>
      )}
    </WrapNav>
  );
};
