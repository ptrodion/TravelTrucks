import { Route, Routes } from 'react-router-dom';

const MainRouter = () => {
  return (
    <Routes>
      <Route path="/" element={'Home page'} />
      <Route path="/campers" element={'Campers page'} />
      <Route path="/campers/:id" element={'Campers  ID page'} />
    </Routes>
  );
};

export default MainRouter;
