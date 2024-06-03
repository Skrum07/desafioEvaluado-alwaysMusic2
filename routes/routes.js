import express from "express";
import { home, addUser } from "../controllers/controller.js";
const router = express.Router();

//ROUTE TO HOME PAGE
router.get('/', home);

//ROUTE TO ADD USER
router.post('/register', addUser);

//ROUTE TO GET ALL USERS
router.get('/users', getUsers)


//ROUTE TO GET USER BY RUT
router.get('/user/rut', getUserByRut)


//ROUTE TO UPDATE USER
router.put('/user/:id', updateUser)


//ROUTE TO DELETE USER
router.delete('/user/:id', deleteUser)


 
export default router;