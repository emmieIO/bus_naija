import useAuth from "../hooks/useAuth";
import { useLocation, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useLayoutEffect } from "react";
import Loader from "./Loader";


const GuestRoute = ({ children }) => {
    const { isAuthenticated, loading, user } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    useLayoutEffect(() => {
        if (!loading && isAuthenticated && user.isVerified == false) {
            // Navigate to the previous page or home if no previous page
            navigate('/verify-account', { replace: true });
        }

        if (!loading && isAuthenticated && user.isVerified) {
            // Navigate to the previous page or home if no previous page
            const back = location.state?.from?.pathname || '/dashboard';
            navigate(back, { replace: true });
        }
    }, [isAuthenticated, loading, location, navigate, user]);

    if (loading) {
            return<>
            <Loader/>
            </>;
    }
    return children;
};

GuestRoute.propTypes = {
    children: PropTypes.node.isRequired
};

export default GuestRoute;
