import PocketBase, {Record} from 'pocketbase';


const db = new PocketBase('http://127.0.0.1:8090/')

export const revalidate = 10;


const parseImages = (record: Record) => {
    const newUrl = db.files.getUrl(record, record.image);
    return {...record, image: newUrl};
}


export const getData = async (collectionName: string) => {
    try {
        const records = await db.collection(collectionName).getFullList();
        return records.map(parseImages);

    } catch (e: any) {
        console.error(e.message);
        return null;
    }
}
