import Logo from "./Logo"
import Dropdown from "./Dropdown"
import MenuIcon from '../assets/menu.svg'
import CrossIcon from '../assets/cross.svg'
import NavBarMobile from './NavBarMobile.tsx'
import { NavBarSections } from '../styles/NavBarStyles.ts';
import { useState } from "react";

const NavBar: React.FC = () => {
  const [showMenu, setShowMenu] = useState(false);

  const openMenu = () => {
    setShowMenu(!showMenu)
  }
  console.log(showMenu)

  return (
    <div className="bg-custom-red flex flex-col md:flex-row items-center text-white p-4 relative font-sans">
      <div className="md:hidden flex justify-between items-center w-full">
        <button onClick={openMenu} className="p-2">
          {showMenu ? (
            <img src={CrossIcon} alt="Close Menu" className="w-6 h-6" />
          ) : (
            <img src={MenuIcon} alt="Open Menu" className="w-6 h-6" />
          )}
        </button>
        <Logo/>
      </div>
  
      {showMenu && (
        <div className="md:hidden absolute top-full left-0 w-2/3 bg-white text-black shadow-lg">
          <NavBarMobile />
        </div>
      )}

      <div className="hidden md:flex flex-grow items-center justify-between">
        <Logo />
        <NavBarSections className="flex space-x-4">
          <a href="/cards" className="text-xl p-2 rounded">Cards</a>
          <Dropdown title="Sets">
            <a href="/sets/rubysapphire" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Ruby Sapphire</a>
            <a href="/sets/celebrations" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Celebrations</a>
            <a href="/sets/151" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">151</a>
          </Dropdown>
          <a href="/about" className="text-xl p-2 rounded">About</a>
        </NavBarSections>
      </div>
    </div>
  );
  
}

export default NavBar