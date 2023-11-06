const mongoose = require('mongoose')

async function main() {

    try {

        mongoose.set('strictQuery', true)
        //password: p41xMpOkDFu11bro
        await mongoose.connect('mongodb+srv://joaovitorjustinodelima:p41xMpOkDFu11bro@cluster0.qlypsrr.mongodb.net/?retryWrites=true&w=majority')

        console.log('Conectou com o DB...')
    }
    catch (err) {
        console.log('Erro: ' + err.message)
    }
}
module.exports = main