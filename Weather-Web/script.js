const API_KEY = "119b57257697c12a745fac79b7a1dc86";

const searchInput = document.getElementById("searchInput");
const cityName = document.getElementById("city-name");
const temp = document.getElementById("temp");
const rainChance = document.getElementById("rainChance");
const weatherIcon = document.getElementById("weatherIcon");


// Search on Enter
searchInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        getWeather(searchInput.value);
    }
});


async function getWeather(city) {

    try {

        const res = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
        );

        const data = await res.json();

        console.log(data);

        // Update UI
        cityName.innerText = data.name;
        temp.innerText = Math.round(data.main.temp) + "°";
        rainChance.innerText =
            "Humidity: " + data.main.humidity + "%";


        const iconCode = data.weather[0].icon;
        weatherIcon.src =
            `https://openweathermap.org/img/wn/${iconCode}@4x.png`;

    } catch (error) {
        alert("City is found");
    }
}


// Default city 
getWeather("Surat");
