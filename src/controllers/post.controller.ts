import { Request, Response } from 'express'
import Post from '../models/post'

export const getPost = async (req: Request, res: Response) => {
    try {
        const post = await Post.findAll();
        res.json({
            post
        })
    } catch (error) {
        res.status(500).json({
            msg: "Error: " + error
        })
    }
}

/* export async function getPosts(req: Request, res: Response): Promise<Response | void> {
    try {
        const posts = await conn.query('SELECT * FROM posts');
        return res.json(posts[0]);
    }
    catch (e) {
        console.log(e)
    }
}

export async function createPost(req: Request, res: Response) {
    const newPost: Post = req.body;
    const conn = await connect();
    await conn.query('INSERT INTO posts SET ?', [newPost]);
    res.json({
        message: 'New Post Created'
    });
}

export async function getPost(req: Request, res: Response) {
    const id = req.params.postId;
    const conn = await connect();
    const posts = await conn.query('SELECT * FROM posts WHERE id = ?', [id]);
    res.json(posts[0]);
}

export async function deletePost(req: Request, res: Response) {
    const id = req.params.postId;
    const conn = await connect();
    await conn.query('DELETE FROM posts WHERE id = ?', [id]);
    res.json({
        message: 'Post deleted'
    });
}

export async function updatePost(req: Request, res: Response) {
    const id = req.params.postId;
    const updatePost: Post = req.body;
    const conn = await connect();
    await conn.query('UPDATE posts set ? WHERE id = ?', [updatePost, id]);
    res.json({
        message: 'Post Updated'
    });
} */