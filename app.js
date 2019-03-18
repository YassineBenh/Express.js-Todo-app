//require express package
const express = require('express');
//require todo controller
const todoController = require('./controllers/todoController');

//set up express app
const app = express();

//set up template object
app.set('view engine', 'ejs');

//static files
app.use(express.static('./public'));

//fire todocontroller and pass the app const as a parameter of the function
todoController(app);

//listen to port
app.listen(3000);
console.log('Port listening is 3000');
