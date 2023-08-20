import {getRecord} from "@/actions/db";

import CardShowcase from "@/components/CardShowcase";


export default function PortfolioDetail({params}: {
    params: {
        id: string
    }
}) {

    return (
        <>
            <CardShowcase data={getRecord('projects', params.id)}/>
        </>

    )
}

