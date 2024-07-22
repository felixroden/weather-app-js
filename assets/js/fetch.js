
const API_KEY = "0e854334daf9fef7bfef207660f77e1a";

export async function getCurrentWeather(lat, lon) {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    console.log("new function");
    return await fetchData(url);
}

export async function getLocation(lat, lon) {
    const url = `http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=5&appid=${API_KEY}`;
    return await fetchData(url);
}

export async function getCoordinates(cityName) {
    const url = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit={limit}&appid=${API_KEY}`;
    return await fetchData(url);
}

export async function getWeatherbyName(cityName) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`;
    return await fetchData(url);
}

async function fetchData(url) {
    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`An error occurred: ${response.statusText}`);
        }

        const data = await response.json();

        console.dir(data);
        return data;
    }
    catch (error) {
        console.error(error);
    }
}

