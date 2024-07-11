const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("school");

db.serialize(() => {
  db.run(`
         create table if not exists classes (
         id integer PRIMARY KEY AUTOINCREMENT,
         name TEXT,
         teacher TEXT ,
         numberOfStudent integer  
         )
         `);
});

module.exports = db;
