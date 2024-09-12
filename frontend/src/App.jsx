import {Route, Routes } from "react-router-dom"
import Login from "./screens/auth/Login"
import Register from "./screens/auth/Register"
import { Toaster } from 'react-hot-toast';
import ProtectedRoute from "./components/ProtectedRoute"
import Dashboard from './screens/Dashboard';
import useAuth  from './hooks/useAuth';
import { useEffect } from "react";
import GuestRoute from "./components/GuestRoute";
import Home from "./screens/Home";
import About from "./screens/About";
import Courier from "./screens/Courier";
import Tickets from "./screens/Tickets";
import ContactUs from "./screens/ContactUs";





function App() {
 const {checkAuthStatus, authChecked, loading} = useAuth();

  useEffect(() => {
    if(!authChecked && !loading){
      checkAuthStatus()
    }

  },[checkAuthStatus, loading , authChecked])


  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about-us" element={<About/>} />
        <Route path="/courier" element={<Courier/>} />
        <Route path="/bus-tickets" element={<Tickets/>} />
        <Route path="/contact-us" element={<ContactUs/>} />
        <Route path="/Login" element={
          <GuestRoute>
          <Login />
          </GuestRoute>
          } />
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
