import PocketBase, {Record} from 'pocketbase';


const db = new PocketBase('http://127.0.0.1:8090/')

export const revalidate = 10;


const parseImage = (record: Record) => {
    const newUrl = db.files.getUrl(record, record.image);
    return {...record, image: newUrl};
}


export const getAllRecords = async (collectionName: string) => {
    try {
        const records = await db.collection(collectionName).getFullList();
        return records.map(parseImage);
    } catch (e: any) {
        console.error(e.message);
        return null;
    }
}

export const getRecord = async (collectionName: string, id: string) => {
    try {
        const record = await db.collection(collectionName).getOne(id);
        return [parseImage(record)];
    } catch (e: any) {
        console.error(e.message);
        return null;
    }
}
