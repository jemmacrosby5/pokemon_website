import { useState } from "react"
import caretUpSVG from '../assets/caret-up-black.svg'
import caretDownSVG from '../assets/caret-down-black.svg'

const NavBarMobile: React.FC = () => {
  const [showSets, setShowSets] = useState(false);

  const toggleSets = () => {
    setShowSets(!showSets);
  }

  return (
    <>
      <div className="flex flex-col gap-4 pt-2 p-4 bg-white rounded-sm text-black">
        <a href="/cards" className="text-xl p-2">Cards</a>
        <button onClick={toggleSets} className="none">
          <div className="flex items-center">
            <p className="text-xl p-2">Sets</p>
            {showSets ? <img src={caretUpSVG} className='h-5' /> : <img src={caretDownSVG} className='h-5' />}
          </div>
        </button>
        {showSets && (<div>
          <a href="/sets" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Sets Homepage</a>
          <a href="/sets/rubysapphire" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Ruby Sapphire</a>
          <a href="/sets/celebrations" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Celebrations</a>
          <a href="/sets/151" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">151</a>
        </div>)}

        <a href="/about" className="text-xl p-2">About</a>
      </div>
    </>
  )


}

export default NavBarMobile