import { useSelector, useDispatch } from "react-redux";
import {
    login,
    refreshToken,
    register,
    logout,
    checkAuthStatus,
    clearErrors

} from "../features/auth/authSlice";

const useAuth = () => {
    const dispatch = useDispatch();
    const { user, isAuthenticated, loading, error, authChecked } = useSelector((state) => state.auth);

    return {
        user,
        isAuthenticated,
        loading,
        error,
        authChecked,
        login: (data) => dispatch(login(data)),
        refreshToken: () => dispatch(refreshToken()),
        register: (data) => dispatch(register(data)),
        logout: () => dispatch(logout()),
        checkAuthStatus: () => dispatch(checkAuthStatus()),
        clearErrors: () => dispatch(clearErrors())
    };
}

export default useAuth;