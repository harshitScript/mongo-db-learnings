const conn = new Mongo('connection-string');
const db = conn.getDB('redtag');
const rawAssetItemData = db.AssetItem.find({});
const updatedAssetItemData = [];
rawAssetItemData.forEach(rawAssetItem => {
    const updatedRow = {};
    const { row } = rawAssetItem;
    for (let key in row) {
        const value = row[key];
        const updatedKey = key.slice(5, 7);
        updatedRow[updatedKey] = value;
    }
    updatedAssetItemData.push({ ...rawAssetItem, row: updatedRow });
})
const bulkWriteTable = updatedAssetItemData.map(updatedAssetItem => ({
    updateOne: {
        filter: { assetItemIndex: updatedAssetItem.assetItemIndex },
        update: {
            $set: {
                row: updatedAssetItem.row
            }
        }
    }
}))
db.AssetItem.bulkWrite(bulkWriteTable);