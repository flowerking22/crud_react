import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.js';
import { Home } from './comps/Api';
import Navbar from './comps/Navbar.js';
import Jsonplaceholder from './comps/jsonplaceholder';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Depensics from './comps/Dependics';
function App() {
  return (
    <div>
      <Navbar />
      <div className="App container justify-content-center text-center">
        <BrowserRouter>
          <Routes>
            <Route exact path="" element={<Home />} />
            <Route path="/developed" element={<Jsonplaceholder />} />
            <Route path="/depensics" element={<Depensics />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}
export default App;