var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose.js');
var {Todo} = require('./models/todo.js');
var {User} = require('./models/user.js');

var app = express();

app.use(bodyParser.json());

app.post('/todos',(req,res) => {
    var todo = new Todo({
        text: req.body.text
    });

    todo.save().then((doc)=>{ 
        res.send(doc);
    },(e)=>{
        res.status(400).send(e);
    })    
    console.log(req.body);
})

app.listen(3000,() => {
    
})

// var NewTodo = new Todo({ 
//     text : 'my todo applicaion'
// });

// NewTodo.save().then((doc) => {
//     console.log('Saved Todo',doc);
// },(e) => {
// console.log('Unable to save Todo');
// })

// var ApnaTodo = new Todo({ 
//     text : 'again todo',
//     completed:true,
//     completedAt:12
// });

// ApnaTodo.save().then((doc) => {
//     console.log(JSON.stringify(doc,undefined,2));
// },(e) => {
// console.log('Unable to save Todo',e);
// })




// var UserData = new UserTodo({
//     name: 'Harshit',
//     email:'nikam@gmail.com'
// });

// UserData.save().then((doc) => {
//     console.log(doc);
// },(e)=>{
//     console.log('Unable to save UserTodo',e);
// })