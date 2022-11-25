import React, { useState } from 'react';

function Period4() {
  const [highTemp2, setHighTemp2] = useState('');

  const [percentChanceP4, setPercentChanceP4] = useState({
    'Precip for 0 to Trace': 0,
    'Precip for Trace to 0.05" ': 0,
    'Precip for 0.06" to 0.14" ': 0,
    'Precip for 0.15" to 0.24" ': 0,
    'Precip for 0.25" to 0.49" ': 0,
    'Precip for 0.50" or more ': 0,
  });
  return (
    <div className="period-4-container">
      <div className="entries-1">
        <br />
        <p>High Temp</p>
        <input type="text" />
        <p>Precip for 0 or Trace</p>
        <select name="percent-chance">
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
        <p>Precip for Trace to 0.05"</p>
        <select name="percent-chance">
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
        <p>Precip for 0.06" to 0.14"</p>
        <select name="percent-chance">
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
        <p>Precip for 0.15" to 0.24"</p>
        <select name="percent-chance">
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
        <p>Precip for 0.25" to 0.49"</p>
        <select name="percent-chance">
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
        <p>Precip for 0.50" or more</p>
        <select name="percent-chance">
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
      </div>
    </div>
  );
}

export default Period4;
