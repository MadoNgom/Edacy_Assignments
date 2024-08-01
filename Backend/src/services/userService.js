let data = [];

exports.getAll = () => {
  return data;
};

exports.getById = (id) => {
  return data.find((x) => x.id == id);
};
exports.create = (x) => {
  const newUser = { ...x, id: Date.now().toString() };
  data.push(newUser);
  return newUser;
};

exports.delete = (id) => {
  data.filter((x) => x.id !== id);
};
exports.update = (x, id) => {
  const index = data.findIndex((obj) => obj.id == id);
  const userUpdated = { ...x, id: id };
  if (index !== -1) {
    data[index] = userUpdated;
  }
  return userUpdated;
};
// controller si l'utilisateur exits déjà
exports.notExist = (email) => {
  const user = data.find((x) => x.email === email);
  return user == undefined;
};
