import PocketBase, {Record} from 'pocketbase';


const db = new PocketBase('https://thoughtless-shoe.pockethost.io')

export const revalidate = 10;


const parseImage = (record: Record) => {
    const newUrl = db.files.getUrl(record, record.image);
    return {...record, image: newUrl};
}



export const getAllRecordsFromAllCollections = async () => {
    await db.admins.authWithPassword('novak.basty@gmail.com', `${process.env.ADMIN_KEY}`);
    try {
        const collections = await db.collections.getFullList();
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
