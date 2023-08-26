
        // Replace 'YOUR_API_KEY' with your actual OpenWeatherMap API key
        const apiKey = 'ed51a486d24143703a4d049dec99b63e';

        // Function to fetch weather data from the API
        function fetchWeather(city) {
            const apiUrl = `http://api.weatherstack.com/`;

            return fetch(apiUrl)
                .then(response => response.json())
                .catch(error => {
                    console.error('Error fetching weather data:', error);
                });
        }

        // Function to display weather information on the page
        function displayWeatherInfo(data) {
            const weatherInfo = data.getElementById('weather-info');
            console.log(weatherInfo.name);
           /* weatherInfo.innerHTML = `
                <p>City: ${data.name}</p>
                <p>Temperature: ${data.main.temp} &#8451;</p>
                <p>Weather: ${data.weather[0].description}</p>
                c
            `;
            */
        }

        // Example usage
        const city = 'New York'; // Change this to the city you want to get weather for
        fetchWeather(city);
        fetchWeather(city)
            .then(data => {
                displayWeatherInfo(data);
            });