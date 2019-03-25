//require all dependecies that you will be needing
const express = require('express');
const bodyParser = require('body-parser');
const dbConfig = require('./config/databse.config.js');
const mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);
//instantiate the express;
const app = express();

//use bodyParser to parse  requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: true
}));

mongoose.Promise = global.Promise

mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
},).then(() => {
    console.log('successfully connected to the database');
}).catch((err) => {
    console.log('may error', err);
    process.exit;
});


//parse requests content-type - application/json
app.use(bodyParser.json());

//defining a sample route of get method
app.get('/', (req, res) => {
    res.json({
        "message": "Welcome to my sample rnd node crud application"
    });
});

require('./app/routes/note.routes.js')(app);

app.listen(3000, () => {
    console.log(`listeing to port 3000`);
});