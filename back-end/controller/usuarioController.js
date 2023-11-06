const { Usuario: UsuarioModel } = require("../models/Usuario")

const usuarioController = {
    create: async(req, res) => {
        try {
            const usuario = {
                nome: req.body.nome,
                idade: req.body.idade,
            }
            const response = await UsuarioModel.create(usuario)
            res.status(201).json({response, msg:'USUARIO CRIADO'})
        }
        catch (err) {
            console.log(err)
        }
    },

    getAll: async(req, res) => {
        try {
            const usuario = await UsuarioModel.find()
            res.json(usuario)
        }
        catch (err){
            console.log(err)
        }
    },

    get: async(req, res) => {
        try {
            const nome = req.params.nome
            const usuario = await UsuarioModel.find({"nome": nome})
            res.json(usuario)
        }
        catch (err){
            console.log(err)
        }
    },

    delete: async(req, res) => {
        try {
            const id = req.params.id
            const usuario = await UsuarioModel.findByIdAndDelete(id)
            res.json(usuario)
        }
        catch (err){
            console.log(err)
        }
    },

    update: async(req, res) => {
        try {
            const id = req.params.id
            const valor = {
                nome: req.body.nome,
                idade: req.body.idade,
            }
            const updateUsuario= await UsuarioModel.findByIdAndUpdate(id, usuario)
        }
        catch (err) {
            console.log(err)
        }
    },
}
module.exports = usuarioController