import React, { Component } from 'react';
import { connect } from 'react-redux';

import Chart from '../components/ChartLines';

class WeatherList extends Component {
  constructor(props) {
    super(props);
  }
  renderWeather(cityData) {
    //console.log(cityData.city.name);
    const len = cityData.list.length;
    let temp = [], pressure=[], humidity= [];
    temp = cityData.list.map((value) => parseInt(value.main.temp)-273);
    pressure = cityData.list.map((value) => value.main.pressure);
    humidity = cityData.list.map((value) => value.main.humidity);
    // console.log('Temprature', temp);
    // console.log('Pressure', pressure);
    // console.log('Humidity', humidity);

    return(
      <tr key={cityData.city.name}>
        <td> { cityData.city.name } ({cityData.city.country}) </td>
        <td><Chart data={temp} color="orange" /></td>
        <td><Chart data={pressure} color="blue" /></td>
        <td><Chart data={humidity} color="green" /></td>
      </tr>
    );
  };
  render() {
    return (
      <table className="table table-hover">
        <thead className="center">
          <tr>
            <th className="city">City</th>
            <th>Temprature</th>
            <th>Pressure</th>
            <th>Humidity</th>
          </tr>
        </thead>
        <tbody>
          { this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}

function mapStateToProps(state) {
  return {
    weather: state.weather
  };
}
/**
 * Whis is completely same as
 * function mapSateToProps({ weather }) {
 *  return {weather: state.weather};  OR
 *  return {weather};
 * }
 */

export default connect(mapStateToProps)(WeatherList);