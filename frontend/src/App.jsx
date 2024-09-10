import { Route, Routes } from "react-router-dom"
import Login from "./screens/auth/Login"
import Register from "./screens/auth/Register"
import { useSelector, useDispatch } from "react-redux"
import { useRefreshMutation } from "./features/auth/authApi"
import { useEffect } from "react"
import { logout } from "./features/auth/authSlice"
import { Toaster } from 'react-hot-toast';
import ProtectedRoute from "./components/ProtectedRoute"
import Dashboard from './screens/Dashboard';
import { BusFront } from "lucide-react"
import { motion } from "framer-motion"



function App() {
  const dispatch = useDispatch();
  const { token, refreshToken} = useSelector((state) => state.auth);
  const [refresh] = useRefreshMutation();

  useEffect(() => {
    const refreshAccessToken = async () => {
        try {
            const result = await refresh().unwrap();
            // dispatch(setCredentials(result.data));
            console.log(result);
        } catch (error) {
            console.log("failed to refresh token", error);
            dispatch(logout());
        }
    };
    if (!token && refreshToken) {
        refreshAccessToken();
    }
    const intervalId = setInterval(() => {
        if (refreshToken) {
            refreshAccessToken();
        }
    }, 14 * 60 * 1000); // Refresh every 14 minutes, adjust as needed
    return () => {
        clearInterval(intervalId);
    };
}, [dispatch, refresh, refreshToken, token]);
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/Login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={
          <ProtectedRoute>
            <Dashboard/>
          </ProtectedRoute>
        }/>
      </Routes>
      <Toaster />

    </div>
  )
}

export default App
