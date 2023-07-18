const ApiKey = "e040fd6fe60aa50fbd61bcabbdea6650";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const forecastApiUrl = "https://api.openweathermap.org/data/2.5/forecast?units=metric&q=";

const searchInput = document.querySelector(".searchbtn");
const searchButton = document.querySelector(".btn");
const now = new Date();
const icon = document.querySelector(".clouds");
const icon1 = document.querySelector(".clouds1");
const icon2 = document.querySelector(".rain1");
const icon3 = document.querySelector(".rain");
const icon4 = document.querySelector(".sun");

let design = document.querySelector(".headdesign");
let computedStyle = window.getComputedStyle(design);
let backgroundImage = computedStyle.backgroundImage;


async function getWeatherData(city) {
  const response = await fetch(apiurl + city + `&appid=${ApiKey}`);
  const forcastResponse = await fetch(forecastApiUrl + city + `&appid=${ApiKey}`);
  const forecastdata = await forcastResponse.json();
  console.log(forecastdata);


  const data = await response.json();
  console.log(data);

  if (data.cod !== 200) {
    alert("Sorry, could not find your city due to API issues.");
    return;
  }

  const timeZoneOffset = data.timezone; // Time zone offset in seconds
  const targetTime = new Date(now.getTime() + timeZoneOffset * 1000);
  const timeOptions = {
    hour: "numeric",
    minute: "numeric",
    timeZone: "UTC",
  };

  const dateOptions = {
    weekday: "long",
    day: "numeric",
    month: "short",
    year: "numeric",
  };

  console.log(targetTime);

  document.querySelector(".state").innerText = data.name;
  document.querySelector(".temp").innerText = Math.round(data.main.temp) + "°C";
  document.querySelector(".weath").innerText = data.weather[0].main;
  document.querySelector(".data1").innerText = data.main.humidity + "%";
  document.querySelector(".data2").innerText = data.wind.speed + "km/h";
  document.querySelector(".data3").innerText = data.weather[0].main;
  document.querySelector(".time").innerText = targetTime.toLocaleString("en-US", timeOptions);
  document.querySelector(".date").innerText = now.toLocaleDateString("en-US" , dateOptions);
  document.querySelector(".degree1").innerText = Math.round(data.main.temp) + "°C" ;
  document.querySelector(".time1").innerText = targetTime.toLocaleString("en-US", timeOptions);
  document.querySelector(".time2").innerText = targetTime.toLocaleString("en-US", timeOptions);
  document.querySelector(".time3").innerText = targetTime.toLocaleString("en-US", timeOptions);
  document.querySelector(".degree2").innerText = Math.round(forecastdata.list[0].main.temp) + "°C" ;
  document.querySelector(".degree3").innerText = Math.round(forecastdata.list[1].main.temp) + "°C" ;



  if ( data.weather[0].main == "Clouds") {
    icon.src = "images/clouds.png";
  }
  else if ( data.weather[0].main == "Clear") {
    icon.src = "images/sun.png";
  }
  else if ( data.weather[0].main == "Rain") {
    icon.src = "images/rain.png";
  }
  else if ( data.weather[0].main == "Snow") {
    icon.src = "images/snow.png";
  }
  else if ( data.weather[0].main == "Thunderstorm") {
    icon.src = "images/thunderstorm.png";
  }
  else if ( data.weather[0].main == "Haze") {
    icon.src = "images/drizzle.png";
  }
  else if ( data.weather[0].main == "Mist") {
    icon.src = "images/mist.png";
  }

  if ( data.weather[0].main == "Clouds") {
    icon1.src = "images/clouds.png";
  }
  else if ( data.weather[0].main == "Clear") {
    icon1.src = "images/sun.png";
  }
  else if ( data.weather[0].main == "Rain") {
    icon1.src = "images/rain.png";
  }
  else if ( data.weather[0].main == "Snow") {
    icon1.src = "images/snow.png";
  }
  else if ( data.weather[0].main == "Thunderstorm") {
    icon1.src = "images/thunderstorm.png";
  }
  else if ( data.weather[0].main == "Haze") {
    icon1.src = "images/drizzle.png";
  }
  else if ( data.weather[0].main == "Mist") {
    icon1.src = "images/mist.png";
  }


  if ( data.weather[0].main == "Clouds") {
    icon2.src = "images/clouds.png";
  }
  else if ( data.weather[0].main == "Clear") {
    icon2.src = "images/sun.png";
  }
  else if ( data.weather[0].main == "Rain") {
    icon2.src = "images/rain.png";
  }
  else if ( data.weather[0].main == "Snow") {
    icon2.src = "images/snow.png";
  }
  else if ( data.weather[0].main == "Thunderstorm") {
    icon2.src = "images/thunderstorm.png";
  }
  else if ( data.weather[0].main == "Haze") {
    icon2.src = "images/drizzle.png";
  }
  else if ( data.weather[0].main == "Mist") {
    icon2.src = "images/mist.png";
  }


  
  // For forecastdata.weather[0]
const weatherMain1 = forecastdata.list[0].weather[0].main;
if (weatherMain1 === "Clouds") {
  icon3.src = "images/clouds.png";
} else if (weatherMain1 === "Clear") {
  icon3.src = "images/sun.png";
} else if (weatherMain1 === "Rain") {
  icon3.src = "images/rain.png";
} else if (weatherMain1 === "Snow") {
  icon3.src = "images/snow.png";
} else if (weatherMain1 === "Thunderstorm") {
  icon3.src = "images/thunderstorm.png";
} else if (weatherMain1 === "Haze") {
  icon3.src = "images/drizzle.png";
} else if (weatherMain1 === "Mist") {
  icon3.src = "images/mist.png";
}

// For forecastdata.weather[1]
const weatherMain2 = forecastdata.list[1].weather[0].main;
if (weatherMain2 === "Clouds") {
  icon4.src = "images/clouds.png";
} else if (weatherMain2 === "Clear") {
  icon4.src = "images/sun.png";
} else if (weatherMain2 === "Rain") {
  icon4.src = "images/rain.png";
} else if (weatherMain2 === "Snow") {
  icon4.src = "images/snow.png";
} else if (weatherMain2 === "Thunderstorm") {
  icon4.src = "images/thunderstorm.png";
} else if (weatherMain2 === "Haze") {
  icon4.src = "images/drizzle.png";
} else if (weatherMain2 === "Mist") {
  icon4.src = "images/mist.png";
}

}


async function loadDefaultWeatherData() {
  const defaultCity = "kathmandu";
  await getWeatherData(defaultCity);
}


loadDefaultWeatherData();
searchButton.addEventListener("click", () => {
  console.log("done");
  getWeatherData(searchInput.value);
});
