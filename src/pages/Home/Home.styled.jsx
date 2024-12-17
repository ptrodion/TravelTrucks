import styled from 'styled-components';
import homeBkgImage from '../../assets/img/HomeBkgImage/HomeBkg.jpg';
import { NavLink } from 'react-router-dom';

export const BackgroundImage = styled.div`
  background-image: url('${homeBkgImage}');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  min-height: calc(100vh - 72px);
  position: relative;
`;

export const TextWrapper = styled.div`
  text-align: center;
  color: ${(props) => props.theme.color.mainBkgColor};
  font-size: 48px;
`;

export const StyledNavLink = styled(NavLink)`
  display: inline-block;
  min-width: 173px;
  height: 56px;
  border-radius: 200px;
  padding: 16px 56.5px;
  font-size: 16px;
  line-height: 1.33;
  color: ${(props) => props.theme.color.mainTextColor};
  background-color: ${(props) => props.theme.color.buttonLinkColor};

  &:hover {
    background-color: ${(props) => props.theme.color.buttonLinkColorHover};
  }

  &.active {
    background-color: ${(props) => props.theme.color.buttonLinkColorHover};
  }
`;
