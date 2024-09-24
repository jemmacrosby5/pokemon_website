import { useState, useRef } from "react";
import caretUpSVG from '../assets/caret-up-black.svg';
import caretDownSVG from '../assets/caret-down-black.svg';
import setList from '../utils/setList.json';
import { useClickOutside } from "../utils/customHooks";

interface props {
  closeMenu: () => void;
}

const NavBarMobile: React.FC<props> = ({ closeMenu }) => {
  const [showSets, setShowSets] = useState(false);
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  useClickOutside(wrapperRef, () => {
    closeMenu();
  });

  const toggleSets = () => {
    setShowSets(!showSets);
  }

  return (
    <>
      <div ref={wrapperRef} className="flex flex-col gap-4 pt-2 p-4 bg-white rounded-sm text-black max-h-[90vh] overflow-scroll z-100" >
        <a href="/cards" className="text-xl p-2">Cards</a>
        <button onClick={toggleSets} className="none">
          <div className="flex items-center">
            <p className="text-xl p-2">Sets</p>
            {showSets ? <img src={caretUpSVG} className='h-5' /> : <img src={caretDownSVG} className='h-5' />}
          </div>
        </button>
        {showSets && (<div>
          <a href="/sets" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Sets Homepage</a>
          {setList.map((set) => (
              <a
                key={set.id}
                href={`/sets/${set.id}`}
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                {set.name}
              </a>
            ))}
        </div>)}

        <a href="/about" className="text-xl p-2">About</a>
      </div>
    </>
  )


}

export default NavBarMobile