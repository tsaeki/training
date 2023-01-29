import fetch from 'node-fetch';

export async function weather(lat: number, lon: number): Promise<any> {
    const apiKey = process.env.OPEN_WEATHER_APIKEY

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;
    
    const response = await fetch(url, {
        method: 'GET'
    });

    return await response.json();
}