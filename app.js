const express = require('express');
const app = express();
const tasks = require('./routes/tasks');
const port = 3000;

//@@@@@@@@@@@@@@@@@@@@@@@@@ MIDDLEWARE
// parse form json, xq la form se manda con javascript, para poner el contenido en el req.body
app.use(express.json());

//@@@@@@@@@@@@@@@@@@@@@@@@@ ROUTES
app.get('/hello', (req, res) => {
   res.send('Task Manager App');
});

// Para user las rutas de task
app.use('/api/v1/tasks', tasks);

//@@@@@@@@@@@@@@@@@@@@@@@@@ APP.LISTEN
app.listen(port, console.log(`Server is listening on port ${port}`));

//app.get('/api/v1/tasks')          - get all the tasks
//app.post('/api/v1/tasks')         - create a new task
//app.get('/api/v1/tasks/:id')      - get single task
//app.patch('/api/v1/tasks/:id')    - update task
//app.delete('/api/v1/tasks/:id')   - delete task

// DB
// en la cuenta de arielox@hot...
// arielox
// Pepimini63

// connection string
// mongodb+srv://arielox:<password>@nodeexpressprojects.pbkch.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
// Replace <password> with the password for the arielox user. Replace myFirstDatabase with the name of the database that connections will use by default. Ensure any option params are URL encoded.
