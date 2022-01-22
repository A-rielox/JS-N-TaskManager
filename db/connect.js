const mongoose = require('mongoose');

const connectDB = url => {
   return mongoose.connect(url, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
   });
};

module.exports = connectDB;

// mongoose.connect(), me conecta a la BD, le paso el 'connection string' q me dan en la BD, en este caso es el parametro 'url' q le paso cuando la invoco en app.js ( es lo q está acá abajo como connection string ).
// el "connection string" lo tengo en archivo ".env", para poder ocuparlo como se debe ( que no se suba a git y todo el show ) tengo q instalar "dotenv" q está en las "dependencies" del "package.json". Donde lo voy a ocupar tengo q hacer el "require('dotenv').config()" y luego lo paso a la fcn como "process.env.MONGO_URI"

// en el connection string donde dice "myFirstDatabase" le pongo el nombre q quiro q tenga mi DB, si no existe en mongo => se crea sola con ese nombre

// DB
// en la cuenta de arielox@hot...
// arielox
// Pepimini63

// connection string
// mongodb+srv://arielox:<password>@nodeexpressprojects.pbkch.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

// Replace <password> with the password for the arielox user. Replace myFirstDatabase with the name of the database that connections will use by default. Ensure any option params are URL encoded.
