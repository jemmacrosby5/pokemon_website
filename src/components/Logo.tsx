import logo from "../assets/pikachu-face.svg";

function Logo() {

    return (
      <>
        <div className='flex flex-row gap-2 items-center p-2'>
            <img className='h-12' src={logo} alt="" />
            <p className="text-xl"> PokéJave</p>
        </div>
      </>
    )
  }
  
  export default Logo