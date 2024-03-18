import express from 'express';
import { addUser, deleteUser, getAllUser, getbyIdUser, updateUser } from '../Controller/userController.js';

const userRouter = express.Router();

userRouter.post ("/add",addUser);
userRouter.get("/all",getAllUser);
userRouter.get ("/:id",getbyIdUser);
userRouter.put("/update/:id",updateUser);
userRouter.delete("/delete/:id",deleteUser);

export default userRouter;
















