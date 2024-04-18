const url =
  "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Mumbai";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "c8df2af9a2mshadf6ad58d69b3a5p1b4214jsn17a87b3808b5",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};

function getWeather(city) {
  cityName.innerHTML = city;

  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
    options
  )
    .then((response) => response.json())
    .then((data) => {
      cloud_pct.innerHTML = data.cloud_pct;
      temp.innerHTML = data.temp;
      temp2.innerHTML = data.temp;
      feels_like.innerHTML = data.feels_like;
      humidity.innerHTML = data.humidity;
      humidity2.innerHTML = data.humidity;
      min_temp.innerHTML = data.min_temp;
      max_temp.innerHTML = data.max_temp;
      wind_speed.innerHTML = data.wind_speed;
      wind_speed2.innerHTML = data.wind_speed;
      wind_degrees.innerHTML = data.wind_degrees;
      sunrise.innerHTML = data.sunrise;
      sunset.innerHTML = data.sunset;
      console.log(data);
      console.log(data.temp);
    })
    .catch((err) => console.log(err));
}

submit.addEventListener("click", (e) => {
  e.preventDefault();
  getWeather(city.value);
});

getWeather("Delhi");

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }

// can-pct.innerHTML =

// function otherWeathers(othercity) {
//   var pct = document.querySelector(".pct");
//   console.log(pct);

//   fetch(
//     "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + othercity,
//     options
//   )
//     .then((response) => response.json())
//     .then((data) => {
//       pct.innerHTML = data.cloud_pct;
//       // can_pct.innerHTML = data.cloud_pct;
//       // can_fl.innerHTML = data.feels_like;
//       // can_hum.innerHTML = data.humidity;
//       // can_maxt.innerHTML = data.max_temp;
//       // can_mint.innerHTML = data.min_temp;
//       // can_sunr.innerHTML = data.sunrise;
//       // can_suns.innerHTML = data.sunset;
//       // can_temp.innerHTML = data.temp;
//       // can_wd.innerHTML = data.wind_degrees;
//       // can_ws.innerHTML = data.wind_speed;
//       console.log(data);
//     })
//     .catch((err) => console.log(err));
// }

function getWeatherInfo(city) {
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
    options
  )
    .then((response) => response.json())
    .then((data) => {
      const pct = data.cloud_pct;
      const fl = data.feels_like;
      const humidity = data.humidity;
      const max_temp = data.max_temp;
      const min_temp = data.min_temp;
      const sunr = data.sunrise;
      const suns = data.sunset;
      const temp = data.temp;
      const wd = data.wind_degrees;
      const ws = data.wind_speed;

      showWeatherInfo(
        pct,
        fl,
        city,
        temp,
        humidity,
        min_temp,
        max_temp,
        sunr,
        suns,
        wd,
        ws
      );
    })
    .catch((err) => console.log(err));
}

function showWeatherInfo(
  pct,
  fl,
  city,
  temp,
  humidity,
  min_temp,
  max_temp,
  sunr,
  suns,
  wd,
  ws
) {
  var tableBody = document.querySelector("#weatherTable tbody");
  var newRow = tableBody.insertRow();
  newRow.innerHTML = `<th>${city}</th><td>${pct}</td><td>${fl}</td><td>${humidity}</td><td>${max_temp}</td><td>${min_temp}</td><td>${sunr}</td><td>${suns}</td><td>${temp}</td><td>${wd}</td><td>${ws}</td>`;
}

var cities = ["New York", "London", "Tokyo", "Paris", "Sydney"];

cities.forEach(function (city) {
  getWeatherInfo(city);
});

// otherWeathers("Canada");
