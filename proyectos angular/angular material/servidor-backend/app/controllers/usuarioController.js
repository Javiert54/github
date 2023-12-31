const Usuario = require("../models/UsuarioModel");

exports.crearUsuario = async (req, res) => {

    try {
        let usuario;

        // Creamos nuestro usuario
        usuario = new Usuario(req.body);

        await usuario.save();
        res.send(usuario);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.obtenerUsuarios = async (req, res) => {

    try {

        const usuarios = await Usuario.find();
        res.json(usuarios)
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }

}

exports.actualizarUsuario = async (req, res) => {

    try {
        const { userName, lastName, age, email, telephone, password, photo, registDate, state, dni, isProfessor, subject } = req.body;
        let usuario = await Usuario.findById(req.params.id);

        if(!usuario) {
            res.status(404).json({ msg: 'No existe el usuario' })
        }

        usuario.userName = userName;
        usuario.lastName = lastName;
        usuario.age = age;
        usuario.email = email;
        usuario.password = password;
        usuario.telephone = telephone;
        usuario.photo = photo;
        usuario.registDate = registDate;
        usuario.state = state;
        usuario.dni = dni;
        usuario.isProfessor = isProfessor;
        usuario.subject = subject;




        usuario = await Usuario.findOneAndUpdate({ _id: req.params.id },usuario, { new: true} )
        res.json(usuario);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}


exports.obtenerUsuario = async (req, res) => {

    try {
        let usuario = await Usuario.findById(req.params.id);

        if(!usuario) {
            res.status(404).json({ msg: 'No existe el usuario' })
        }
       
        res.json(usuario);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.eliminarUsuario = async (req, res) => {

    try {
        let usuario = await Usuario.findById(req.params.id);

        if(!usuario) {
            res.status(404).json({ msg: 'No existe el usuario' })
        }
       
        await Usuario.findOneAndRemove({ _id: req.params.id })
        res.json({ msg: 'Usuario eliminado con exito' });
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}