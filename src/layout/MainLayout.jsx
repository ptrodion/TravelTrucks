import Header from '../components/Header/Header.jsx';
import MainRouter from '../routers/MainRouter.jsx';

const MainLayout = () => {
  return (
    <main>
      <Header />
      <MainRouter />
    </main>
  );
};

export default MainLayout;
