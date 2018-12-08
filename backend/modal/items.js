const mongoose = require('mongoose');

const itemSchema = mongoose.Schema({
    product:{
        type: String,
        required: true
    },
    airflow:{
        type: Number,
        required: true
    },
    power:{
        type: Number,
        required: true
    },
    sound:{
        type: Number,
        required: true
    },
    diameter:{
        type: Number,
        required: true
    }
});

module.exports = mongoose.model("Item", itemSchema);
