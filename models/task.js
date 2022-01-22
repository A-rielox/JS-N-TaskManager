// para darle la estructura a todos los documentos de la colección
// se ocupa en los controllers
const mongoose = require('mongoose');

// 🔷
const TaskSchema = new mongoose.Schema({
   name: String,
   completed: Boolean,
});

module.exports = mongoose.model('Task', TaskSchema);

// el "model" es la representación de la colección en la DB.

// ⭐⭐⭐ el esquema define la estructura del document ( c/item ) y el "model" provee la interfaz a la DB para hacer CRUD => ussando el model es q podemos crear, modificar , ... los documents, x esto es q importamos este modelo a los controladores, q es donde está la lógica para los CRUD, y ahí hacemos las operaciones CRUD

// ====================       DE LOS DOCS DE MONGOOSE
// docs de models y CRUD CON MONGOOSE https://mongoosejs.com/docs/models.html

// Models are fancy constructors compiled from Schema definitions. An instance of a model is called a document 🔷. Models are responsible for creating and reading documents from the underlying MongoDB database.

// const schema = new mongoose.Schema({ name: 'string', size: 'string' });
// const Tank = mongoose.model('Tank', schema);

// 🍑 The first argument is the singular name of the collection your model is for. Mongoose automatically looks for the plural, lowercased version of your model name. Thus, for the example above, the model Tank is for the tanks collection in the database.

// Note: The .model() function makes a copy of schema. Make sure that you've added everything you want to schema, including hooks, before calling .model()!

//🔷 en base a "TaskSchema" se me van a crear los items en la DB
// 💥 tengo la DB
//    dentro de la DB tengo collection ( q pueden ser usuarioS o itemS )
//    dentro de las collecciones tengo itemS (documents) ( q van a ser c/usuario o c/item )

// ⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐
// para este proyecto la base de datos se va a llamar "03-taskManager" xq es lo q pasé en el connection string en .env ( el MONGO_URI 🥝 )
// la colección se va a llamar "tasks" xq 🍑 y lo q pasé como primer argumento en ( mongoose.model('Task', TaskSchema) )

// 🥝 MONGO_URI=mongodb+srv://arielox:Pepimini63@nodeexpressprojects.pbkch.mongodb.net/03-taskManager?retryWrites=true&w=majority
