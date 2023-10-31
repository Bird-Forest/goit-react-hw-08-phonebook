import { NavLink } from 'react-router-dom';
import { WrapAuthNaw } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <WrapAuthNaw>
      <NavLink to="/register" className="navigate-up">
        Sing UP
      </NavLink>
      <NavLink to="/login" className="navigate-in">
        Sing IN
      </NavLink>
    </WrapAuthNaw>
  );
};
