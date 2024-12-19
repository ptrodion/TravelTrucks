import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HeaderNav = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  background-color: ${(props) => props.theme.color.mainBkgColor};
  height: 72px;
  position: relative;
`;

export const HeaderNavList = styled.ul`
  display: flex;
  gap: ${(props) => props.theme.gaps.xl};
`;

export const NavLinkElement = styled(NavLink)`
  font-weight: ${(props) => props.theme.font.weights.medium};
  line-height: ${(props) => props.theme.lineHeight.medium};

  &.active {
    color: ${(props) => props.theme.color.buttonLinkColorHover};
  }
`;
