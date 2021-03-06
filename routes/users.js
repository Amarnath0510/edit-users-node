import express  from "express"
import{
    getAllUsers,
    getUserById,
    createUsers,
    deleteUserById,
    updateUserById,
    } from "../helper.js";
const router=express.Router();
router
.route("/")
.get(async (request, response) => {
    console.log(request.query);
    const filter=request.query;
    console.log(filter);

    const filterUsers= await getAllUsers(filter);
  
    response.send(filterUsers);
  })
 .post(async(request,response)=>{
    const data=request.body;
    const result=await createUsers(data)
  
  
    response.send(result);
  })
  
router
.route("/:id")

 .get( async (request, response) => {
    console.log(request.params);
    const { id } = request.params;
    
    const user = await getUserById(id);
    console.log(user);
    user
      ? response.send(user)
      : response.status(404).send({ messasge: "No matchung user found" });
  })
  
.delete(async (request, response) => {
    console.log(request.params);
    const { id } = request.params;
    
    const result= await deleteUserById(id);
    result.deletedCount>0
      ? response.send(result)
      : response.status(404).send({ messasge: "No matchung user found" });
  })
  
  

  
.put(async(request,response)=>{
     console.log(request.params);
     const {id}=request.params;
     const data=request.body;
     const result=await updateUserById(id, data);
     response.send(result);
  })
  export const usersRouter=router;