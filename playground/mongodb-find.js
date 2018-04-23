//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
//   const db = client.db('TodoApp')

  // db.collection('Todos').find({
  // 		_id: new ObjectID('5ad7560d1f15aadaa9ebb275')
  // 	}).toArray().then((docs) => {
  // 	console.log('Todos');
  // 	console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  // 	console.log('unable to fetch docs');
  // })

    db.collection('Todos').find().count().then((count) => {
  	console.log('Todos');
  	console.log(`Todos count: ${count}`);
  }, (err) => {
  	console.log('unable to fetch docs');
  })

  //client.close();
});