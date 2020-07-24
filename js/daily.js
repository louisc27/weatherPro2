document.getElementById('searchButton').addEventListener('click', getDaily);

function getDaily(e){

    let request;
    let city = document.querySelector('#city-search').value;
    let api = '&key=6cda72d602394dbfab2aa62b55056f78';
    let units = '&units=I';
    let url = 'http://api.weatherbit.io/v2.0/forecast/daily?city=';
    let days = '&days=7';


    let sum = url + city + units + days + api ;

    request = new XMLHttpRequest();
request.open("GET", sum, true);

request.onload = function(){
    let info = JSON.parse(this.response);
    let output = '';

    console.log(info);
    let lowTemp = info.data[0].low_temp;
    console.log(lowTemp);
    let highTemp = info.data[0].high_temp



    document.getElementById('hiLo').innerHTML = `${lowTemp}&deg; / ${highTemp}&deg;`;
    document.getElementById('highLow').innerHTML = `${lowTemp}&deg;/${highTemp}&deg;`;
    document.getElementById('hiLow').innerHTML = `${lowTemp}&deg; / ${highTemp}&deg;`


}

request.send();
}
