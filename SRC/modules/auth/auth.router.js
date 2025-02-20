import { Router } from "express";
import {Register,login} from './auth.controller.js';
const router = Router();
router.post('/Register', Register);
router.post('/login', login);

export default router;
