class Weather {
    constructor(){
        this.apiKey = '82005d27a116c2880c8f0fcb866998a0';
        this.city = 'Kathmandu';
    }

    // fetch weather from API
    async getWeather(){
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.apiKey}`);

        const responseData = await response.json();
        return responseData;   
    }
    // change weather Location
    changeLocation(city){
        this.city = city;
    }
} 