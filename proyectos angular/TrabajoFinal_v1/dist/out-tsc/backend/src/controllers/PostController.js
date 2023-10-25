import Post from '../models/PostModel';
export const getPosts = async (req, res) => {
    const listPosts = await Post.findAll();
    res.json(listPosts);
};
export const getPost = async (req, res) => {
    const { id } = req.params;
    const post = await Post.findByPk(id);
    if (post) {
        res.json(post);
    }
    else {
        res.status(404).json({
            msg: `No existe un post con el id ${id}`
        });
    }
};
export const deletePost = async (req, res) => {
    const { id } = req.params;
    const post = await Post.findByPk(id);
    if (!post) {
        res.status(404).json({
            msg: `No existe un post con el id ${id}`
        });
    }
    else {
        await post.destroy();
        res.json({
            msg: 'El post fue eliminado con exito!'
        });
    }
};
export const postPost = async (req, res) => {
    const { body } = req;
    try {
        await Post.create(body);
        res.json({
            msg: `El post fue publicado con exito!`
        });
    }
    catch (error) {
        console.log(error);
        res.json({
            msg: `Upps ocurrio un error, comuniquese con soporte`
        });
    }
};
export const updatePost = async (req, res) => {
    const { body } = req;
    const { id } = req.params;
    try {
        const post = await Post.findByPk(id);
        if (post) {
            await post.update(body);
            res.json({
                msg: 'El post fue actualizado con exito'
            });
        }
        else {
            res.status(404).json({
                msg: `No existe un post con el id ${id}`
            });
        }
    }
    catch (error) {
        console.log(error);
        res.json({
            msg: `Upps ocurrio un error, comuniquese con soporte`
        });
    }
};
//# sourceMappingURL=PostController.js.map