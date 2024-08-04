import sqlite3 from "sqlite3";
// const sqlite3 = require("sqlite3").verbose();
export class database {
  db: sqlite3.Database;
  constructor() {
    // add a callback function to handle requeste to the database
    this.db = new sqlite3.Database(process.env.SQLITE_DB || "school", (err) => {
      if (err) {
        console.log("an error occurs to the database", err);
      } else {
        console.log("database created successfully");
        this.createTable();
      }
    });
  }
  // also add here a callback to check if the table is created or not
  private createTable() {
    this.db.run(
      `
      create table if not exists users (
      id integer PRIMARY KEY AUTOINCREMENT,
      firstname TEXT,
      lastname TEXT,
      email TEXT,
      password TEXT,
      createAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
      `,
      (err) => {
        if (err) {
          console.log("table not created", err);
        } else {
          console.log("table created successfully");
        }
      }
    );
  }
  // execute query request
  public query(sql: string, params: any[] = []): Promise<any[]> {
    return new Promise((resolve, reject) => {
      this.db.all(sql, params, (err, rows) => {
        if (err) {
          reject(err);
        } else {
          resolve(rows);
        }
      });
    });
  }
}
