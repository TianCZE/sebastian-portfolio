'use client'

import {Record} from "pocketbase";
import dynamic from "next/dynamic";
import {useEffect, useState} from "react";
import {Gallery} from "react-grid-gallery";
import PhotoCard from "@/components/PhotoCard";
import PhotoGallery from "@/components/PhotoGallery";
const Card = dynamic(() => import("@/components/Card"), {ssr: false});


export default function CardShowcase({data} : any) {

    enum buttons {
        work_3d,
        gamedev,
        coding,

    }

    // data = data.map((records) =>
    //     records.map((record) => {
    //     return {
    //         src: record.image,
    //         width: 500,
    //         height: 500,
    //     }
    // }) )


    const [clickedButton, setClickedButton] = useState(buttons.work_3d);

    const [displayedContent, setDisplayedContent] = useState(data[clickedButton]);


    useEffect(() => {
        setDisplayedContent(data[clickedButton])

    }, [clickedButton])


    // Colors
    // [#774360]
    // [#B76894]

    const renderButton = () => {
        return (
            <>
                <button
                    className={`bg-${clickedButton == buttons.work_3d ? '[#89215B]' : '[#774360]'} border border-opacity-30 border-[#e7ab79] flex flex-col justify-center w-[141px] h-16 shrink-0 items-center`}
                    id="Button1"
                    onClick={() => setClickedButton(buttons.work_3d)}
                >
                    <p className="text-center text-xl font-medium text-white">
                        3D WORK
                    </p>
                </button>

                <button
                    className={`bg-${clickedButton == buttons.coding ? '[#89215B]' : '[#774360]'} border border-opacity-30 border-[#e7ab79] flex flex-col justify-center w-[141px] h-16 shrink-0 items-center`}
                    id="Button2"
                    onClick={() => setClickedButton(buttons.coding)}
                >
                    <p className="text-center text-xl font-medium text-white">
                        CODING
                    </p>
                </button>

                <button
                    className={`bg-${clickedButton == buttons.gamedev ? '[#89215B]' : '[#774360]'} border border-opacity-30 border-[#e7ab79] flex flex-col justify-center w-[141px] h-16 shrink-0 items-center`}
                    id="Button3"
                    onClick={() => setClickedButton(buttons.gamedev)}
                >
                    <p className="text-center text-xl font-medium text-white">
                        GAMEDEV
                    </p>
                </button>
            </>

        )
    }

    const renderProjectCard = ({id, title, image, description}: Record) => {

        if (image) {
            return <Card key={id} id={id} title={title} description={description} image={image}/>
        }
    }

    return (

        <>
            <div
                className="border-solid border-[#e7ab79] h-[38px] overflow-hidden bg-[#89215B] relative flex flex-row w-fit place-self-center items-center border rounded-lg"
                id="NavbarRoot"
            >
                {renderButton()}

            </div>

            {/*<div className={'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 justify-items-center justify-center gap-6 my-3'}>*/}
            {/*    {displayedContent.map(renderProjectCard)}*/}
            {/*</div>*/}
            <PhotoGallery data={displayedContent}/>
            {/*<Gallery*/}
            {/*    images={displayedContent}*/}
            {/*    enableImageSelection={false}*/}
            {/*/>*/}
        </>
    )
}

// grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 justify-items-center justify-center gap-6 mx-8 my-3


// grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 place-items-center gap-6 mx-8

