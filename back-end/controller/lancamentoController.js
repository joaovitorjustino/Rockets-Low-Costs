const { Lancamento: LancamentoModel } = require("../models/Lancamento")

const lancamentoController = {
    create: async(req, res) => {
        try {
            const lancamento = {
                dataLancamento: req.body.dataLancamento,
                lancamento: req.body.lancamento,
            }
            const response = await LancamentoModel.create(lancamento)
            res.status(201).json({response, msg:'LANCAMENTO CRIADO'})
        }
        catch (err) {
            console.log(err)
        }
    },

    getAll: async(req, res) => {
        try {
            const lancamento = await LancamentoModel.find()
            res.json(lancamento)
        }
        catch (err){
            console.log(err)
        }
    },

    get: async(req, res) => {
        try {
            const id = req.params.id
            console.log(id)
            const lancamento = await LancamentoModel.findById(id)
            res.json(lancamento)
        }
        catch (err){
            console.log(err)
        }
    },

    delete: async(req, res) => {
        try {
            const id = req.params.id
            const lancamento = await LancamentoModel.findByIdAndDelete(id)
            res.json(lancamento)
        }
        catch (err){
            console.log(err)
        }
    },

    update: async(req, res) => {
        try {
            const id = req.params.id
            const lancamento = {
                ataLancamento: req.body.dataLancamento,
                lancamento: req.body.lancamento,
            }
            const updateLancamento = await LancamentoModel.findByIdAndUpdate(id, lancamento)
        }
        catch (err) {
            console.log(err)
        }
    },
}
module.exports = lancamentoController