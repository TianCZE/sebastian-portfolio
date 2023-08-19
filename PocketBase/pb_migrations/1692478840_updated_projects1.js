/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("48khvv0dt67zqc8")

  collection.name = "projects"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("48khvv0dt67zqc8")

  collection.name = "projects1"

  return dao.saveCollection(collection)
})
