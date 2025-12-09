import { Outlet } from "react-router-dom"
import Navbar from "../iu/Navbar/Navbar"


const LayoutMain = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  )
}

export default LayoutMain
