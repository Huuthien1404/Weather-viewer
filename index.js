const appid = "c6f58212de0c17f2e8697559338627bc";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&appid=";
let searchBtn = document.getElementById("search-btn");
let searchInput = document.getElementById("search-input");

function render(data) {
  if (data.name === undefined) {
    document.querySelector(
      ".weather-details-content"
    ).innerHTML = `<div class="no-content">Invalid city name</div>`;
  } else {
    let renderHTML = `<div class="weather-img">
    <div class="weather-img-container">
      <img src="./images/${data.weather[0].main}.png" alt="" />
    </div>
  </div>
  <div class="weather-temp-container">
    <h1 id="weather-temp">${Math.floor(data.main.temp)}°C</h1>
  </div>
  <div class="weather-city-container">
    <h1 id="weather-city">${data.name}</h1>
  </div>
  <div class="weather-details-container">
    <div class="weather-humidity-container">
        <div class="weather-humidity-img">
            <img src="./images/humidity.png" alt="">
        </div>
        <div class="weather-humidity-content">
            <h2 id="weather-humidity-value">${Math.floor(
              data.main.humidity
            )}%</h2>
            <h3>Humidity</h2>
        </div>
    </div>
    <div class="weather-windSpeed-container">
        <div class="weather-windSpeed-img">
            <img src="./images/wind.png" alt="">
        </div>
        <div class="weather-windSpeed-content">
            <h2 id="weather-windSpeed-value">${data.wind.speed}km/h</h2>
            <h3>Wind Speed</h2>
        </div>
    </div>
  </div>`;
    document.querySelector(".weather-details-content").innerHTML = renderHTML;
  }
}
async function getData() {
  let response = await fetch(apiUrl + appid + `&q=${searchInput.value}`);
  let data = await response.json();
  render(data);
}

searchBtn.onclick = () => {
  getData();
};

searchInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        searchBtn.onclick();
    }
});
