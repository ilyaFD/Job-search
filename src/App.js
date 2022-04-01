import React from "react";
import Home from "./components/scenes/Home";
import Job from "./components/scenes/Job";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/job/:id"  element={<Job />} />
      </Routes>
    </Router>
  );
}
