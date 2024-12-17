import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home/Home.jsx';

// const Home = lazy(() => import('../pages/Home/Home'));

const MainRouter = () => {
  return (
    <Suspense>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/campers" element={'Campers page'} />
        <Route path="/campers/:id" element={'Campers  ID page'} />
      </Routes>
    </Suspense>
  );
};

export default MainRouter;
