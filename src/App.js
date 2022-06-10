import logo from './logo.svg';
import './App.css';
import Timer from './components/timer/timer';
import TimeInput from './components/input/input';
import { useState } from 'react';

function App() {
  const [startTime, setStartTime] = useState(0);
  return (
    <div className="App">
      <TimeInput setStartTime={setStartTime}></TimeInput>
      <Timer startTime={startTime} setStartTime={setStartTime}></Timer>
    </div>
  );
}

export default App;
