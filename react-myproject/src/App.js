import logo from './logo.svg';
import './App.css';
import './MyProjectCSSFile/1.NavbarFirst1CSS/1.NavbarCSS.css'
import './MyProjectCSSFile/2.MainContentCSS/MainPageCSS.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './MyProject/1.NavBarFirst1/1.Navbar';
import Navbar2 from './MyProject/1.NavbarSecond2/2.Navbar';
import MainPage from './MyProject/2.MainContent/MainPage';



function App() {
  return (
    <div className="App">
      <Navbar />
      <Navbar2 />
      <MainPage/>
    </div>
  );
}

export default App;
