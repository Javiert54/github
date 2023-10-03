import {Request, Response} from 'express';
import  File  from '../models/FileModel';

export const getFile = async (req: Request, res: Response) => {
    const {id} = req.params;
    const file = await File.findByPk(id);
    if (file) {
        res.json(file)
    } else {
        res.status(404).json({
            msg: `No existe un archivo con ese ${id}`
        })
    }
}

// export const postFile = async (req: Request, res: Response) => {
//     const {body} = req;
//     try{
//         await File.create(body);
//         res.json({
//             msg: '¡El archivo fue agregado con exito!'
//         })
//     } catch (error){
//         console.log(error);
//         res.json({
//             msg: 'Ha ocurrido un error'
//         })
//     }
// }