import { useState, useEffect } from "react";

const Weather = () => {

  const apikey = "7fbdd4e4de2a67cc52787c7b8ddcc848";
  const ipApiKey = "2422ff9af08243df8714d106c35ec9a0"
  const [weather, setWeather]= useState();


  useEffect(() => {
    async function getData() {
      try {

        const ipResponse = await fetch(
         "http://ip-api.com/json/"
        )

        const ipData = await ipResponse.json();
        console.log( ipData )

  
        const response = await fetch(

          `https://api.openweathermap.org/data/2.5/weather?lat=${ipData.lat}&lon=${ipData.lon}&units=metric&appid=${apikey}`

       );

        const data = await response.json();

        setWeather(data)
        console.log(data)


      } catch (error) {
      }
    }
    getData();

  }, []);

  return (
    <>
   
    <div className="">

      {weather && (
    <div className='flex-col text-base	'>
    <h2 className="text-center">{weather.name},</h2>
    <p className="text-center">Temperature: {weather.main.temp}°C</p>
    <p>Weather Description: {weather.weather[0].description}</p>

 
  </div>
)}


    </div>

    </>
  )

}

export default Weather



