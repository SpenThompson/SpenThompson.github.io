import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navigation, Footer }  from "./components"

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <br />
        <ul>
          <li>Filler</li>
          <li>Filler</li>
        </ul>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
