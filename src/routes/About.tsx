
function About() {

  return (
    <>
      <div className="flex flex-col h-full m-2 gap-2">
        <div className="flex flex-col md:flex-row gap-2">
          <div className="flex justify-center md:w-1/2 ">
            <div className="flex flex-col items-center gap-2 p-4 px-6 md:border-r-4 ">
              <img src="/Ditto.png" className="h-16"></img>
              <p className="text-3xl font-bold">Jemma</p>
              <p className="text-lg">jemmajsc@gmail.com</p>
              <div >
                Hey,<br />
                <br />
                My name is Jem and I’m responsible for the front end. Dave wouldn’t stop pestering me about getting this site live so thought I’d use my skills to try bring his vision to life.
                To give some background on me, I’m currently working as a Software Engineer.<br />
                <br />
                For me, this project was a way to challenge myself in an environment I am less familiar with and help develop a frontend application that is easy to interact with, has advanced functionality and looks nice!<br />
                <br />
                The front end of this project made using:
                <ul className="list-disc ml-5">
                  <li>React with TypeScript</li>
                  <li>Amplify</li>
                  <li>Tailwind</li>
                  <li>API Gateway</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex justify-center md:w-1/2">
            <div className="flex flex-col items-center gap-2 p-4 px-6">
              <img src="/tangela.png" className="h-16"></img>
              <p className="text-3xl font-bold">Dave</p>
              <p className="text-lg">dave.bat35@outlook.com</p>
              <div>
                Hey,<br />
                <br />
                Hey, I’m Dave and I’m responsible for the back-end of this application and the wallet behind an excessively large Pokemon collection. To give some background on me, I’m a Senior Data Scientist working at a SaaS company.<br />
                <br />
                As for this project, throughout my career I’ve been fortunate to work across a wide variety of data related projects which, when fused with my love of Pokemon and card collection, culminated into my desire to combine these skills into a single unified project.<br />
                <br />
                In terms of core skills I’ve used:
                <ul className="list-disc ml-5">
                  <li>Codebase built entirely in Python & SQL</li>
                  <li>PostgreSQL used with Alembic & SQLAlchemy for database management</li>
                  <li>Leveraged S3, Lambdas, RDS, VPCs, Billing & more</li>
                  <li>CI/CD controlled using GitHub</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="m-8">
          <p className=" text-3xl mb-2 font-bold">Architecture</p>
            Within this project, there were several design principles we wanted to leverage. These were as follows:<br />
            <ol className="list-decimal m-6 md:my-8">
              <li>The entire architecture should be deployed across AWS.</li>
              <li>Costs should be kept as low as possible but not to the detriment of 1.</li>
              <li>Code should be written OOP with the capability to expand the project at a later date if desired.</li>
              <li>PostgreSQL will be used for database handling</li>
              <li>Databases must be ORM</li>
              <li>Front to back the system should be secure (no shortcuts)</li>
              <li>Databases need to be migratable</li>
              <li>Frontend should leverage AWS Amplifty, Route 53 and API Gateway</li>
              <li>Frontend should be built in React using TypeScript</li>
              <li>The web application should be dynamic</li>
              <li>These design principles enables us to create a complete architecture that looks as follow</li>
            </ol>
          <img src='/architecture_diagram.png'></img>
        </div>
      </div >
    </>
  )
}

export default About