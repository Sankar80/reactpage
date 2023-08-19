import { Link, Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import BookIt from "./BookIt";
import Contact from "./Contact";
import "./Navstyle.css";
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  return (
    <div className="App">
      <header>
      <h3 className="log">RR</h3>
      <nav className="items">
        <a><Link to = "/">Home</Link></a>
        <a><Link to = "/about">About</Link></a>
        <a><Link to = "/bookit">Gallery</Link></a>
        <a><Link to = "/contact">History</Link></a>
      </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/bookit" element={<BookIt />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
