'use client'


import {useState} from "react";




export default function Header() {

    enum buttons {
        work_3d,
        coding,
        gamedev,

    }

    const [clickedButton, setClickedButton] = useState(buttons.work_3d);

    const renderButton = () => {
        return (
            <>
                <button
                    className={`bg-${clickedButton == buttons.work_3d ? '[#774360]' : '[#B76894]'} border border-opacity-30 border-[#e7ab79] flex flex-col justify-center w-[141px] h-16 shrink-0 items-center`}
                    id="Button1"
                    onClick={() => setClickedButton(buttons.work_3d)}
                >
                    <p className="text-center text-xl font-medium text-white">
                        3D WORK
                    </p>
                </button>

                <button
                    className={`bg-${clickedButton == buttons.coding ? '[#B76894]' : '[#774360]'} border border-opacity-30 border-[#e7ab79] flex flex-col justify-center w-[141px] h-16 shrink-0 items-center`}
                    id="Button3"
                    onClick={() => setClickedButton(buttons.coding)}
                >
                    <p className="text-center text-xl font-medium text-white">
                        CODING
                    </p>
                </button>

                <button
                    className={`bg-${clickedButton == buttons.gamedev ? '[#B76894]' : '[#774360]'} border border-opacity-30 border-[#e7ab79] flex flex-col justify-center w-[141px] h-16 shrink-0 items-center`}
                    id="Button5"
                    onClick={() => setClickedButton(buttons.gamedev)}
                >
                    <p className="text-center text-xl font-medium text-white">
                        GAMEDEV
                    </p>
                </button>
            </>

        )
    }


    return (
        <div
            className="border-solid border-[#e7ab79] h-[38px] overflow-hidden bg-[#774360] relative flex flex-row w-fit place-self-center items-center border rounded-lg"
            id="NavbarRoot"
        >

            {renderButton()}

        </div>
    )
}


// <button
//     className="border-solid border-[#e7ab79] w-[143px] h-16 absolute top-[-11px] left-[140px] flex flex-col items-center border"
//     id="Button4"
// >
//     <button
//         className="bg-[#774360] flex flex-col justify-center w-[141px] h-16 shrink-0 items-center"
//         id="Button3"
//     >
//         <div className="text-center text-xl font-['Inter'] font-medium text-white">
//             Coding
//         </div>
//     </button>
// </button>
// <button
//     className="border-solid border-[#e7ab79] relative flex flex-col items-center mr-0 my-[-11px] border"
//     id="Button6"
// >
//     <button
//         className="bg-[#774360] flex flex-col justify-center w-[141px] h-16 shrink-0 items-center"
//         id="Button5"
//     >
//         <div className="text-center text-xl font-['Inter'] font-medium text-white">
//             Coding
//         </div>
//     </button>
// </button>