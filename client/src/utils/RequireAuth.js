import { useLocation, Navigate, Outlet } from 'react-router-dom';
import { useAuthContext } from '../context/auth/authContext';

const RequireAuth = () => {
    const location = useLocation();
    const { user } = useAuthContext();

    const content = (
        user
            ? <Outlet />
            : <Navigate to='/sign-in' state={{ from: location }} replace />
    );

    return content;
};
export default RequireAuth;