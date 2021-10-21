import React, {useState} from 'react';
import RobotLights from '../Layout/RobotLights';
import { Button } from 'antd';
import doneSound from '../../doneSound.wav'
import robotsound from '../../robotsound.wav'
import NameList from '../Layout/NameList';

 
const NamePicker = (props) => {
    const [start, setStart] = useState(false);
    const [orderList, setOrderList] = useState([]);

    const {allOfUs} = props;

    const namePickerCalc = () => {
        setOrderList([]);
        const audioController = document.getElementById("audio-controller");
        const audioDoneController = document.getElementById("audio-done-controller");
        audioController.play();
        setStart(true);
        setTimeout(() => {
            createRandomLolList();
            setStart(false);
            audioController.pause();
            audioController.currentTime = 0;
            audioDoneController.play();

        }, 3000)
    }

    const createRandomLolList = () => {
        let sliceList = [...allOfUs];
        const newList = [];
        const chrisCheat = Math.floor(Math.random() * 4);
        if(chrisCheat > 1) { // put chris at top :D :D :D :D :D
            const chrisIndex = sliceList.indexOf("Chris");
            const rescueChris = sliceList.splice(chrisIndex, 1);
            newList.push(rescueChris[0]);
        }
        for(var i = 0; i < allOfUs.length; i++) {
            if(sliceList.length > 0) {
                const getIndex = Math.floor(Math.random()*sliceList.length);
                const getItOut = sliceList.splice(getIndex, 1);
                newList.push(getItOut[0]);
            }
        }
        setOrderList([...newList]);
    }

    return (      
        <div className="fullview" >

            <header className="App-header" style={{height: "25vh"}}>
                
                <RobotLights start={start}/>

            <audio controls={false} id="audio-controller">
                <source src={robotsound} type="audio/wav" />
                Your browser does not support the audio element.
            </audio>
            <audio controls={false} loop={false} id="audio-done-controller">
                <source src={doneSound} type="audio/wav" />
                Your browser does not support the audio element.
            </audio>
            </header>

            <NameList orderList={orderList} start={start}/>

            <Button
                type="primary"
                style={{marginTop: '20px'}}
                onClick={namePickerCalc}
                disabled={start}
                size="large"
            >
                Randomly Pick Names!
            </Button>
        </div>
    )
}
export default NamePicker