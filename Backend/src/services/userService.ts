import { database } from "./database";
import { user } from "../models/user";
export class userService {
  private db: database;
  constructor() {
    this.db = new database();
  }
  async getAll(): Promise<user[]> {
    const users: user[] = await this.db.query("SELECT * FROM users;");
    return users;
  }

  async getById(id: string): Promise<user[]> {
    const user: user[] = await this.db.query(
      `SELECT * FROM users WHERE id=${id}`
    );
    return user;
  }
  // controller si l'utilisateur exits déjà
  async notExist(email: string): Promise<boolean> {
    const user = await this.db.query(
      `SELECT * FROM users WHERE email=${email}`
    );
    return user.length === 0;
  }

  async create(newUser: user): Promise<user> {
    const result = this.db.query(
      `INSERT INTO users (firstname,lastname,email,password) VALUES(?,?,?,?)`,
      [newUser.firstname, newUser.lastname, newUser.email, newUser.password]
    );
    newUser.id = result.lastId;

    return newUser;
  }

  // delete(id: any) {
  //   data.filter((x: any) => x.id !== id);
  // },
  // update(x: any, id: any) {
  //   const index = data.findIndex((obj: any) => obj.id == id);
  //   const userUpdated = { ...x, id: id };
  //   if (index !== -1) {
  //     data[index] = userUpdated;
  //   }
  //   return userUpdated;
  // },
}
