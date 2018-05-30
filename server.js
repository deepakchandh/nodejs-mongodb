//console.log('deepak chandh');
const express = require('express');
const app = express();

const bodyParser = require("body-parser");

/** bodyParser.urlencoded(options)
 * Parses the text as URL encoded data (which is how browsers tend to send form data from regular forms set to POST)
 * and exposes the resulting object (containing the keys and values) on req.body
 */
app.use(bodyParser.urlencoded({
    extended: true
}));

app.listen(3000, function() {
    console.log('listening to 3000');
}) // creates a web server at 3000 and listens

app.use(bodyParser.json());

// path, callback

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

var fname;
var lname;

app.post('/quotes', (req, res) => {
    fname = req.body.fname;
lname = req.body.lname;
console.log(req.body.fname)
console.log(req.body.lname)
mongoClient.connect(url, function(err, db) {
    createDocuments(db, function() {
        db.close();
    });
});
})
app.use(bodyParser.urlencoded({
    extended: true
}))


var mongodb = require('mongodb');
var mongoClient = mongodb.MongoClient;

var url = 'mongodb://localhost:27017/jdproject';



var createDocuments = function(db, callback) {
    var collection = db.collection("jduser");
    collection.insert([{
        firstname: fname,
        lastname: lname
    }, ], function(err, result) {
        callback(result);
    });
}