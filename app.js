const express = require('express');
const app = express();
const tasks = require('./routes/tasks');
const connectDB = require('./db/connect');
require('dotenv').config(); // se instala con npm install dotenv
const notFound = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');

//@@@@@@@@@@@@@@@@@@@@@@@@@ MIDDLEWARE
// static assets
app.use(express.static('./public'));

// parse form json, xq la form se manda con javascript, para poner el contenido en el req.body
app.use(express.json());

// == ROUTES
// Para user las rutas de task
app.use('/api/v1/tasks', tasks);

// el catch-all ( para las q no existan )
app.use(notFound); // tiene q ir al final para poder ponerlo asi

// para el manejo de los errores del wrapper, los q se van a ir por el next()
app.use(errorHandlerMiddleware);
//@@@@@@@@@@@@@@@@@@@@@@@@@ APP.LISTEN
const port = process.env.PORT || 3000;

const start = async () => {
   // asi solo si se puede conectar a la DB => levanta el servidor
   // mongoose.connect() la fcn q está en connectDB devuelve una promesa
   try {
      await connectDB(process.env.MONGO_URI);
      app.listen(port, console.log(`Server is listening on port ${port}`));
   } catch (error) {
      console.log(error);
   }
};

start();

//
//
//app.get('/api/v1/tasks')          - get all the tasks
//app.post('/api/v1/tasks')         - create a new task
//app.get('/api/v1/tasks/:id')      - get single task
//app.patch('/api/v1/tasks/:id')    - update task
//app.delete('/api/v1/tasks/:id')   - delete task

// DB
// en la cuenta de arielox@hot...
// arielox
// Pepimini63

// MONGOOSE
// mongoose lo ocupo entre otras cosas para darle la estructura a los datos, para conectarme con la DB

// connection string
// mongodb+srv://arielox:<password>@nodeexpressprojects.pbkch.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
// Replace <password> with the password for the arielox user. Replace myFirstDatabase with the name of the database that connections will use by default. Ensure any option params are URL encoded.
