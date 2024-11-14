function displayWeather() {
    // Average weather data
    const temperature = 25;
    const conditions = "Partly Cloudy";
    const windSpeed = 15;
    const windChill = Math.round(
        13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16)
    );

    document.getElementById('temperature').innerHTML = `<strong>Temperature:</strong> ${temperature}°C`;
    document.getElementById('conditions').innerHTML = `<strong>Conditions:</strong> ${conditions}`;
    document.getElementById('windSpeed').innerHTML = `<strong>Wind Speed:</strong> ${windSpeed} km/h`;
    document.getElementById('windChill').innerHTML = `<strong>Wind Chill:</strong> ${windChill}°C`;
}

displayWeather();


function calculateWindChill () {

    const windChill = Math.round(
        13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16)
    );
}

calculateWindChill ();


const lastModified = document.lastModified;

const lastModifiedElement = document.getElementById('last-modified');

lastModifiedElement.innerHTML = new Date(lastModified).toLocaleString();