import express from "express";
import { home, addUser } from "../controllers/controller.js";
const router = express.Router();

//ROUTE TO HOME PAGE
router.get('/', home);

//ROUTE TO ADD USER
router.post('/register', addUser);

 
export default router;