// import { NavLink } from "react-router-dom";
import {
  BackgroundImage,
  MainHeader,
  SecondHeader,
  StyledNavLink,
  TextWrapper,
} from './Home.styled.jsx';

const Home = () => {
  return (
    <section>
      <BackgroundImage>
        <TextWrapper>
          <MainHeader>Campers of your dreams</MainHeader>
          <SecondHeader>
            You can find everything you want in our catalog
          </SecondHeader>
          <StyledNavLink to="/campers">View Now</StyledNavLink>
        </TextWrapper>
      </BackgroundImage>
    </section>
  );
};

export default Home;
