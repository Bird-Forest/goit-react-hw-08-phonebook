import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks';
import { WrapNav } from './Navigation.styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <WrapNav>
      {isLoggedIn ? (
        <NavLink to="/contacts" className="navigate">
          Contacts
        </NavLink>
      ) : (
        <h3 className="title">My contacts</h3>
      )}
    </WrapNav>
  );
};
