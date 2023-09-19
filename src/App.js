import React from "react";
import Weather from "./Weather";
import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Lisbon"/>
        <footer>
          This project was coded by Mariana Pereira and is {""}
          <a href="https://github.com/Maryp90/react-weather-app" target="_blank" rel="noreferrer" className="footerLink">open-sourced</a> on Github and hosted on {" "}<a href="https://lighthearted-bunny-159ae6.netlify.app/" target="_blank" rel="noreferrer" className="footerLink">Netlify</a>
        </footer>
      </div>
    </div>
  );
}

