import { BrowserRouter } from 'react-router-dom';
import MainLayout from './layout/MainLayout.jsx';

const App = () => {
  return (
    <BrowserRouter>
      <MainLayout />
    </BrowserRouter>
  );
};

export default App;
