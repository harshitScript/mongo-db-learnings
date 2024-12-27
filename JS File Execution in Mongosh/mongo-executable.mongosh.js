// run "mongosh" (to connect to the database)
// run load(<js-file-path>) (to run the js file) 

conn = new Mongo(); // Get connection of the mongodb server
db = conn.getDB("credit"); // Get the database or create a new database.
db.ratings.insertOne({ "person_id": 1, "score": Math.random() * 100, "age": Math.floor(Math.random() * 70) + 18})