let data: any = [];
export const userService = {
  getAll() {
    return data;
  },

  getById(id: any) {
    return data.find((x: any) => x.id == id);
  },
  create(x: any) {
    const newUser = { ...x, id: Date.now().toString() };
    data.push(newUser);
    return newUser;
  },

  delete(id: any) {
    data.filter((x: any) => x.id !== id);
  },
  update(x: any, id: any) {
    const index = data.findIndex((obj: any) => obj.id == id);
    const userUpdated = { ...x, id: id };
    if (index !== -1) {
      data[index] = userUpdated;
    }
    return userUpdated;
  },
  // controller si l'utilisateur exits déjà
  notExist(email: string) {
    const user = data.find((x: any) => x.email === email);
    return user == undefined;
  },
};
