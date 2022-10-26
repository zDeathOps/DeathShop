const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const seriesSchema = new Schema({
    name: {
        type: String,
        require: true,
        max: 50,
    },
    categoryId: {
        type: String,
        require: true,
    },
    createdAt: {
        type: Date,
    }
});

module.exports = mongoose.model('Series', seriesSchema);
