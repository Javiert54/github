import {Request, Response} from 'express';

import User from '../models/UserModel';

export const getUsers = async (req: Request, res: Response) =>{
    const listUsers = await User.findAll();
    res.json(listUsers);
}

export const getUser = async (req: Request, res: Response) => {
    const {id} = req.params;
    const user = await User.findByPk(id);
    if (user) {
        res.json(user)
    } else {
        res.status(404).json({
            msg: `No existe un user con ese ${id}`
        })
    }
}
export const deleteUser = async (req: Request, res: Response) => {
    const {id} = req.params;
    const user = await User.findByPk(id);
    if (!user) {
        res.status(404).json({
            msg: `No existe un user con ese ${id}`
        })   
    } else {
        await user.destroy();
        res.json ({
            msg: 'El user fue eliminado con exito'
        })
    }
}
export const postUser = async (req: Request, res: Response) => {
    const {body} = req;
    try{
        await User.create(body);
        res.json({
            msg: '¡El user fue agregado con exito!'
        })
    } catch (error){
        console.log(error);
        res.json({
            msg: 'Ha ocurrido un error'
        })
    }
}
export const updateUser = async (req: Request, res: Response) => {
    const {body} = req;
    const {id} = req.params;
    try{

        const user = await User.findByPk(id);
        
        if(user){
            await user.update(body);
            res.json({
                msg: 'El user fue actualizado con exito'
            })
        } else {
            res.status(404).json({
                msg: `No existe un user con ese ${id}`
            })
        }
    } catch (error){
        console.log(error);
        res.json({
            msg: 'Ha ocurrido un error'
        })
    }
}