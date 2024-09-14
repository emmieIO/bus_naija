import useAuth from "../hooks/useAuth";
import { useLocation, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useEffect } from "react";
import Loader from "./Loader";


const GuestRoute = ({ children }) => {
    const { isAuthenticated, loading } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if (!loading && isAuthenticated) {
            // Navigate to the previous page or home if no previous page
            const back = location.state?.from?.pathname || '/dashboard';
            navigate(back, { replace: true });
        }
    }, [isAuthenticated, loading, location, navigate]);

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
