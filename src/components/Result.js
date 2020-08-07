import React from "react";

const Result = (props) => {
  const {
    err,
    city,
    temp,
    sunset,
    sunrise,
    wind,
    pressure,
    date,
  } = props.weather;

  let content = null;

  if (!err && city) {
    const sunriseTime = new Date(sunrise * 1000).toLocaleTimeString();
    const sunsetTime = new Date(sunset * 1000).toLocaleTimeString();
    const celcius = Math.floor(temp - 273.14);

    content = (
      <div className='container'>
        <div className='location-box'>
          <div className='location'>City: {city}</div>
          <h2>{date}</h2>
        </div>
        <div className='weather-box'>
          <div className='temp'>{celcius}&#176;C</div>
          <h3>Sunrise: {sunriseTime}</h3>
          <h3>Sunset: {sunsetTime}</h3>

          {/* <h3>{wind}m/s</h3>
          <h3>{pressure}hPa</h3> */}
        </div>
      </div>
    );
  }

  return (
    <div className='result'>
      {err ? `We cannot find this city ${city}` : content}
    </div>
  );
};

export default Result;
