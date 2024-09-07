import { Route, Routes } from "react-router-dom"
import Login from "./screens/auth/Login"

function App() {


  return (
    <>
    <Routes>
      <Route path="/" element={<h1>Home</h1>} />
      <Route path="/Login" element={<Login/>} />
      <Route path="/register" element={<h1>Dashboard</h1>} />
    </Routes>

    </>
  )
}

export default App
