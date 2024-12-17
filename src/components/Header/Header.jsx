import Logo from '../Logo/Logo.jsx';
import { HeaderNav, HeaderNavList, NavLinkElement } from './Header.styled.jsx';

const Header = () => {
  return (
    <HeaderNav>
      <Logo />
      <HeaderNavList>
        <li>
          <NavLinkElement to="/">Home</NavLinkElement>
        </li>
        <li>
          <NavLinkElement to="/campers">Catalog</NavLinkElement>
        </li>
      </HeaderNavList>
    </HeaderNav>
  );
};

export default Header;
