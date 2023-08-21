import dynamic from "next/dynamic";

const AccordionAlwaysOpen = dynamic(() => import("../../components/AccordionAlwaysOpen"), {
    ssr: false,
});


export default function About() {
    return (
        <div className={'my-10 mx-8'} >
            <AccordionAlwaysOpen/>
        </div>
    )
}

