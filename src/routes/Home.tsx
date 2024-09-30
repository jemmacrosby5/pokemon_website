import CardArray from "../components/CardArray";
import PriceGraph from "../components/MonthlyGraph";
import TotalValueBox from "../components/TotalValue";

function Home() {

  return (
    <>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col md:flex-row bg-custom-gray md:px-20 p-8 gap-8 items-center">
          <div className="md:max-w-[60%]">
            <p className="text-white text-3xl">About...</p>
            <p className="text-white text-xl">This website is a personal project by Jem (a Software Engineer) and Dave (a Data Scientist) designed to show the value of a Pokémon card collection. To learn more about us and the project, please visit the <a href='/about' className="underline">About</a> page.</p>
          </div>
          <TotalValueBox />
        </div>

        <CardArray />

        <div className="bg-slate-200">
          <div className="flex lg:flex-row justify-center mx-auto flex-col items-center ">
            <div className="m-4 bg-slate-800 h-72 w-2/3 lg:w-full lg:mx-12 rounded mx-2 flex items-center justify-center">
              <PriceGraph/>
            </div>
            <div className="m-4 bg-slate-800 h-72 w-2/3 lg:w-full lg:mx-12 rounded mx-2 flex items-center justify-center">
              <p className="text-white">I'm a graph</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
