 const api_key = "57a62592c7fafa75c5f8e90ecc5c6f50";
    const api_url = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
    const searchBox = document.querySelector(".search input");
    const searchBtn = document.querySelector(".search button");

    async function checkweather(city)
    {
        response = await fetch(api_url + city + `&appid=${api_key}`);
        var data = await response.json();
        if(data.cod == "404")
        {
            document.querySelector(".error").style.display = "block";
            document.querySelector(".weather").style.display = "none";
            return;
        }
        else
        {
            document.querySelector(".error").style.display = "none";
        }
       // console.log(data);
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

        if(data.weather[0].main == "Clouds")
        {
            document.querySelector(".weather-icon").src = "images/clouds.png";
        }
        else if(data.weather[0].main == "Clear")
        {
            document.querySelector(".weather-icon").src = "images/clear.png";
        }
        else if(data.weather[0].main == "Rain")
        {
            document.querySelector(".weather-icon").src = "images/rain.png";
        }
        else if(data.weather[0].main == "Drizzle")
        {
            document.querySelector(".weather-icon").src = "images/drizzle.png";
        }
        else if(data.weather[0].main == "Mist")
        {
            document.querySelector(".weather-icon").src = "images/mist.png";
        }
        else if(data.weather[0].main == "Snow")
        {
            document.querySelector(".weather-icon").src = "images/snow.png";    
        }
        else
        {
            document.querySelector(".weather-icon").src = "images/clouds.png";
        }
        
        document.querySelector(".weather").style.display = "block";


    }
    searchBtn.addEventListener("click", () => {
        checkweather(searchBox.value);
    });

    