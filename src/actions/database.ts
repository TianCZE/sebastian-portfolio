import PocketBase, {Record} from 'pocketbase';


const database = new PocketBase('https://thoughtless-shoe.pockethost.io')

const parseImage = (record: Record) => {
    const newUrl = database.files.getUrl(record, record.image);
    return {...record, image: newUrl};
}


export const getAllRecordsFromAllCollections = async () => {
    await database.admins.authWithPassword(`${process.env.ADMIN_EMAIL}`, `${process.env.ADMIN_KEY}`);
    try {
        const collections = await database.collections.getFullList();
        collections.flat();
        collections.shift();

        return await Promise.all(
            collections.map((collection) => getAllRecordsFromCollection(collection.name))
        );

    } catch (e: any) {
        console.error(e.message);
        return null;
    }
}


export const getAllRecordsFromCollection = async (collectionName: string) => {
    try {
        const records = await database.collection(collectionName).getFullList();
        return records.map(parseImage);
    } catch (e: any) {
        console.error(e.message);
        return null;
    }
}


export const getRecord = async (collectionName: string, id: string) => {
    try {
        const record = await database.collection(collectionName).getOne(id);
        return [parseImage(record)];
    } catch (e: any) {
        console.error(e.message);
        return null;
    }
}
