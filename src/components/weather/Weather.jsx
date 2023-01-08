import React from 'react';

const Weather = ({weather}) => {
    // const icon = weather.weather[0].icon;
    return (
        <div>
            {/* {JSON.stringify(weather)} */}
            <div className="text">
               <p className = 'descr_city'>{weather.name}</p>
            <div className="temp">
            <p className = 'descr_temp'> 
            {/* <img src={`http://openweathermap.org/img/w/${icon}.png`} alt="" /> */}
             { Math.round(weather.main.temp - 273.15)}°C</p>
             <p className = 'descr_min_max'>{Math.round(weather.main.temp_max - 273.15)}/{Math.round(weather.main.temp_min - 273.16)}</p>
            </div>
             <p className = 'descr_press'>Давление: {weather.main.pressure}hPa</p>
             <p className = 'descr_hum'> Влажность: {weather.main.humidity}</p>
             
            </div>
            
        </div>
    );
};

export default Weather;