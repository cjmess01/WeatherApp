const axios = require('axios');
const params = {
  access_key: 'ed51a486d24143703a4d049dec99b63e',
  query: 'New York'
}


axios.get('https://api.weatherstack.com/current', {params})
  .then(response => {
    const apiResponse = response.data;
    console.log(`Current temperature in ${apiResponse.location.name} is ${apiResponse.current.temperature}℃`);
  }).catch(error => {
    console.log('hello');
    console.log(error);
  });
