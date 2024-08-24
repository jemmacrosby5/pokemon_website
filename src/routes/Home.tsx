import CardImage from "../components/CardImage"

function Home() {

  const testImageURLs = [{image:"https://images.pokemontcg.io/ex11/1_hires.png", id:"ex11-1"},
    {image:"https://images.pokemontcg.io/ex3/100_hires.png", id:"ex3-100"},
    {image:"https://images.pokemontcg.io/ex6/15_hires.png", id:"ex6-15"},
    {image:"https://images.pokemontcg.io/ex2/20_hires.png", id:"ex2-20"},
    {image:"https://images.pokemontcg.io/ex3/8_hires.png", id:"ex3-8"}]

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

      <div className="flex flex-col m-4 md:flex-row justify-center gap-4">
        {testImageURLs.map(function (image, index) {
          return (
            <div key={index}>
              <CardImage URL={image.image} clickable={true} cardId={image.id}></CardImage>
            </div>
          )
        })}
      </div>

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
