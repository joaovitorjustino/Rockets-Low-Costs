const { Valor: ValorModel } = require("../models/Valor")

const valorController = {
    create: async(req, res) => {
        try {
            const valor = {
                "foguete": req.body.foguete,
                "margemLucro": req.body.margemLucro,
                "valorLancamento": req.body.valorLancamento,
            }
            const response = await ValorModel.create(valor)
            res.status(201).json({response, msg:'VALOR CRIADO'})
        }
        catch (err) {
            console.log(err)
        }
    },

    getAll: async(req, res) => {
        try {
            const valores = await ValorModel.find()
            res.json(valores)
        }
        catch (err){
            console.log(err)
        }
    },

    get: async(req, res) => {
        try {
            const id = req.params.id
            const valor = await ValorModel.findById(id)
            res.json(valor)
        }
        catch (err){
            console.log(err)
        }
    },

    delete: async(req, res) => {
        try {
            const id = req.params.id
            const valor = await ValorModel.findByIdAndDelete(id)
            res.json(valor)
        }
        catch (err){
            console.log(err)
        }
    },

    update: async(req, res) => {
        try {
            const id = req.params.id
            const valor = {
                "foguete": req.body.foguete,
                "margemLucro": req.body.margemLucro,
                "valorLancamento": req.body.valorLancamento,
            }
            const updateValor = await ValorModel.findByIdAndUpdate(id, valor)
        }
        catch (err) {
            console.log(err)
        }
    },
}
module.exports = valorController