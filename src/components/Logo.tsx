import logo from "../assets/pikachu-face.svg";

function Logo() {

    return (
      <>
      <a href="/">
        <div className='flex flex-row gap-2 items-center mx-auto'>
            <img className='h-12 min-w-20' src={logo} alt="" />
            <p className="text-xl"> PokéJave </p>
        </div>
        </a>
      </>
    )
  }
  
  export default Logo