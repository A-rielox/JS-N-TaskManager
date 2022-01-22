// '/api/v1/tasks'
const Task = require('../models/task'); // el schema

const getAllTasks = async (req, res) => {
   try {
      const tasks = await Task.find({});
      res.status(200).json({ tasks });
   } catch (error) {
      res.status(500).json({ msg: error });
   }
};

// para el post en la ruta
const createTask = async (req, res) => {
   // console.log(req.body); { name: 'testing', completed: true }
   try {
      const task = await Task.create(req.body);
      res.status(201).json({ task });
   } catch (error) {
      res.status(500).json({ msg: error });
   }
};
// lo q se manda en el .json(), a la DB solo se mandan las props q pongo en el schema, si tengo más en el req.body => se van a ignorar, en este caso la gracia es q lo q paso en el req.body tiene la misma forma q mi schema.
// lo q se hace aquí es q:
//    lo q esta en mi req.body o mando a la DB a traves de mongoose con el Task.create, y la reapuesta q manda la DB se mete en task y se manda como respuesta al front con "res.status(201).json({ task })" la respuesta q se pone en task es lo q está abajo y es lo q se crea en la DB
// {
//    "task": {
//        "_id": "61ec3228f01b4c354077a5c3",
//        "name": "testing",
//        "completed": true,
//        "__v": 0
//    }
// }

const getTask = async (req, res) => {
   try {
      const { id: taskID } = req.params;
      const task = await Task.findOne({ _id: taskID });
      // segun documentación, si no encuentra un match en DB => me retorna "null"
      if (!task) {
         return res.status(404).json({ msg: `No task with id ${taskID}` });
      }

      res.status(200).json({ task });
   } catch (error) {
      res.status(500).json({ msg: error });
   } // si la _id tiene bien la estructura pero no existe => nos manda el "null" y pasa nuestro error 404
   // si tiene caracteres de + o de - =>manda el error 500 ( si está mala la estructura del id )
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

// ⭐⭐⭐ lo q viene de Task es el model y el esquema
// el esquema define la estructura del document ( c/item con { name:"", completed:""... } ) y el "model" provee la interfaz a la DB para hacer CRUD => ussando el model es q podemos crear, modificar , ... los documents, x esto es q importamos este modelo a los controladores, q es donde está la lógica para los CRUD, y ahí hacemos las operaciones CRUD

// mirar la descripción en models/task.js
