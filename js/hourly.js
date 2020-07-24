document.getElementById('searchButton').addEventListener('click', getHourly);


function getHourly(e){

let request;
let city = document.querySelector('#city-search').value;
let api = '&key=6cda72d602394dbfab2aa62b55056f78';
let units = '&units=I';
let hours = '&hours=24';


const url2 = 'https://api.weatherbit.io/v2.0/forecast/hourly?city=';
let sum2 = url2 + city + units + api + hours;

request = new XMLHttpRequest();
request.open("GET", sum2, true);

request.onload = function(){
    let info = JSON.parse(this.response);
    let output = '';

    
    info.data.forEach(function(data){

        let morning = info.data[7].temp;
        let afternoon = info.data[10].temp;
        let evening = info.data[1].temp;
        let overnight = info.data[4].temp;

        let mRain = info.data[1].precip;
        let aRain = info.data[4].precip;
        let eRain = info.data[7].precip;
        let oRain = info.data[10].precip;
       


        document.querySelector('#mTemp').innerHTML = `${morning}&deg;`;
        document.querySelector('#aTemp').innerHTML = `${afternoon}&deg;`;
        document.querySelector('#eTemp').innerHTML = `${evening}&deg;`;
        document.querySelector('#oTemp').innerHTML = `${overnight}&deg;`;
        document.querySelector('#mRain').innerHTML = `<i class="fas fa-tint mt-2"></i> ${mRain}%`;
        document.querySelector('#aRain').innerHTML = `<i class="fas fa-tint mt-2"></i> ${aRain}%`;
        document.querySelector('#eRain').innerHTML = `<i class="fas fa-tint mt-2"></i> ${eRain}%`;
        document.querySelector('#oRain').innerHTML = `<i class="fas fa-tint mt-2"></i> ${oRain}%`;
    })

    
}
request.send();
}