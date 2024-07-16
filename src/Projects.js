import React from "react";
import "./Projects.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import MovieTracker from "./Movie-Tracker/movieTracker";
import Counter from "./Counter-Days/counter";
import PrevNext from "./Prev-Next/prev-next";
import ToDo from "./To-Do/ToDo";
import Flashcards from "./Flashcards/flashcards";

function Projects() {
  return (
    <div className="Projects">
      <p className="heading">PROJECTS</p>
      <Link to="/projects/movie-tracker">
        <button className="btn">Movie Tracker</button>
      </Link>

      <Link to="/projects/counter">
        <button className="btn">Counter Days</button>
      </Link>

      <Link to="/projects/prev-next">
        <button className="btn">Prev Next</button>
      </Link>

      <Link to="/projects/ToDo">
        <button className="btn">To-Do</button>
      </Link>

      <Link to="/projects/Flashcards">
        <button className="btn">Flashcards</button>
      </Link>
    </div>
  );
}

function Total() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Projects />} />
        <Route path="/projects/movie-tracker" element={<MovieTracker />} />
        <Route path="/projects/counter" element={<Counter />} />
        <Route path="/projects/prev-next" element={<PrevNext />} />
        <Route path="/projects/ToDo" element={<ToDo />} />
        <Route path="/projects/Flashcards" element={<Flashcards />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Total;
