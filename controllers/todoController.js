//require body-parser to handle post data
const bodyParser = require('body-parser');

const urlencodedParser = bodyParser.urlencoded({extended: false});

var data = [{item: 'get milk'}, {item: 'walk dog'}, {item: 'coding'}];

//todo route controller, we export it to the app.js
module.exports = function(app) {

    app.get('/todo', function(req, res) {
        //render the 'todo.ejs' file (the view)
        res.render('todo', {todos: data});
    });

    app.post('/todo', urlencodedParser, function(req, res) {
        data.push(req.body);
        res.json({todos: data});
    });

    app.delete('/todo/:item', function(req, res) {
        data = data.filter(function(todo){
            return todo.item.replace(/ /g, '-') !== req.params.item;
        });
        res.json({todos: data});
    });

};
