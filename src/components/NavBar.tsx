import Logo from "./Logo"
import Dropdown from "./Dropdown"

function NavBar() {

  return (
    <>
        <div className="flex flex-row items-center gap-8 border-b shadow-md bg-slate-200 px-4 py-2">
            <Logo/>
            <button className="text-xl p-2 rounded hover:bg-gray-100 focus:outline-none">Cards</button>
            
            <Dropdown title="Sets">
            <a href="/service1" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Ruby Sapphire</a>
            <a href="/service2" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Celebrations</a>
            <a href="/service3" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">151</a>
          </Dropdown>
          <button className="text-xl p-2 rounded hover:bg-gray-100 focus:outline-none">About</button>
        </div>
    </>
  )
}

export default NavBar