const url = 'https://api.openweathermap.org/data/2.5/';

const key = '8f576eddf5e4d5e46761eb12e00e9f62';

const setQuery = (e) => {
    if (e.keyCode == '13') {
        getRersult(searchBar.value);
        console.log(searchBar.value);
    }
}
let cityName = "Isparta";

const getRersult = (cityName) => {
    let query = `${url}weather?q=${cityName}&appid=${key}&units=metric&lang=tr`;
    fetch(query)
        .then(weather => {

            return weather.json();

        })
        .then(displayResult);
}

const displayResult = (result) => {
    let city = document.querySelector('.city');
    city.innerText = `${result.name},${result.sys.country}`
    let temp = document.querySelector(".temp");
    temp.innerText = `${Math.round(result.main.temp)}°C`

    let desc = document.querySelector(".desc");
    desc.innerText = result.weather[0].description;

    let minmax = document.querySelector(".minmax");
    minmax.innerText = `${Math.round(result.main.temp_min)}°C / 
    ${Math.round(result.main.temp_max)}°C`;


    console.log(result);
}

const searchBar = document.getElementById("searchBar");
const myweatherform = document.getElementById("myweatherform");

searchBar.addEventListener("keypress", setQuery);
myweatherform.addEventListener("submit",function(e){
    e.preventDefault();
    getRersult(searchBar.value);
});

window.onload = function(e){
    e.preventDefault();
    getRersult("İstanbul");
}