import {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import RobotLights from './components/Layout/RobotLights';
import NamePicker from './components/Routes/NamePicker';
import AddRemoveNames from './components/Routes/AddRemoveNames';

function App() {
  const [namePickView, setNamePickView] = useState(true)
  const [allOfUs, setAllOfUs] = useState([
    "Edison",
    "Chris",
    "Naomi",
    "Braxton",
    "Jonny",
    "Kelsi",
    "Dustin",
    "Alejandro",
    "Claudio",
    "Elayna",
    "Maddy",
    "Roberto"
  ]);

  const getColor = (isName) => {
    if(isName && namePickView) {
      return "white"
    } else if(!isName && !namePickView) {
      return "white"
    } else {
      return "grey"
    }
  }


  return (
    <div className="App" style={{backgroundColor: "#282c34"}}>
      <div style={{width: '100vw', height: '50px', display: "flex",flexDirection: "row",flexWrap: "nowrap", justifyContent: "center", alignItems: "stretch",alignContent: "stretch"}}>
        <div 
          style={{width: '49vw', fontSize: '25px', backgroundColor: getColor(true)}}
          onClick={() => setNamePickView(true)}
        >
          Name Picker
        </div>
        <div 
          style={{width: '49vw', fontSize: '25px', backgroundColor: getColor(false)}}
          onClick={() => setNamePickView(false)}
        >
          Add/Remove Names
        </div>
      </div>
      {namePickView ? 
        <NamePicker /> :
        <AddRemoveNames />
      }
    </div>
  );
}

export default App;
