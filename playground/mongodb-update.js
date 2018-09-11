const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db) => {
    if(err){
        return console.log('Unable to connect Database');        
    }
    console.log('Connected to Database');

    //updating
// db.collection('Todos').fidOneAndUpdate({
//     _id : new ObjectID('5b975e3394864b16f4e4539c')},
//     {
//         $set:{
//             complete:true
//         }
//     },{
//         returnOriginal:false
//     }).then((result) => {
//         console.log(result);
//     })

//updating and incrementing 
db.collection('User').findOneAndUpdate({
    //_id : new ObjectID('5b975e3394864b16f4e4539c')},
    location : 'Ahmedabad'},
    {
        $set:{
            name:'Harsh'
        },
        $inc:{
                age : 1
        }
    },{
        returnOriginal:false
    }).then((result) => {
        console.log(result);
    })

});