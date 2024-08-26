import Logo from "./Logo"
import MenuIcon from '../assets/menu.svg'
import { NavBarBackground } from '../styles/NavBarStyles.ts';
import { useState } from "react";

const NavBar: React.FC = () => {
    const [showMenu, setShowMenu] = useState(false);

    const openMenu = () => {
        setShowMenu(!openMenu)
    }
  return (
    <>
        <NavBarBackground>
            <img className="ml-1" src={MenuIcon}/>
            <Logo/>
        </NavBarBackground>
    </>
  )
}

export default NavBar