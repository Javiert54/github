import { Router } from 'express';
import { deletePost, getPost, getPosts, postPost, updatePost } from '../controllers/PostController';
// import validateToken from '../services/validate-token';

const routerPost = Router();

routerPost.get('/',  getPosts);
routerPost.get('/:id',  getPost);
routerPost.delete('/:id',  deletePost);
routerPost.post('/',  postPost);
routerPost.put('/:id',  updatePost);

export default routerPost;