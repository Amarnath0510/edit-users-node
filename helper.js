import { client } from "./index.js";

 async function updateUserById(id, data) {
  return await client
    .db("users")
    .collection("users")
    .updateOne({ id: id }, { $set: data });
}
 async function createUsers(data) {
  return await client
    .db("users")
    .collection("users")
    .insertMany(data);
}
 async function getAllUsers(filter) {
  return await client
    .db("users")
    .collection("users")
    .find(filter)
    .toArray();
}
 async function deleteUserById(id) {
  return await client
    .db("users")
    .collection("users")
    .deleteOne({ id: id });
}
 async function getUserById(id) {
  return await client.db("users")
    .collection("users")
    .findOne({ id: id });
}
export{
getAllUsers,
getUserById,
createUsers,
deleteUserById,
updateUserById,
};
