import React, { useState } from "react";
import "./App.css";
import Form from "../src/components/form/Form.jsx";
function App(props) {
  const [weather, setWeather] = useState({});
  const [city, setCity] = useState("");
  const [errorWarn, setErrorWarn] = useState("");
  return (
    <div className="app-container">
      <h1 className="title">Weather React App</h1>
      <Form
        weather={weather}
        city={city}
        setCity={setCity}
        setWeather={setWeather}
        errorWarn={errorWarn}
        setErrorWarn={setErrorWarn}
      />
    </div>
  );
}

export default App;

