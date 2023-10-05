
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import Contactus from "./3.Contactus";
import Services from "./4.Services";
import Home from "./2.Home";
function Navbar() {
  return (
           <>
          <Router>
          <nav class="navbar navbar-expand-lg bg-body-tertiary" id="NavBar_1">
          <div class="container-fluid" id="nav_1">
            <a class="navbar-brand" href="/"> Fronted Devloper</a>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0" id="ulList_1">
              <li class="nav-item">
                  <a class="nav-link active" id="aList" aria-current="page" href="/Home"> Home</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" id="aList" aria-current="page" href="/contactus"> Contact US</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" id="aList" href="/services"> Services</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active"  id="aList"href="/React">LOG IN</a>
                </li>
              </ul>
            </div>
          </div>
        </nav> 
          
                <Routes>
                    <Route exact path="/Home" element={<Home/>}></Route>
                    <Route exact path="/Contactus" element={<Contactus/>}></Route>
                    <Route exact path="/Services" element={<Services />}></Route>
                </Routes>
            </Router>
        </>
    
  )
}

export default Navbar
