const mongoose = require('mongoose');

// en .env
// const connectionString =
//    'mongodb+srv://arielox:Pepimini63@nodeexpressprojects.pbkch.mongodb.net/03-taskManager?retryWrites=true&w=majority';

const connectDB = url => {
   return mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
   });
};

module.exports = connectDB;

// Replace <password> with the password for the arielox user. Replace myFirstDatabase with the name of the database that connections will use by default. Ensure any option params are URL encoded.
