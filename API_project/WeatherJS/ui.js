class UI{
    constructor(){
        this.location = document.getElementById('w-location');
        this.desc = document.getElementById('w-desc');
        this.string = document.getElementById('w-string');
        this.humidity = document.getElementById('w-humidity');
        this.Temp = document.getElementById('w-temp');
        this.minTemp = document.getElementById('w-minTemp');
        this.maxTemp = document.getElementById('w-maxTemp');
        this.pressure = document.getElementById('w-pressure');
    }
    paint(weatherInfo){
        this.location.textContent = weatherInfo.name;
        // this.desc.textContent = weatherInfo.weather;
        this.humidity.textContent = `Humidity: ${weatherInfo.main.humidity}%`;
        this.Temp.textContent = `Temp: ${weatherInfo.main.temp}K`;
        this.minTemp.textContent = `Min-temp: ${weatherInfo.main.temp_min}K`;
        this.maxTemp.textContent = `Max-temp: ${weatherInfo.main.temp_max}K`;
        this.pressure.textContent = `Pressure: ${weatherInfo.main.pressure} hPa`;
    }
}