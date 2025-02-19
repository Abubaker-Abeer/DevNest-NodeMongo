import { Router } from "express";
import {Register} from './auth.controller.js';
const router = Router();
router.post('/Register', Register);
  
export default router;
