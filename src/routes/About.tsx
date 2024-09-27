
function About() {

  return (
    <>
      <div className="flex flex-col h-full m-2 gap-2">
        <div className="flex flex-col md:flex-row gap-2">
          <div className="bg-custom-gray flex justify-center md:w-1/2">
            <div className="flex flex-col items-center gap-2 p-4 px-6">
              <img src="https://ih1.redbubble.net/image.4043453697.8709/raf,360x360,075,t,fafafa:ca443f4786.u1.jpg" className="rounded-full h-16"></img>
              <p className="text-white text-3xl">Jemma</p>
              <p className="text-white text-lg">jemmajsc@gmail.com</p>
              <div className="text-white">
                Hey,<br />
                <br />
                My name is Jem and I’m responsible for the front end. Dave wouldn’t stop pestering me about getting this site live so thought I’d use my skills to try bring his vision to life.
                To give some background on me, I’m currently working as a Software Engineer.<br />
                <br />
                For me, this project was a way to challenge myself in an environment I am less familiar with and help develop a frontend application that is easy to interact with, has advanced functionality and looks nice!<br />
                <br />
                The front end of this project made using:
                <ul className="list-disc ml-5">
                  <li>React</li>
                  <li>TypeScript</li>
                  <li>Amplify</li>
                  <li>Tailwind</li>
                  <li>API Gateway</li>
                </ul>
              </div>
            </div>
          </div>
          <div className=" bg-custom-gray flex justify-center md:w-1/2">
            <div className="flex flex-col items-center gap-2 p-4 px-6">
              <img src="https://media.wired.com/photos/5f87340d114b38fa1f8339f9/master/w_1600%2Cc_limit/Ideas_Surprised_Pikachu_HD.jpg" className="rounded-full h-16"></img>
              <p className="text-white text-3xl">Dave</p>
              <p className="text-white text-lg">dave.bat35@outlook.com</p>
              <div className="text-white">
                Hey,<br />
                <br />
                I’m Dave and and I’m responsible for the entire back-end of this application! This project is something I’ve wanted to work on for a while now and this page is here to give a bit more background about what I do and why this project exists. <br />
                <br />
                Starting with my background, I’m a Senior Data Scientist working at a SaaS company in Manchester called Peak AI. I’ve been fortunate in my career to be exposed to a wide range of technologies and disciplines within the wider sphere of Data and wanted to use a combination of those skills on some form of personal project. <br />
                <br />
                This led to this project! During COVID, like many, I was looking for something to occupy myself and decided to start buying Pokémon cards again to relive being a kid. Fast-forward 3 years and I’ve now got a fairly significant collection that I wanted to start being able to keep a track on. Hence the birth of this project.<br />
                <br />
                In terms of core skills I’ve used:
                <ul className="list-disc ml-5">
                  <li>Entire codebase is built in Python</li>
                  <li>PostgreSQL used with Alembic & SQLAlchemy for database management</li>
                  <li>Leveraged S3, Lambdas, RDS, VPCs, Billing & more</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div >
          <p className=" text-3xl">Architecture diagram</p>
          <img src='public/architecture_diagram.jpg'></img>
        </div>
      </div >
    </>
  )
}

export default About