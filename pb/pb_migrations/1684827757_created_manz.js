migrate((db) => {
  const collection = new Collection({
    "id": "zjlb6r0c3du9imf",
    "created": "2023-05-23 07:42:37.329Z",
    "updated": "2023-05-23 07:42:37.329Z",
    "name": "manz",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "pknuy69e",
        "name": "rizz",
        "type": "number",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("zjlb6r0c3du9imf");

  return dao.deleteCollection(collection);
})
