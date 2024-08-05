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

  async getById(id: string): Promise<user | null> {
    const user: any = await this.db.query(`SELECT * FROM users WHERE id=${id}`);
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
    const result: any = await this.db.query(
      `INSERT INTO users (firstname,lastname,email,password) VALUES(?,?,?,?)`,
      [newUser.firstname, newUser.lastname, newUser.email, newUser.password]
    );
    newUser.id = result.lastId;

    return newUser;
  }

  async delete(id: number): Promise<boolean> {
    const result: any = await this.db.query("DELETE FROM users WHERE id=?", [
      id,
    ]);
    return result;
  }
  async update(user: user): Promise<any> {
    const result = await this.db.query(
      "UPDATE FROM users WHERE id=? SET firstname=?, lastname=?",
      [user.id, user.firstname, user.lastname]
    );
    return result;
  }
  // async resetPassword(user: user, newPassword): Promise<any> {
  //   const result = this.db.query(
  //     "UPDATE FROM users WHERE id=? SET email=? , password=?",
  //     [user.id, user.email, user.password]
  //   );
  //   return result;
  // }
}
