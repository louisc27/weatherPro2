document.getElementById('searchButton').addEventListener('click', currentWeather);



function currentWeather(e){
let request;
let url = 'https://api.weatherbit.io/v2.0/current?city=';
let city = document.querySelector('#city-search').value;
let api = '&key=6cda72d602394dbfab2aa62b55056f78';
let units = '&units=I';
let hours = '&hours=48';


const sum = url + city + units + api;
const url2 = 'https://api.weatherbit.io/v2.0/forecast/hourly?city=';
let sum2 = url2 + city + units + api + hours;


request = new XMLHttpRequest();
request.open("GET", sum, true);



request.onload = function(){
    let info = JSON.parse(this.response);
    let output = '';

    

info.data.forEach(function(data){
let city = data.city_name;
let state = data.state_code;
let temp = data.temp;
let high = data.max_temp;
let low = data.min_temp;
let date = new Date();
let weekday = getWeekDay(date);
let appTemp = data.app_temp;
let dew = data.dewpt;
let precip = data.precip;
let sunrise = data.sunrise;
let sunset = data.sunset;
let windDir = data.wind_cdir_full;
let windSpd = data.wind_spd;
let humid = data.rh;

let pressure = data.pres;
let visibility = data.vis;



function getWeekDay(date){
    //Create an array containing each day, starting with Sunday.
    var weekdays = new Array(
        "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
    );
    //Use the getDay() method to get the day.
    var day = date.getDay();
    //Return the element that corresponds to that index.
    return weekdays[day];
}


document.querySelector('#navTemp').innerHTML = `<i class="fas fa-globe-americas fa-2x"></i> ${temp} &deg;`;
document.querySelector('#cityNav').innerHTML = `Currently feels like <strong>${temp} &deg;</strong> in ${city}, ${state}`
document.querySelector('#main-location').innerHTML = `${city}, ${state}`;
document.querySelector('#mainTemp').innerHTML = `${temp} &deg;`;
document.querySelector('#rainChance').innerHTML = `${precip}% `;
document.querySelector('#description').innerHTML = `${data.weather.description}`;
document.querySelector('#windSpd').innerHTML = `${windSpd} mph`;
document.querySelector('#humidity').innerHTML = `${humid}`;
document.querySelector('#dewPoint').innerHTML = `${dew}`;
document.querySelector('#vis').innerHTML = `${visibility}`;
document.querySelector('#pressure').innerHTML = `${pressure}`;
document.querySelector('#actualTemp').innerHTML = `${temp}&deg;`;


});
    
}

request.send();

    
}