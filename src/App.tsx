import React from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import Main from "./components/Main";
import Header from "./components/Header";
import Submissions from "./components/Submissions";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="*" element={<Navigate to={"/"} />} />
          <Route path="/submissions" element={<Submissions />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
