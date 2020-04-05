// init weather object
const weather = new Weather();
// init UI
const ui = new UI();

// add event listerner
document.getElementById('btn').addEventListener('click', changeCity);

// get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

// change city function
function changeCity(){
    const cityName = prompt("Please enter City name");

    if (cityName != null) {
        weather.changeLocation(cityName);             
        // console.log(cityName);
    }
    getWeather();
}
function getWeather(){
    weather.getWeather()
    .then(results =>{    
        ui.paint(results);   
    })
    .catch(err =>console.log(err));
}
