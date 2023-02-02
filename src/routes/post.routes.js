"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const post_controller_1 = require("../controllers/post.controller");
const router = (0, express_1.Router)();
router.route('/')
    .get(post_controller_1.getPost);
/* router.route('/')
    .get(getPosts)
    .post(createPost);

router.route('/:postId')
    .get(getPost)
    .delete(deletePost)
    .put(updatePost);
 */
exports.default = router;
