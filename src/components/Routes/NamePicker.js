import React, {useState} from 'react';
import RobotLights from '../Layout/RobotLights';
import { Button } from 'antd';

 
const NamePicker = () => {
    const [start, setStart] = useState(false);


    const namePickerCalc = () => {
        setStart(true);
        setTimeout(() => {
            setStart(false);
        }, 3000)
    }

    return (      
        <div className="fullview" >


            <header className="App-header" style={{height: "25vh"}}>
                This is the NamePicker component.
                <RobotLights start={start}/>
            </header>


            <Button
                type="primary"
                onClick={namePickerCalc}
                disabled={start}
            >
                Randomly Pick Names!
            </Button>
        </div>
    )
}
export default NamePicker