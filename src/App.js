import {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import RobotLights from './components/Layout/RobotLights';
import NamePicker from './components/Routes/NamePicker';
import AddRemoveNames from './components/Routes/AddRemoveNames';

function App() {
  const [namePickView, setNamePickView] = useState(true)
  return (
    <div className="App" style={{backgroundColor: "#282c34"}}>
      {namePickView ? 
        <NamePicker /> :
        <AddRemoveNames />
      }
    </div>
  );
}

export default App;
