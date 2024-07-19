import logo from "./logo.svg";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom"; // Import Routes, Route, and Link
import Home from "./components/Home"; // Import Home component
import Experience from "./components/Experience";
import Portfolio from "./components/Portfolio";

function App() {
  return (
    <div>
      <Home />
      <Experience />
      <Portfolio />
    </div>
  );
}

export default App;
