import React from "react";
import axios from "axios";
import Weather from "../weather/Weather.jsx";
import ErrorWarn from "../form/Form.jsx";

const Form = ({
  city,
  setCity,
  setWeather,
  weather,
  setErrorWarn,
  errorWarn,
}) => {
  const getWeather = (e) => {
    e.preventDefault();

    const API_Key = "ea3e44e2eadcc14637fd287e677bd970";
    axios(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_Key}`
    )
      .then(({ data }) => setWeather(data))
      .catch((er) => setErrorWarn(er));
    setCity("");
    setErrorWarn("");
    setWeather("");
  };
  const inputHandler = (e) => {
    setCity(e.target.value);
  };
  return (
    <form action="" onSubmit={getWeather} className="form">
      <input
        className="input"
        type="text"
        placeholder="Введите город"
        onChange={inputHandler}
        />
      {/* <button 
            className = 'btn' 
            type = 'submit'>
                Найти
                </button> */}
      {Object.keys(weather).length === 0 ? "" : <Weather weather={weather} />}
      {errorWarn === "" ? "" : <ErrorWarn />}
    </form>
  );
};
export default Form;
