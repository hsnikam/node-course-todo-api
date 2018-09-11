const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db) => {
    if(err){
        return console.log('Unable to connect Database');        
    }
    console.log('Connected to Database');


    // db.collection('Todos').insertOne({
    //     text: 'some thing is here',
    //     complete: false
    // },(err,result) => {
    //     if(err){
    //         return console.log('Unable to connect db at the time of operation');
    //     }
    //     console.log(JSON.stringify(result.ops,undefined,2));
    // });

    db.collection('User').insertOne({
        name: 'Harshit',
        age: 21,
        location: 'Ahmedabad',
        complete: false
    },(err,result) => {
        if(err){
            return console.log('Unable to connect db at the time of operation');
        }
        console.log(JSON.stringify(result.ops,undefined,2));
    })
    db.close();
})