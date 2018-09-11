const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db) => {
    if(err){
        return console.log('Unable to connect Database');        
    }
    console.log('Connected to Database');

db.collection('Todos').find({completed: true}).toArray().then((docs) => {
    console.log('Todos');
    console.log(JSON.stringify(docs,undefined,2));
},(err) => {
    console.log('can not fetch todos',err);
})
 
    //db.close();
})