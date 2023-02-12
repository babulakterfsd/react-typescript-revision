import { useRouteError } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import Navbar from '../ui/Navbar';

export default function ErrorPage() {
  const { auth } = useAuth();
  const error = useRouteError();

  return (
    <>
      <Navbar auth={auth} />
      <div className='flex justify-center items-center'>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
    </>
  );
}
