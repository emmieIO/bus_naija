import {Route, Routes } from "react-router-dom"
import Login from "./screens/auth/Login"
import Register from "./screens/auth/Register"
import { Toaster } from 'react-hot-toast';
import ProtectedRoute from "./components/ProtectedRoute"
import Dashboard from './screens/Dashboard';
import useAuth  from './hooks/useAuth';
import { useEffect } from "react";
import Home from "./screens/Home";
import About from "./screens/About";
import Courier from "./screens/Courier";
import Tickets from "./screens/Tickets";
import ContactUs from "./screens/ContactUs";
import { useDispatch } from 'react-redux';
import { checkAuthStatus } from "./features/auth/authSlice";
import VerifyAccount from "./screens/auth/VerifyAccount";
import ForgotPassword from "./screens/auth/ForgotPassword";
import ResetPassword from "./screens/auth/ResetPassword";





function App() {
 const {authChecked, loading} = useAuth();
 const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(checkAuthStatus());
    if(!authChecked && !loading){
      dispatch(checkAuthStatus())
    }

  },[loading , authChecked, dispatch])


  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about-us" element={<About/>} />
        <Route path="/courier" element={<Courier/>} />
        <Route path="/bus-tickets" element={<Tickets/>} />
        <Route path="/contact-us" element={<ContactUs/>} />
        <Route path="/Login" element={<Login />}/>
        <Route path="/register" element={<Register />} />
        <Route path="/verify-account" element={<VerifyAccount />} />
        <Route path="/forgot-password" element={<ForgotPassword/>}/>
        <Route path="/reset-password" element={<ResetPassword/>}/>
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
