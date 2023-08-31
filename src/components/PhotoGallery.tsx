'use client'
import PhotoCard from "@/components/PhotoCard";
import {useState} from "react";


export default function PhotoGallery({data}: any) {

    enum buttons {
        work_3d,
        gamedev,
        coding,

    }


    const [clickedButton, setClickedButton] = useState(buttons.work_3d);
    const [displayedContent, setDisplayedContent] = useState(data[clickedButton]);


    const updateSelection = (buttonID: buttons) => {
        setClickedButton(buttonID)
        setDisplayedContent(data[buttonID])
    }


    const renderButton = () => {
        return (
            <>
                <button
                    className={`bg-${clickedButton == buttons.work_3d ? 'myPurpleLight' : 'myPurpleDark'} border border-opacity-30 border-myOrangeMuted flex flex-col justify-center w-[141px] h-16 shrink-0 items-center`}
                    id="Button1"
                    onClick={() => updateSelection(buttons.work_3d)}
                >
                    <p className="text-center text-xl font-medium text-white">
                        3D WORK
                    </p>
                </button>

                <button
                    className={`bg-${clickedButton == buttons.coding ? 'myPurpleLight' : 'myPurpleDark'} border border-opacity-30 border-myOrangeMuted flex flex-col justify-center w-[141px] h-16 shrink-0 items-center`}
                    id="Button2"
                    onClick={() => updateSelection(buttons.coding)}
                >
                    <p className="text-center text-xl font-medium text-white">
                        CODING
                    </p>
                </button>

                <button
                    className={`bg-${clickedButton == buttons.gamedev ? 'myPurpleLight' : 'myPurpleDark'} border border-opacity-30 border-myOrangeMuted flex flex-col justify-center w-[141px] h-16 shrink-0 items-center`}
                    id="Button3"
                    onClick={() => updateSelection(buttons.gamedev)}
                >
                    <p className="text-center text-xl font-medium text-white">
                        GAMEDEV
                    </p>
                </button>
            </>

        )
    }

    const renderPhoto = ({image, title, description, id, collectionName}: any) => {
        return (
            <PhotoCard image={image} title={title} description={description} id={id} collectionName={collectionName}/>
        )
    }


    return (
        <>
            <div
                className="border-solid border-[#e7ab79] h-[38px] overflow-hidden bg-[#89215B] relative flex flex-row w-fit place-self-center items-center border rounded-lg"
                id="NavbarRoot"
            >
                {renderButton()}

            </div>

            <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-12">
                <div className="-m-1 flex flex-wrap md:-m-2">
                    {displayedContent.map(renderPhoto)}
                </div>
            </div>
        </>
    )
}
