import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { GiExitDoor } from 'react-icons/gi';
import { BtnUserMenu, WrapUserMenu } from './UserMenu.styled';
import Filter from 'components/Filter/Filter';
import { Link } from 'react-router-dom';

export const UserMenu = () => {
  const dispatch = useDispatch();
  return (
    <WrapUserMenu>
      <Filter />
      <BtnUserMenu type="button" onClick={() => dispatch(logOut())}>
        <Link to="/">
          <GiExitDoor className="icon-exit" />
        </Link>
      </BtnUserMenu>
    </WrapUserMenu>
  );
};
