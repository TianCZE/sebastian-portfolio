import PhotoCard from "@/components/PhotoCard";


export default function PhotoGallery({data}: any) {

    const renderPhoto = ({image, title, description, id, collectionName}: any) => {
        return (
            <PhotoCard image={image} title={title} description={description} id={id} collectionName={collectionName}/>
        )
    }


    return (
        <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-12">
            <div className="-m-1 flex flex-wrap md:-m-2">
                { Array.isArray(data) &&
                    data.map(renderPhoto)
                }
            </div>
        </div>
    )
}
