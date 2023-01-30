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
import UserContent from "./components/UserContent";
import About from "./components/About";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/submissions" element={<Submissions />} />
          <Route path="/user-rules" element={<UserContent />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Navigate to={"/"} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
