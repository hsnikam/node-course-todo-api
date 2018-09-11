const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db) => {
    if(err){
        return console.log('Unable to connect Database');        
    }
    console.log('Connected to Database');

    //delete many
//db.collection('Todos').deleteMany({text:'Edit lunch'}).then((result) => {
  //  console.log(result);


//deleteOne
// db.collection('Todos').deleteOne({text:'Eat lunch'}).then((result) => {
//     console.log(result);

    //findOneAndDelete
    //db.collection('Todos').findOneAndDelete({text:'Eat lunch'}).then((result) => {
      //  console.log(result);

      db.collection('User').findOneAndDelete({
          _id: new ObjectID("5b9763186d23ffdf1c59c6be")
        }).then((result) => {
        console.log(JSON.stringify(result,undefined,2));
});
});
 
    //db.close();
