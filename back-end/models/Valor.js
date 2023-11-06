const mongoose = require('mongoose')

const {Schema} = mongoose

const valorSchema = new Schema({
    foguete: String,
    margemLucro: Number,
    valorLancamento: String,
}, {timestamps: true})

const Valor = mongoose.model('Valor', valorSchema)

module.exports = {
    Valor,
    valorSchema,
}