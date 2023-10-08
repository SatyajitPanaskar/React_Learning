import {
    BrowserRouter as Router,
    Routes,
    Route,
    NavLink,
  } from "react-router-dom";
  

  
  const Navbar = () => {
    return (
      <>
         
      <Router>
        <nav class="navbar navbar-expand-lg navigationBar">
          <div class="container-fluid">
            <img src={logo}  alt="Logo" height={50}  width={70} className="image"/>
            <NavLink className="navbar-brand" to="/">  CODEMIND_TECHNOLOGY </NavLink>
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="navbar-brand"> <NavLink  className="nav-link " to="/Home">  HTML </NavLink> </li>
              <li class="navbar-brand"> <NavLink  className="nav-link " to="/Contactus"> CSS </NavLink></li>
              <li class="navbar-brand"> <NavLink  className="nav-link"  to="/Services"> JAVASCRIPT </NavLink></li>
              <li class="navbar-brand"> <NavLink  className="nav-link"  to="/Login"> REACT JS </NavLink></li>
            </ul>
          </div>
        </nav>
        <Routes>
              <Route exact path="/Home" element={<Home/>}></Route>
              <Route exact path="/HTML" element={<HTML />}></Route>
              <Route exact path="/CSSLang" element={<CSSLang />}></Route>
              <Route exact path="/JavaScript" element={<JavaScript />}></Route>
              <Route exact path="/React" element={<React />}></Route>
              <Route exact path="/React/Introduction" element={<React_Intro />}></Route>
            </Routes>
      </Router>
    </>
      
    )
  }
  
  export default Navbar
  