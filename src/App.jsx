import { Outlet } from "react-router-dom"
import Navbar from "./pages/Home/Navbar"
// import Home from "./pages/Home/Home"


function App() {

  return (
    <>
    <Navbar/>
      <Outlet></Outlet>
    </>
  )
}

export default App
