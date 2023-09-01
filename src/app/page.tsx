import {getAllRecordsFromAllCollections} from "@/actions/database";
import PhotoGallery from "@/components/PhotoGallery";
import Image from "next/image";


export default async function Home() {
    return (
        <>
            <div className="relative flex flex-col items-start pt-[210px] pb-[500px]">
                <Image
                    src="https://file.rendit.io/n/fOSe8IhnB4LMY7ixbxk3.png"
                    className="w-[916px] h-[576px] object-cover mix-blend-lighten absolute top-0 left-[171px]"
                    id="Image1"
                    width={500}
                    height={800}
                    alt="Portfolio Avatar"
                />
                <h1 className="text-6xl font-bold text-white absolute top-20 left-5 h-16 w-[491px]">
                    SEBASTIAN NOVAK
                </h1>
                <h3 className="text-4xl font-bold text-myOrangeMuted left-5 relative">
                    FULLSTACK PROGRAMMER
                    <br/>
                    GAME DEVELOPER
                    <br/>
                    3D ARTIST
                </h3>
            </div>

            <PhotoGallery data={await getAllRecordsFromAllCollections()}/>

            <div
                className="overflow-hidden flex flex-col gap-6 w-full h-fit items-center py-16"
                id="AboutMeRoot"
            >
                <div className="text-center text-4xl font-bold text-myOrangeMuted">
                    About Me
                </div>
                <div
                    className="overflow-hidden bg-[rgba(111,_111,_111,_0.14)] self-stretch flex flex-col items-center pt-4 pb-12 px-8 rounded-lg"
                    id="Description"
                >
                    <div className="text-justify text-1xl text-[#bebebe] w-full">
                        My name is Sebastián Novák. I come form Czech Republic where I am
                        currently attending Masaryk’s University, Faculty of Informatics, study
                        program: Programming and Application Development. I started in 2023.
                        <br/>
                        <br/>
                        Throughout the years I fell in love with programming and 3D design, mainly to
                        help me with my hobby of making video games.
                        <br/>
                        <br/>
                        When I am not programming I work as a bartender, traveling or hanging out
                        with my friends.
                    </div>
                </div>
            </div>
        </>
    )
}
