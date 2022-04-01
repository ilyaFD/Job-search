import React from "react";
import Home from "./components/scenes/Home";
import Job from "./components/scenes/Job";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

export default function App() {
  console.log(Home)
  return (
    <Router>
      <Routes>
        <Route exact path="/Job-search" element={<Home />} />
        <Route path="/job/:id"  element={<Job />} />
      </Routes>
    </Router>
  );
}
