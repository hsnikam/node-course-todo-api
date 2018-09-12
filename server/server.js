var express = require('express');
var bodyParser = require('body-parser');

var{ObjectId} = require('mongodb');
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

app.get('/todos',(req,res)=>{
    Todo.find().then((todos)=>{
        res.send(todos);
    }, (e)=>{
        res.status(400).send(e);
    })
})

app.get('/todos/:id',(req,res)=>{
    
     var id = req.params.id;

     //idvalid id
     if(!ObjectId.isValid(id)){
         console.log('Id is not valid');
         res.status(404).send();
     }

     Todo.findById(id).then((todo) => {
        if(!todo){
        console.log('Todo not found');
        res.status(404).send();
        }
        console.log('To do by id',todo);
        res.send(todo);
    }).catch((e)=>console.log(e));
     
});

app.listen(3000,() => {
    
})

module.exports = {app};