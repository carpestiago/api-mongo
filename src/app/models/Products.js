const mongoose = require('mongoose');

const ProductsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    descricao: {
        type: String,
        required: true
    },
    manual: {
        type: String,
        required: false
    },
    image: {
        type: String,
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    updated_at: {
        type: Date,
        default: Date.now
    }
})

mongoose.model('Products', ProductsSchema);