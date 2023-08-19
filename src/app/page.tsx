import {getData} from "@/actions/db";
import Experiment from "@/components/Experiment";
import {Record} from "pocketbase";
import dynamic from "next/dynamic";


const Card = dynamic(() => import("@/components/Card"), {ssr: false});




export default async function Home() {
    const projects = await getData('projects');




    const renderProjectCard = ({id, title, image, description}: Record) => {
        return <Card key={id} title={title} description={description} image={image}/>
    }


  return (
      <div className={'bg-gray-800 h-auto w-full drop-shadow-2xl border-x-8 border-b-8 border-slate-600 items-center'}>
          <h1 className={'text-center text-3xl my-3'}>
              Sebastián Novák
          </h1>
          <h2 className={'text-center mb-2.5'}>
              Portfolio
          </h2>
          <p className={'block mx-10 mb-2.5 text-center'}>
              This is my portfolio I am a student at MUNI FI.
              I am interested in programming, game design and 3D modeling
          </p>

          <h1 className={'text-center text-3xl my-3'}>
              My 3D Models
          </h1>

          <div className={'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 place-items-center gap-6 mx-8 '}>
              {/*TODO Fix this, this is horrendous*/}


              {projects &&
                  projects.map(renderProjectCard)
              }

          </div>



      </div>
  )
}

// flex flex-col items-center justify-between