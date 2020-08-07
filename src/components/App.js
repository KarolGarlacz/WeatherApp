import React, { Component } from "react";
import Form from "./Form";
import Result from "./Result";
import "./App.css";

class App extends Component {
  state = {
    value: "",
    date: "",
    city: "",
    sunrise: "",
    sunset: "",
    pressure: "",
    wind: "",
    temp: "",
    err: false,
  };

  handleInputChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  handleCitySubmit = (e) => {
    e.preventDefault();
    const API = `http://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&APPID=e6a26bc310d78bbdc3bb206571447366`;

    fetch(API)
      .then((response) => {
        if (response.ok) {
          return response;
        }
        throw Error("Error");
      })
      .then((response) => response.json())
      .then((res) => {
        const time = new Date().toLocaleString();
        console.log(res);

        this.setState((state) => ({
          err: false,
          date: time,
          city: state.value,
          sunrise: res.sys.sunrise,
          sunset: res.sys.sunset,
          temp: res.main.temp,
          pressure: res.main.pressure,
          wind: res.wind,
        }));
      })
      .catch((err) => {
        console.log(err);
        this.setState((prevState) => ({
          err: true,
          city: prevState.value,
        }));
      });
  };

  render() {
    return (
      <div className='App'>
        <Form
          value={this.state.value}
          change={this.handleInputChange}
          submit={this.handleCitySubmit}
        />
        <Result weather={this.state} />
      </div>
    );
  }
}
export default App;
