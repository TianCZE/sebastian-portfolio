import {getRecord} from "@/actions/database";

import PhotoGallery from "@/components/PhotoGallery";


export default async function PortfolioDetail({params}: {
    params: {
        category: string
        id: string
    }
}) {

    return (
        <>
            <PhotoGallery data={await getRecord(params.category, params.id)}/>
        </>
    )
}

