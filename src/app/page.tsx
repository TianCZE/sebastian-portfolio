import Card from "@/components/Card";
import Experiment from "@/components/Experiment";
import dynamic from "next/dynamic";

const images = [
    '/bat_loong.png',
    '/Joycon_red.5.png',
    '/office_chair_final_1_1.png',
    '/Owl.png',
    '/spooky.png',
    '/sword - FINAL.png',
]


export default function Home() {
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

          <div className={'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 place-items-center gap-3 mx-8 '}>
              {/*TODO Fix this, this is horrendous*/}
              {images.map((image) =>
                  <Card key={image} img={image}/>
              )}
          </div>



      </div>
  )
}

// flex flex-col items-center justify-between