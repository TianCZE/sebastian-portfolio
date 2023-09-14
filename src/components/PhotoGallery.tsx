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
                    className={`${clickedButton == buttons.work_3d ? 'bg-myPurpleLight' : 'bg-myPurpleMedium'} border border-opacity-30 border-myOrangeMuted flex flex-col justify-center w-1/3  h-16 shrink-0 items-center`}
                    id="Button1"
                    onClick={() => updateSelection(buttons.work_3d)}
                >
                    <p className="text-center text-xl font-medium text-white">
                        3D WORK
                    </p>
                </button>

                <button
                    className={`${clickedButton == buttons.coding ? 'bg-myPurpleLight' : 'bg-myPurpleMedium'} border border-opacity-30 border-myOrangeMuted flex flex-col justify-center w-1/3 h-16 shrink-0 items-center`}
                    id="Button2"
                    onClick={() => updateSelection(buttons.coding)}
                >
                    <p className="text-center text-xl font-medium text-white">
                        CODING
                    </p>
                </button>

                <button
                    className={`${clickedButton == buttons.gamedev ? 'bg-myPurpleLight' : 'bg-myPurpleMedium'} border border-opacity-30 border-myOrangeMuted flex flex-col justify-center w-1/3  h-16 shrink-0 items-center`}
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
            <PhotoCard key={id} image={image} title={title} description={description} id={id} collectionName={collectionName}/>
        )
    }


    return (
        <>
            <div
                className="border-solid border-myOrangeMuted h-[38px] overflow-hidden bg-myPurpleMedium relative flex flex-row w-11/12 place-self-center items-center border rounded-lg"
                id="NavbarRoot"
            >
                {renderButton()}

            </div>

            <div className="">
                <div className="grid grid-cols-2 lg:grid-cols-3 justify-center mx-4">
                    {displayedContent.map(renderPhoto)}
                </div>
            </div>
        </>
    )
}
