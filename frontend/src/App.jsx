import { Route, Routes } from "react-router-dom"
import Login from "./screens/auth/Login"
import Register from "./screens/auth/Register"

function App() {


  return (
    <>
    <Routes>
      <Route path="/" element={<h1>Home</h1>} />
      <Route path="/Login" element={<Login/>} />
      <Route path="/register" element={<Register/>} />
    </Routes>

    </>
  )
}

export default App
