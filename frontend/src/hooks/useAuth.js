import { useSelector, useDispatch } from "react-redux";
import {
    login,
    register,
    logout,
    verifyEmail,
    resendCode,
    checkAuthStatus,
    clearErrors

} from "../features/auth/authSlice";
import { useEffect } from "react";

const useAuth = () => {
    const dispatch = useDispatch();
    const { user, isAuthenticated, loading, error, token, authChecked } = useSelector((state) => state.auth);
    useEffect(() => {
        // Clear errors on route change
        dispatch(clearErrors());
    }, [dispatch]);

    return {
        user,
        isAuthenticated,
        token,
        loading,
        error,
        authChecked,
        login: (data) => dispatch(login(data)),
        register: (data) => dispatch(register(data)),
        logout: () => dispatch(logout()),
        checkAuthStatus: () => dispatch(checkAuthStatus()),
        verifyEmail: (data) => dispatch(verifyEmail(data)),
        resendCode: (data) => dispatch(resendCode(data)),
        clearErrors: () => dispatch(clearErrors())
    };
}

export default useAuth;