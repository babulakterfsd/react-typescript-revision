import { Navigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

function PrivateRoute({ children }) {
  const { auth } = useAuth();
  const { isLoggedIn } = auth;
  return isLoggedIn ? children : <Navigate to='/' replace />;
}

export default PrivateRoute;
