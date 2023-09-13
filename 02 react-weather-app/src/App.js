import React, { useState } from "react";
import styled from "styled-components";
import Axios from "axios";
import CityComponent from "./modules/CityComponent";
import WeatherComponent from "./modules/WeatherInfoComponent";

export const WeatherIcons = {
  "01d": "/react-weather-app/icons/sunny.png",
  "01n": "/react-weather-app/icons/night.png",
  "02d": "/react-weather-app/icons/day.png",
  "02n": "/react-weather-app/icons/cloudy-night.png",
  "03d": "/react-weather-app/icons/cloudy.png",
  "03n": "/react-weather-app/icons/cloudy.png",
  "04d": "/react-weather-app/icons/perfect-day.png",
  "04n": "/react-weather-app/icons/cloudy-night.png",
  "09d": "/react-weather-app/icons/rain.png",
  "09n": "/react-weather-app/icons/rain-night.png",
  "10d": "/react-weather-app/icons/rain.png",
  "10n": "/react-weather-app/icons/rain-night.png",
  "11d": "/react-weather-app/icons/storm.png",
  "11n": "/react-weather-app/icons/storm.png",
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 380px;
  padding: 20px 10px;
  margin: auto;
  border-radius: 4px;
  box-shadow: 0 3px 6px 0 #555;
  background: white;
  font-family: Montserrat;
`;

const AppLabel = styled.span`
  color: black;
  margin: 20px auto;
  font-size: 18px;
  font-weight: bold;
`;
const CloseButton = styled.span`
  padding: 2px 3px;
  background-color: black;
  border-radius: 50%;
  color: white;
  position: absolute;
`;

function App() {
  const [city, updateCity] = useState();
  const [weather, updateWeather] = useState();
  const fetchWeather = async (e) => {
    e.preventDefault();
    const response = await Axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=fe4feefa8543e06d4f3c66d92c61b69c`,
    );
    updateWeather(response.data);
  };
  return (
    <Container>
      <AppLabel>React Weather App</AppLabel>
      {city && weather ? (
        <WeatherComponent weather={weather} city={city} />
      ) : (
        <CityComponent updateCity={updateCity} fetchWeather={fetchWeather} />
      )}
    </Container>
  );
}

export default App;