import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navigation, Footer }  from "./components";
import { Home, About, Blog, Contact, Essays, Podcasts, WebDev } from "./components/pages";

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <br />
        <ul>
          <li>Filler</li>
        </ul>
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route exact path="/about" element={<About />}/>
          <Route exact path="/blog" element={<Blog />}/>
          <Route exact path="/contact" element={<Contact />}/>
          <Route exact path="/web-examples" element={<WebDev />}/>
          <Route exact path="/essays" element={<Essays />}/>
          <Route exact path="/podcasts" element={<Podcasts />}/>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
