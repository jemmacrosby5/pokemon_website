
function About() {

  return (
    <>
      <div className="flex flex-col h-full m-2 gap-2">
        <div className="flex gap-2">
          <div className="w-1/2 bg-blue-500 flex items-center justify-center">
            <div className="flex flex-col items-center m-2">
              <img src="https://ih1.redbubble.net/image.4043453697.8709/raf,360x360,075,t,fafafa:ca443f4786.u1.jpg" className="rounded-full h-16"></img>
              <p className="text-white text-3xl">Jemma</p>
              <p>I'm a Jemma and this is a paragraph about being Jemma.</p>
            </div>
          </div>
          <div className="w-1/2 bg-red-500 flex items-center justify-center">
            <div className="flex flex-col items-center m-2">
              <img src="https://media.wired.com/photos/5f87340d114b38fa1f8339f9/master/w_1600%2Cc_limit/Ideas_Surprised_Pikachu_HD.jpg" className="rounded-full h-16"></img>
              <p className="text-white text-3xl">Dave</p>
              <p>I'm a Dave and this is a paragraph about being Dave. I'm obsessed with Pokemon and content.</p>
            </div>
          </div>
        </div>

        <div className="bg-yellow-300 h-fill">
          <p className="text-white text-3xl">Architecture diagram</p>
        </div>
        <div>
          <p></p>
        </div>
      </div>
    </>
  )
}

export default About