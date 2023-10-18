
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";

import Home from "./Home";
import Contactus from "./Contactus";
import Services from "./Services";

const Website = () => {
    return (
        <>
          <Router>
                {/* <ul type="none" style={{display:"flex"}}>
                    <li> <NavLink to="/">
                        <b>CODEMIND</b>
                    </NavLink></li>
                    <li> <NavLink to="/Contactus">
                        <b>Contactus</b>
                    </NavLink></li>
                    <li> <NavLink to="/Services">
                        <b>Services</b>
                    </NavLink></li>
                </ul> */}
<nav class="navbar navbar-expand-lg bg-body-tertiary">
          <div class="container-fluid">
            <a class="navbar-brand" href="/">
              <b>CODEMIND TECHNOLOGY</b>
            </a>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="/contactus">
                   Contact US
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/services">
                    Services
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/React">
                    React
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
                <Routes>
                    <Route exact path="/" element={<Home/>}></Route>
                    <Route exact path="/Contactus" element={<Contactus/>}></Route>
                    <Route exact path="/Services" element={<Services />}></Route>
                    
                </Routes> 
            </Router>
        </>
    )
}
export default Website