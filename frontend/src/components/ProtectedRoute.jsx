import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Loader from './Loader';

const ProtectedRoute = ({ children }) => {
    const { isAuthenticated, loading, user } = useSelector(state => state.auth);
    const navigate = useNavigate();

    useEffect(() => {
        if (!loading && isAuthenticated && user && user.isverified == false) {
            navigate("/verify-account", { replace: true });
        }

        if (!loading && !isAuthenticated) {
            navigate("/login", { replace: true });
        }

    }, [isAuthenticated, loading, navigate, user]);

    if (loading) {
        return <Loader />; // Show loader while data is loading
    }

    return isAuthenticated ? children : null;
};

ProtectedRoute.propTypes = {
    children: PropTypes.node.isRequired,
};

export default ProtectedRoute;
