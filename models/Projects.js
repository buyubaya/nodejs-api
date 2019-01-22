const mongoose = require('mongoose');


const projectSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String
});


module.exports = mongoose.model('Project', projectSchema);