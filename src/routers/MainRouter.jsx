import { lazy, Suspense } from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';
import { Loader } from '../components/Loader/Loader.jsx';

const Home = lazy(() => import('../pages/Home/Home'));
const Catalog = lazy(() => import('../pages/Catalog/Catalog'));

const MainRouter = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/campers" element={<Catalog />} />
        <Route path="/campers/:id" element={'Campers  ID page'} />
      </Routes>
      <Outlet />
    </Suspense>
  );
};

export default MainRouter;
