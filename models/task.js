// para darle la estructura a todos los documentos de la colección
// se ocupa en los controllers
const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
   name: String,
   completed: Boolean,
});

module.exports = mongoose.model('Task', TaskSchema);
