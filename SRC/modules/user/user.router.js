import { Router } from "express";
import {getuser,getAll,updateUser,deleteUser} from './user.controller.js';
const router = Router();
router.get('/', getAll);
router.get('/:id', getuser);
router.patch('/:id', updateUser);
router.delete('/:id', deleteUser);
export default router;
