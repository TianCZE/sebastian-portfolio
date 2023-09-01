import {getRecord} from "@/actions/database";

import PhotoGallery from "@/components/PhotoGallery";
import PhotoCard from "@/components/PhotoCard";
import Image from "next/image";
import Link from "next/link";


export default async function Detail({params}: {
    params: {
        category: string
        id: string
    }
}) {

    const data = await getRecord(params.category, params.id);


    console.log(data);

    return (
        <>
            <div
                className="bg-cover bg-opacity-20 bg-myPurpleMedium bg-50%_50% bg-blend-normal bg-no-repeat flex flex-col justify-between w-full h-screen items-center"
                id="ProjectDetailMobileRoot"
            >
                <div className="self-stretch flex flex-col gap-6 items-center">
                    <Image
                        src={data!.image}
                        className="aspect-square object-cover"
                        id="ProjectPhoto"
                        width={500}
                        height={500}
                        alt={''}
                    />
                    <div
                        className="block text-justify text-white w-5/6"
                        id="Decription"
                    >
                        {data!.description}
                    </div>
                </div>
                <Link href={'/'} className="bg-myOrangeMuted flex bg-opacity-20 backdrop-blur-[25px] flex-col items-center justify-center rounded-lg h-20 w-full">
                    <div className="text-center text-3xl text-white">
                        BACK
                    </div>
                </Link>
            </div>
        </>
    )
}

