import { ObjectId } from "mongodb";
import { client } from "./index.js";


 async function updateUserById(id, data) {
  return await client
    .db("users")
    .collection("users")
    .updateOne({ id: ObjectId(id )}, { $set: data });
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
    .deleteOne({ _id: ObjectId(id )});
}
 async function getUserById(id){
 console.log(id);
 

  return await client.db("users")
    .collection("users")
    .findOne({ _id:ObjectId (id) });
}
export{
getAllUsers,
getUserById,
createUsers,
deleteUserById,
updateUserById,
};
