import { NavLink } from 'react-router-dom';
import LogoIcon from '../../assets/icons/LogoIcon/LogoIcon.jsx';
import { LogoStyled } from './Logo.styled.jsx';

const Logo = () => {
  return (
    <NavLink to="/">
      <LogoStyled>
        <LogoIcon />
      </LogoStyled>
    </NavLink>
  );
};

export default Logo;
