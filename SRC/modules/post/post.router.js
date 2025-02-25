import { Router } from "express";
import {getAll,createpost,likepost,unlikepost} from './post.controller.js';
import{creatcomment}from './comment.controller.js';
import {auth} from '../../middleware/auth.js'
const router = Router();
router.get('/',getAll);
router.post('/',auth(),createpost);
router.patch('/:id/like',auth(),likepost);
router.patch('/:id/unlike',auth(),unlikepost);

router.post('/:postid/comment',auth(),creatcomment);

export default router;
