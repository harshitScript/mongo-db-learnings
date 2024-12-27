const conn = new Mongo('connection-string');
const db = conn.getDB('redtag');
const rawAssetTableresult = db.AssetTable.find({});
const updatedAssetTables = [];
rawAssetTableresult.forEach(assetTable => {
    const updatedColumns = [];
    const { columns } = assetTable;
    columns.forEach(column => {
        const { columnIndex } = column;
        const newColumnIndex = columnIndex.slice(5, 7);
        updatedColumns.push({ ...column, columnIndex: newColumnIndex })
    })
    updatedAssetTables.push({ ...assetTable, columns: updatedColumns });
})
const bulkWriteTable = updatedAssetTables.map(updatedTable => ({
    updateOne: {
        filter: { assetTableIndex: updatedTable.assetTableIndex },
        update: {
            $set: {
                columns: [...updatedTable.columns]
            }
        }
    }
}))
db.AssetTable.bulkWrite(bulkWriteTable);
