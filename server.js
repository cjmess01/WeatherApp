const express = require('express');
const axios = require('axios');

//starts up the app
const app = express();


//Parameters for weather API
const params = {
    access_key: 'ed51a486d24143703a4d049dec99b63e',
    query: 'New York'
  }

//Allows us to get css and js files, provides the file structure basically
app.use(express.static(__dirname + '/APP'));

//gets root
app.get('/', (req, res) => {
    res.send('Hello World');
});


//This sends the html file, and the thing way above allows the css and js to come iwth it, assuming they are referenced correctly within the html file
app.get('/api/weather', (req, res)=>{
    console.log(__dirname);
    res.sendFile(__dirname + '/APP/HTML/main.html');
});

//This function is run by the helpers.js file
app.get('/getTemp', (req, res) => {

    axios.get('http://api.weatherstack.com/current', {params})
    .then(response => {
        const apiResponse = response.data;
        console.log(apiResponse);
        console.log(`Current temperature in ${apiResponse.location.name} is ${apiResponse.current.temperature}℃`);
        res.json(apiResponse);
  }).catch(error => {
    console.log(error);
  });
});

//Listens for an environemtn variable, and if it doesn't exists, sets to 3000
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));