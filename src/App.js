import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Slider from './Components/Slider';
import Explore from './Components/Explore';
import SmallSlider from './Components/SmallSlider';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <Slider />
      <SmallSlider/>
      <Explore/>
    </div>
  );
}

export default App;
