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
