import { weather } from "./libs/weather.js";

(async () => {
    // tokyo
    const lat: number = 35.6828387;
    const lon: number = 139.7594549;

    const ret = await weather(lat, lon);

    console.log(ret);
})();