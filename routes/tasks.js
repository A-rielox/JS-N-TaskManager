// '/api/v1/tasks'

const express = require('express');
const router = express.Router();
const {
   getAllTasks,
   createTask,
   getTask,
   updateTask,
   deleteTask,
} = require('../controllers/tasks');

router.route('/').get(getAllTasks).post(createTask);
router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask);

module.exports = router;
// se importan como tasks en app.js
