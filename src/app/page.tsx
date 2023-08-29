import CardShowcase from "@/components/CardShowcase";
import {getAllRecords} from "@/actions/db";


export default function Home() {

    return (
        <div
            className="overflow-hidden bg-[url(https://file.rendit.io/n/ZXnHgIlgOCOmtYoSdwXL.png)] bg-50%_50% bg-blend-normal bg-no-repeat flex flex-col gap-6 w-full px-20 py-16"
            id="DesktopRoot"
        >
            <div className="relative flex flex-col items-start pt-[210px] pb-56">
                <img
                    src="https://file.rendit.io/n/fOSe8IhnB4LMY7ixbxk3.png"
                    className="w-[916px] h-[576px] object-cover mix-blend-lighten absolute top-0 left-[171px]"
                    id="Image1"
                />
                <h1 className="text-6xl font-['Inter'] font-bold text-white absolute top-20 left-0 h-16 w-[491px]">
                    SEBASTIAN NOVAK
                </h1>
                <h3 className="text-4xl font-['Inter'] font-bold text-[#e7ab79] relative">
                    FULLSTACK DEV
                    <br />
                    GAME DEVELOPMENT
                    <br />
                    3D ARTIST
                </h3>
            </div>
            <div
                className="overflow-hidden place-self-center bg-[#774360] flex flex-row justify-between w-1/2 h-[35px] items-center rounded-2xl"
                id="NavbarRoot"
            >
                <button className="flex flex-col items-start mx-0 my-0 px-0" id="Button1">
                    <div
                        className="hover:bg-[#b25068] flex flex-col justify-center h-16 shrink-0 items-center mb-0 px-2"
                        id="Background"
                    >
                        <div className="text-center text-xl font-['Inter'] font-medium text-white">
                            Coding
                        </div>
                    </div>
                </button>
                <button
                    className="flex flex-col justify-center h-16 items-start my-0"
                    id="Button2"
                >
                    <div
                        className="hover:bg-[#b25068] flex flex-col justify-center px-2 h-16 shrink-0 items-center mb-0 ml-px"
                        id="Background1"
                    >
                        <div className="text-center text-xl font-['Inter'] font-medium text-white">
                            3D work
                        </div>
                    </div>
                </button>
                <button
                    className="flex flex-col justify-center h-16 items-center mr-0 my-0"
                    id="Button3"
                >
                    <div
                        className="hover:bg-[#b25068] flex flex-col justify-center px-2 h-16 shrink-0 items-center mb-0 ml-px"
                        id="Background2"
                    >
                        <div className="text-center text-xl font-['Inter'] font-medium text-white">
                            Gamedev
                        </div>
                    </div>
                </button>
            </div>
            <CardShowcase data={getAllRecords('projects')}/>

        </div>
    )

  //
  //   return (
  //    <div>
  //         <h2 className={'text-center text-black mb-2.5'}>
  //             Portfolio
  //         </h2>
  //         <p className={'block mx-10 mb-2.5 text-center text-black'}>
  //             This is my portfolio I am a student at MUNI FI.
  //             I am interested in programming, game design and 3D modeling
  //         </p>
  //
  //         <h1 className={'text-center text-black text-3xl my-3'}>
  //             My 3D Models
  //         </h1>
  //
  //        <div className={"mb-8"}>
  //            <CardShowcase data={getAllRecords('projects')}/>
  //        </div>
  //    </div>
  // )
}
