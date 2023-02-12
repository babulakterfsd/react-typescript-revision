import { RouterProvider } from 'react-router-dom';
import AuthProvider from './contexts/AuthProvider';
import router from './routes/AllRoutes';
import './styles/App.css';

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App;
