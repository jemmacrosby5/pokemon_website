import CardArray from "../components/CardArray";

function Home() {

  return (
    <>
      <div className="flex flex-col md:flex-row bg-custom-gray p-8 gap-8">
        <div>
          <p className="text-white text-3xl">About...</p>
          <p className="text-white text-xl">This is a small personal website to display the values of a Pokemon card collection</p>
        </div>
        <div className='flex flex-col gap-4 items-center mx-auto'>
          <p className="text-white text-3xl border border-white rounded-xl text-center py-1 px-4">£2,511</p>
          <p className="text-white text-3xl text-center mt-2">Current value</p>
        </div>
      </div>

      <CardArray/>

      <div className="flex flex-row justify-center mx-auto">
        <div className="m-4 bg-slate-800 h-72 w-1/3 rounded">
          <p className="text-white">I'm a graph</p>
        </div>
        <div className="m-4 bg-slate-800 h-72 w-1/3 rounded">
          <p className="text-white">I'm a graph</p>
        </div>
      </div>


    </>
  )
}

export default Home
