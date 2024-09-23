const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const produtoSchema = new Schema({
    categoria: { type: String, required: true },
    nome: { type: String, required: true },
    id: { type: Number, required: true },
    descricao: { type: String, required: false },
    image: { type: String, required: false },
    // Produto vinculado a um ou mais artesãos
    artesao: [{ 
        type: Schema.Types.ObjectId, 
        ref: 'Artesao',
        required: true
    }]
});

module.exports = mongoose.model('Produto', produtoSchema);
