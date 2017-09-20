const express = require('express');
const mysql = require('mysql');
const app = express();
const bodyParser = require('body-parser');

app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

/*export the configuration for mysql*/
const db = require('./db_connect'); 

/*check if connected to mysql*/
db.connect((err) => {
    if(err){
        throw err;
    }else{
        console.log('Mysql connected');
    }
});

/*http get REST api for getting playertypes*/
app.get('/playertype',(req,res)=>{
    let sqlget = "SELECT * FROM playertype";
    db.query(sqlget, function (err, result) {
        if (err) throw err;
        console.log(result);
        res.send(result);
    });
});

/*http get REST api for getting players*/
app.get('/players',(req,res)=>{
    let sqlget = "SELECT * FROM playerlist";
    db.query(sqlget, function (err, result) {
        if (err) throw err;
        console.log(result);
        res.send(result);
    });
});

//rest api to create a new record into mysql database
app.post('/addplayer', function (req, res) {
   var postData  = req.body;
   db.query('INSERT INTO playerlist SET ?', postData, function (error, results, fields) {
	  if (error) throw error;
	  res.end("Player Added successfully");
      //console.log(results);
	});
});

/*running the node server in 3030 port*/
app.listen('3030',() => {
    console.log('Server started on 3030');
});
