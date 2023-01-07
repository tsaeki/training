import fetch from 'node-fetch';

(async () => {
    const apiKey = process.env.OPEN_WEATHER_APIKEY

    // tokyo
    const lat = 35.6828387
    const lon = 139.7594549

    // https://openweathermap.org/
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;
    
    await fetch(url, {
        method: 'GET'
    })
        .then((response) => response.json())
        .then((data) => console.log(data));
})();