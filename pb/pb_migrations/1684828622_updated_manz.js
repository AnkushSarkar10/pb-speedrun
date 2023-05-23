migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("zjlb6r0c3du9imf")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "dnnfs8vf",
    "name": "name",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("zjlb6r0c3du9imf")

  // remove
  collection.schema.removeField("dnnfs8vf")

  return dao.saveCollection(collection)
})
