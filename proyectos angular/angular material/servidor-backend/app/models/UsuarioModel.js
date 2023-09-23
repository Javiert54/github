const mongoose = require('mongoose');

const UsuarioSchema = mongoose.Schema({
    userName: {
        type: String,
        required: true,
        default: ""
    },
    lastName: {
        type: String,
        required: true,
        default: ""
    },
    age: {
        type: Number,
        required: true,
        default: 0
    },
    email: {
        type: String,
        required: true,
        default: ""
    },
    telephone: {
        type: String,
        required: true,
        default: ""
    },
    password: {
        type: String,
        required: true,
        default: ""
    },
    photo: {
        type: String,
        required: true,
        default: ""
    },
    registDate: {
        type: Date,
        default: Date.now()
    },
    state: {
        type: Boolean,
        default: false
    },
    dni: {
        type: String,
        default: "",
    },
    isProfessor: {
        type: Boolean,
        default: false,
        required: true
    },
    subject: {
        type: String,
        default: "",
    }

});

module.exports = mongoose.model('Usuario', UsuarioSchema);