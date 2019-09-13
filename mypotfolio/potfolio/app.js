const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");
const morgan = require("morgan")
const mysql = require("mysql")
    // const path = require("path");

const app = express();

var html__dir = './public/';

app.use(morgan('short'));
var urlencodedParser = bodyParser.urlencoded({ extended: false });
// app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static('./public'));

app.use(session({

    secret: 'secret',
    resave: true,
    saveUninitialized: true

}));
// creating connection
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'potfolio_db',
    password: 'mysql'
});

// post request
app.post('/mydetatils', urlencodedParser, (req, res) => {
    const name = req.body.name;
    console.log(req.body);
    const email = req.body.email;
    const subject = req.body.subject;
    const textarea = req.body.textarea;

    const querystring = 'INSERT INTO profile(name, email, subject, textarea) VALUES(?,?,?,?)';

    connection.query(querystring, [name, email, subject, textarea]);
    connection.end();

    console.log("form is posted to database");
    res.end();

});

// route to server index page
app.get('/index', (req, res) => {
    res.sendFile(html__dir + "index.html");
});

// port for handling request
app.listen(3000);
console.log("server started at port 3000");