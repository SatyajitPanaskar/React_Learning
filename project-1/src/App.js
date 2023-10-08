  
import './App.css';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className='App'>
      {/* Components */}
      <Navbar />
      <Home/>
    </div>
  );
}

export default App;
