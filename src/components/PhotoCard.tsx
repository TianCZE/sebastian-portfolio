import Image from "next/image";
import Link from "next/link";


export default function PhotoCard({image, title, description, id, collectionName = '3D_art'}: any) {

    return (
        <div className="flex w-1/3 flex-wrap overflow-hidden">
            <div className="relative overflow-hidden bg-cover bg-no-repeat w-full p-1 md:p-2">
                <Image
                    className={'aspect-square'}
                    src={image}
                    alt={description}
                    width={500}
                    height={500}
                    style={{objectFit: 'cover'}}
                />
                <Link href={`/${collectionName}/${id}`}>
                    <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100">
                        <p className={"absolute top-1/2 text-center h-full w-full text-5xl"}>
                            {title}
                        </p>
                    </div>
                </Link>
            </div>
        </div>
    )
}
