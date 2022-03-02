const apikey = "3756e7a0ff26e73119b53d7936a7da73";

const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");

const url = (city) =>
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;


async function getWeatherByLocation(city){
    const response = await fetch(url(city), {origin: "cors"});
    const responseData = await response.json();
}    