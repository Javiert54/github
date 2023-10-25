import Curso from '../models/CursoModel';
export const getCursos = async (req, res) => {
    const listCursos = await Curso.findAll();
    res.json(listCursos);
};
export const getCurso = async (req, res) => {
    const { id } = req.params;
    const curso = await Curso.findByPk(id);
    if (curso) {
        res.json(curso);
    }
    else {
        res.status(404).json({
            msg: `No existe un curso con el id ${id}`
        });
    }
};
export const deleteCurso = async (req, res) => {
    const { id } = req.params;
    const curso = await Curso.findByPk(id);
    if (!curso) {
        res.status(404).json({
            msg: `No existe un curso con el id ${id}`
        });
    }
    else {
        await curso.destroy();
        res.json({
            msg: 'El curso fue eliminado con exito!'
        });
    }
};
export const postCurso = async (req, res) => {
    const { body } = req;
    try {
        await Curso.create(body);
        res.json({
            msg: `El curso fue agregado con exito!`
        });
    }
    catch (error) {
        console.log(error);
        res.json({
            msg: `Upps ocurrio un error, comuniquese con soporte`
        });
    }
};
export const updateCurso = async (req, res) => {
    const { body } = req;
    const { id } = req.params;
    try {
        const curso = await Curso.findByPk(id);
        if (curso) {
            await curso.update(body);
            res.json({
                msg: 'El curso fue actualizado con exito'
            });
        }
        else {
            res.status(404).json({
                msg: `No existe un curso con el id ${id}`
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
//# sourceMappingURL=CursoController.js.map