/**Code for connecting to MongoDb */
// const mongodb = require('mongodb');
// const MongoClient = mongodb.MongoClient;

// let _db;

// const mongoConnect = (callback) =>{
//     MongoClient.connect('mongodb+srv://svenherm:Peacemaker7@cluster0.mymxbjk.mongodb.net/shop')
//     .then(client =>{
//         console.log("Connected!");
//         _db = client.db();
//         callback();
//     })
//     .catch(err =>{
//         console.log(err);
//         throw err;
//     });
// };

// const getDb = () =>{
//     if(_db) {
//       return _db;
//     }
//     throw 'No database found!';
// };

// exports.mongoConnect = mongoConnect;
// exports.getDb = getDb;

/**Code for connecting to Sequelize */
// const Sequelize = require('sequelize');

// const sequelize = new Sequelize('stores_complete', 'root', 'Peacemaker7#', {
//     dialect: 'mysql',
//     host: 'localhost'
// });

// module.exports = sequelize;
