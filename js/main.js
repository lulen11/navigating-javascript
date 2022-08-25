const apiKey = '0f1cbc6fc2151af2df8d76990ed9905e';
let lat = '-37.823960709402435';
let lon = '144.9991673684373';

const apiCall = 'https://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+lon+'&appid='+apiKey+'&units=metric';

function fetchWeather() {
    fetch(apiCall)
    .then((response) => response.json())
    .then((data) => document.getElementById("temp").innerHTML = data.main.temp);
}

// function fetchWeather() {
//     fetch(apiCall)
//         .then((response) => response.json())
//         .then((data) => console.log(data));
//     }

fetchWeather();


fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => response.json())
    .then((data) => console.log(data.message));