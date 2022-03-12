import './App.css';
import DrumPower from './components/DrumPower'
import DrumSound from './components/DrumSound'
import VolumeSlider from './components/VolumeSlider'
import { useSelector } from 'react-redux'

const App = () => {
  const displayClip = useSelector((state) => state.display)
  return (
    <div className="App" id='drum-machine'>
      <header className="App-header">
        <p>Welcome to the wonderful world of red drum.</p>
        <p className="App-logo" id='display'>{displayClip}</p>
      </header>
      <DrumPower />
      <DrumSound />
      <VolumeSlider />
    </div>
    
  );
}

export default App;
