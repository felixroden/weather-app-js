export async function getCurrentWeather(lat, lon) {
    const url = `http://localhost:3000/current-weather?lat=${lat}&lon=${lon}`;
    return await fetchData(url);
}

export async function getWeatherbyName(cityName) {
    const url = `http://localhost:3000/weather-by-name?cityName=${cityName}`;
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
    } catch (error) {
        console.error(error);
    }
}