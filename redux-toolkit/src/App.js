import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./reduxCRUD/Component/1.Home";
import Userlisting from "./reduxCRUD/Component/2.Userlisting";
import Adduser from "./reduxCRUD/Component/3.Adduser";
//import ProductContainer from "./component/ProductContainer";
//import { Provider } from "react-redux";
//import store from "./Redux/Product/store";
import Updateuser from "./reduxCRUD/Component/4.Updateuser";
import { ToastContainer } from "react-toastify";
function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <div className="header">
            <Link to={"/"}>Home</Link>
            <Link to={"/user"}>User</Link>
          </div>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/user" element={<Userlisting />}></Route>
            <Route path="/user/add" element={<Adduser />}></Route>
            <Route path="/user/edit/:code" element={<Updateuser />}></Route>
          </Routes>
        </BrowserRouter>
        <ToastContainer></ToastContainer>
      </div>
    </>
  );
}

export default App;
