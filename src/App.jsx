import { BrowserRouter } from 'react-router-dom';
import MainLayout from './layout/MainLayout.jsx';
import ResetStyles from './ResetStyles.jsx';

const App = () => {
  return (
    <BrowserRouter>
      <MainLayout />
      <ResetStyles />
    </BrowserRouter>
  );
};

export default App;
