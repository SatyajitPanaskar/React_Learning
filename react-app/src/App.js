import logo from './logo.svg';
import './App.css'; 
import Header from './component/Header';
import MainContent from './component/MainContent';
import HelloComponent from './component/Session6-ComponentInDetails/ClassComp';
import FunctionalComp from './component/Session6-ComponentInDetails/FunctionalComp';
import JSXComponent from './component/Day7/JSX';
import Frament from './component/Day7/Frament';

function App() {
  return (
    <div className="App">
      <h1>Welcome To React </h1>
      {/* <Header />
      <MainContent/>*/}
       {/* <HelloComponent/> */}
      {/* <FunctionalComp/> */}
      <JSXComponent /> 
      {/* <Frament/> */}
    </div>
  );
}

export default App;
