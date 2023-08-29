var http = require('http');
var fs = require('fs')

const PORT = 8080

fs.readFile('./index.html', function(error, html) {
  if(error) throw error;
  http.createServer(function(request, response) {
    response.writeHeader(200, {"Content-Type": "text/html"});
    response.write(html);
    response.end()
  }).listen(PORT);
} );


const axios = require('axios');
const express = require('express');
const app = express();


//get post(add), put(edit), delete(delte), get(get data)
//app.METHOD(PATH, HANDLER)
//Path is the path on the server
//handler is a callback function, what is executed
app.get('/', function(req, res){
  res.json('check');
});

const params = {
  access_key: 'ed51a486d24143703a4d049dec99b63e',
  query: 'New York'
}




axios.get('http://api.weatherstack.com/current', {params})
  .then(response => {
    const apiResponse = response.data;
    console.log(`Current temperature in ${apiResponse.location.name} is ${apiResponse.current.temperature}℃`);
  }).catch(error => {
    console.log('hello');
    console.log(error);
  });
