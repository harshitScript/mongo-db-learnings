const fs = require('fs');
const path = require('path')
const result = fs.readFileSync(path.join(__dirname, 'persons.json'), 'utf8');
const connection = new Mongo();
const database = connection.getDB('Resident');
database.Person.insertMany(result);