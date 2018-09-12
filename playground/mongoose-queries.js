const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = '5b979a2958370cc826213c65';

if(!ObjectID.isValid(id)){
    console.log('id not valid');
}

//quiries in todos collection
Todo.find({
    _id : id
}).then((todos) => {
    console.log('Todos',todos);
});


Todo.findOne({
    _id : id
}).then((todo) => {
    console.log('Todo',todo);
});

Todo.findById(id).then((todo) => {
    if(!todo){
    return console.log('Todo not found');
    }
    console.log('To do by id',todo);
}).catch((e)=>console.log(e));

//query in user collection
User.findById(id).then((user) => {
    if(!user){
    return console.log('User not found');
    }
    console.log('User by id',user);
}).catch((e)=>console.log(e));