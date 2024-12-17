// import { NavLink } from "react-router-dom";
import { BackgroundImage, StyledNavLink, TextWrapper } from './Home.styled.jsx';

const Home = () => {
  return (
    <section>
      <BackgroundImage>
        <TextWrapper>
          <h1>Campers of your dreams</h1>
          <h2>You can find everything you want in our catalog</h2>
          <StyledNavLink to="/campers">View Now</StyledNavLink>
        </TextWrapper>
      </BackgroundImage>
    </section>
  );
};

export default Home;
