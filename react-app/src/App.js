import logo from './logo.svg';
import './App.css'; 
import Header from './component/Header';
import MainContent from './component/MainContent';
import HelloComponent from './component/Session6-ComponentInDetails/ClassComp';
import FunctionalComp from './component/Session6-ComponentInDetails/FunctionalComp';
import JSXComponent from './component/Day7/JSX';
import Frament from './component/Day7/Frament';
import Website from './component/Day8-routing/Website';
import 'bootstrap/dist/css/bootstrap.min.css';
import ConditionalRendering from './component/Day10-State/ConditionalRendering';
import CardAssignment from './Assignment/CardAssignment';
import Parent from './ComponentsCallBack/Parent';




function App() {
  return (
    <div className="App">
      {/* <h1>Welcome To React </h1> */}
      {/* <Header />
      <MainContent/>*/}
       {/* <HelloComponent/> */}
      {/* <FunctionalComp/> */}
      {/* <JSXComponent />  */}
      {/* <Frament/> */}
      {/* <Website /> */}
      {/* <ConditionalRendering/> */}
      {/* <CardAssignment/> */}
      <Parent/>
    </div>
  );
}

export default App;
