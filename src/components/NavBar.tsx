import Logo from "./Logo"
import Dropdown from "./Dropdown"
import { NavBarBackground, NavBarSections } from '../styles/NavBarStyles.ts';

function NavBar() {

  return (
    <>
        <NavBarBackground>
            <Logo/>
            <NavBarSections>
              <a href="/card/1" className="text-xl p-2 rounded">Cards</a>
            
              <Dropdown title="Sets">
                  <a href="/sets/rubysapphire" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Ruby Sapphire</a>
                  <a href="/sets/celebrations" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Celebrations</a>
                  <a href="/sets/151" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">151</a>
              </Dropdown>
              <a href="/about" className="text-xl p-2 rounded">About</a>
            </NavBarSections>
        </NavBarBackground>
    </>
  )
}

export default NavBar