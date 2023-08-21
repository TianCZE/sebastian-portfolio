import CardShowcase from "@/components/CardShowcase";
import {getAllRecords} from "@/actions/db";


export default function Home() {

    return (
     <>
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

         <div className={"mb-8"}>
             <CardShowcase data={getAllRecords('projects')}/>
         </div>
     </>
  )
}
