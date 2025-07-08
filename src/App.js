import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// css imports 
import './App.css';

// components import
import Nav from "./components/navbar";


// pages import 
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Animation from "./components/fadeIn";


function App() {
  return (
    <Router>
      <Nav />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/animation" element={<Animation />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
