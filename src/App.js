import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "./layout/navbar";
import "./App.css";
import Content from "./layout/pages/event";

function App() {
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <div>
            <Navbar /> {/* Navbar outside of header for better structure */}
          </div>
        </header>
      </Router>

      <main>
        <Content /> { }
        <Router>
          <Link to="/"></Link>
          <Link to="/attendee-details"></Link>
          <Link to="/ready"></Link>


        </Router>
      </main>

    </div>
  );
}

export default App;
