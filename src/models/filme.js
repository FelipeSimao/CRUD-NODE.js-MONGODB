const mongoose = require('mongoose')

const Filme = mongoose.model('filme', { 
    titulo: {
        type: String,
        required: true,
    },
    atores: Array,
    ano: Number,
    detalhes: Object,
    premiacoes: [Object], 
});

module.exports = Filme