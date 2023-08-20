import {Record} from "pocketbase";
import {getAllRecords} from "@/actions/db";
import dynamic from "next/dynamic";
const Card = dynamic(() => import("@/components/Card"), {ssr: false});


export default async function CardShowcase({data} : any) {
    const projects = await data;

    const renderProjectCard = ({id, title, image, description}: Record) => {
        return <Card key={id} id={id} title={title} description={description} image={image}/>
    }

    return (
        <div className={'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 justify-items-center justify-center gap-6 mx-8 my-3 '}>
            {projects.map(renderProjectCard)}
        </div>
    )
}

// grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 place-items-center gap-6 mx-8