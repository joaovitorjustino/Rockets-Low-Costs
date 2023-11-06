const mongoose = require('mongoose')
const {Schema} = mongoose

const lancamentoSchema = new Schema({
    dataLancamento: String,
    lancamento: Boolean
}, { timestamps: true })

const Lancamento = mongoose.model('Lancamento', lancamentoSchema)

module.exports = {
    Lancamento,
    lancamentoSchema,
}