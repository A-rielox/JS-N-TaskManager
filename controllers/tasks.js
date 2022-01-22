// '/api/v1/tasks'
const Task = require('../models/task'); // el schema

const getAllTasks = (req, res) => {
   res.send('get all taskestsitas');
};

// para el post en la ruta
const createTask = async (req, res) => {
   // console.log(req.body); { name: 'testing', completed: true }
   const task = await Task.create(req.body);
   res.status(201).json({ task });
};

const getTask = (req, res) => {
   res.json({ id: req.params.id });
};

const updateTask = (req, res) => {
   res.send('update task');
};

const deleteTask = (req, res) => {
   res.send('delete task');
};

module.exports = {
   getAllTasks,
   createTask,
   getTask,
   updateTask,
   deleteTask,
};
