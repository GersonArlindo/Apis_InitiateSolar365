import { Router } from 'express'
import { getPost } from '../controllers/post.controller';

const router = Router();
router.route('/')
    .get(getPost)

/* router.route('/')
    .get(getPosts)
    .post(createPost);

router.route('/:postId')
    .get(getPost)
    .delete(deletePost)
    .put(updatePost);
 */
export default router;