import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home/Home.jsx';
import Catalog from '../pages/Catalog/Catalog.jsx';

// const Home = lazy(() => import('../pages/Home/Home'));
// const Catalog = lazy(() => import('../pages/Catalog/Catalog'));

const MainRouter = () => {
  return (
    <Suspense>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/campers" element={<Catalog />} />
        <Route path="/campers/:id" element={'Campers  ID page'} />
      </Routes>
    </Suspense>
  );
};

export default MainRouter;
