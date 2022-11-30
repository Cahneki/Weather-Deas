import React from 'react';
import './ScoresPage.css';
import Navbar from '../NavBar/NavBar';
import { useState } from 'react';

const data = [
  { number: 1, name: 'Danielle Ehresman', entries: 12, score: 65.26 },
  { number: 2, name: '*CONSENSUS*', entries: 12, score: 53.14 },
  { number: 3, name: 'Marissa McGuire', entries: 12, score: 52.57 },
  { number: 4, name: 'Patrick Miller', entries: 12, score: 51.56 },
  { number: 5, name: '*NWS*', entries: 12, score: 41.65 },
]
function ScoresPage() {
  return(
  
    <>
    <Navbar />
    <div className="main-content">
      <h1>DAES Contest Score Viewer</h1>
    </div>

    <div className="dropdown1">
    <button className="dropbtn1">Sort By</button>
    <div className="dropdown-content1">
      <a>Complete Scores</a>
      <a>Scores By Period</a>
      <a>Scores By Game</a>
      <a>All Scores</a>
    </div>
    </div>

    <div className="dropdown2">
    <button className="dropbtn2">Filter</button>
    <div className="dropdown-content2">
      <a>Climatology</a>
      <a>Consensus</a>
      <a>GFS</a>
      <a>NAM</a>
      <a>Weather Channel</a>
      <a>Encon</a>
      <a>Ross Lazear</a>
    </div>
    </div>
    
    <hr />
    <br />
    <br />


<div className="Tab1">
      <h1>Composite Ranking of Forecasters</h1>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Entries</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map((value, key) => {
              return (
                <tr key={key}>
                  <td>{value.number}</td>
                  <td>{value.name}</td>
                  <td>{value.entries}</td>
                  <td>{value.score}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>

    


  </>
    


  )
}











export default ScoresPage;