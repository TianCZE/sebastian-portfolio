/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("48khvv0dt67zqc8")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "0bo7wxz1",
    "name": "date",
    "type": "date",
    "required": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("48khvv0dt67zqc8")

  // remove
  collection.schema.removeField("0bo7wxz1")

  return dao.saveCollection(collection)
})
