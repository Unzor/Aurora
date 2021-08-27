function randomString(length) {
  return Math.round((Math.pow(36, length + 1) - Math.random() * Math.pow(36, length))).toString(36).slice(1);
}

var express=require('express');
var app=express();

const cors = require('cors');



app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(express.urlencoded({extended: true}));
app.use(express.json()) // To parse the incoming requests with JSON payloads

app.get('/', function(req, res){
res.sendFile(__dirname + '/index.html');
});

app.post('/bundle', function(req, res){
  console.log(req.body);
  var ran=randomString(20);
var fName="ports/port_" + ran;
function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}   

var fs=require('fs');
fs.writeFile(fName, req.body.code, async function(){
    console.log('Base file written');
      await sleep(10);
require('shelljs').exec('npm start ports/wbe_' + ran + '.js ' + fName);
    console.log('Bundle file written');
          await sleep(10);
    fs.readFile('ports/wbe_'+ ran + '.js', 'utf8', function(err,a){
    res.end(a.toString());
    });
});

})


app.post('/package', function(req, res){
require('shelljs').exec('npm install ' + req.body.package);
res.send({success: true});
});


app.listen(8000);
