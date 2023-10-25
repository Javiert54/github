import Mensaje from '../models/MensajeModel';
export const getMensajes = async (req, res) => {
    const listMensajes = await Mensaje.findAll();
    res.json(listMensajes);
};
export const getMensaje = async (req, res) => {
    const { id } = req.params;
    const mensaje = await Mensaje.findByPk(id);
    if (mensaje) {
        res.json(mensaje);
    }
    else {
        res.status(404).json({
            msg: `No existe un mensajecon el id ${id}`
        });
    }
};
export const deleteMensaje = async (req, res) => {
    const { id } = req.params;
    const mensaje = await Mensaje.findByPk(id);
    if (!mensaje) {
        res.status(404).json({
            msg: `No existe un mensaje con el id ${id}`
        });
    }
    else {
        await mensaje.destroy();
        res.json({
            msg: 'El mensaje fue eliminado con exito!'
        });
    }
};
export const postMensaje = async (req, res) => {
    const { body } = req;
    try {
        await Mensaje.create(body);
        res.json({
            msg: `El mensaje fue enviado con exito!`
        });
    }
    catch (error) {
        console.log(error);
        res.json({
            msg: `Upps ocurrio un error, comuniquese con soporte`
        });
    }
};
export const updateMensaje = async (req, res) => {
    const { body } = req;
    const { id } = req.params;
    try {
        const mensaje = await Mensaje.findByPk(id);
        if (mensaje) {
            await mensaje.update(body);
            res.json({
                msg: 'El mensaje fue actualizado con exito'
            });
        }
        else {
            res.status(404).json({
                msg: `No existe un mensaje con el id ${id}`
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
//# sourceMappingURL=MensajeController.js.map