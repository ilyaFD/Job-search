import React from "react";
import Home from "./components/scenes/Home";
import Job from "./components/scenes/Job";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  HashRouter
} from "react-router-dom";

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route exact path="/Job-search" element={<Home />} />
        <Route path="/job/:id"  element={<Job />} />
      </Routes>
    </HashRouter>
  );
}
