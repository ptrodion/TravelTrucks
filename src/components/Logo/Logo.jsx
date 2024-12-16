import { NavLink } from 'react-router-dom';
import LogoIcon from '../../assets/icons/LogoIcon/LogoIcon.jsx';

const Logo = () => {
  return (
    <NavLink to="/">
      <div>
        <LogoIcon />
      </div>
    </NavLink>
  );
};

export default Logo;
