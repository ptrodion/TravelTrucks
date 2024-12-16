import { NavLink } from 'react-router-dom';
import Logo from '../Logo/Logo.jsx';

const Header = () => {
  return (
    <nav>
      <Logo />
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>{' '}
        </li>
        <li>
          <NavLink to="/campers">Catalog</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
