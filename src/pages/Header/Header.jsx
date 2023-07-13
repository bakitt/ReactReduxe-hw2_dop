import { Outlet } from "react-router-dom"
import { HeaderComponent } from "../../Components"

const Header = () => {
  return (
    <>
        <HeaderComponent />
        <Outlet />
    </>
  )
}

export default Header