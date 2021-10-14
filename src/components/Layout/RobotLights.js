import React, {useEffect, useState} from 'react';

 
const RobotLights = (props) => {
    const [colorArr, setColorArr] = useState(["", "", "", ""]);
    const [intervalId, setIntervalId] = useState(0);
    window.timeInterval = 0;

    useEffect(() => {
        if(props.start) {
            console.log("starting!!!")
            intervalSetter();
            
        } else {
            stopInterval()
        }

    }, [props.start])

    const intervalSetter = () => {
        setIntervalId(setInterval(() => {
            const newColorArr = colorArr.map(() => Math.floor(Math.random()*2) ? "red" : "green");
            setColorArr(newColorArr);
        }, 200))
    }

    function stopInterval() {
        console.log("TURN IT OFF")
        setColorArr(["", "", "", ""])
        clearInterval(intervalId);
    }

    const lightStyles = {
        border: '2px black solid',
        borderRadius: "25px",
        height: '10vw',
        width: '15%',

    }

    const figureOutColor = index => {
        if(colorArr[index]) {
            return colorArr[index]
        } else {
            return ''
        }
    }

    return (
        <div style={{
            width: '100vw',
            display: "flex",flexDirection: "row",flexWrap: "nowrap", justifyContent: "space-around", alignItems: "stretch",alignContent: "stretch"
        }}>
            <div style={{...lightStyles, backgroundColor: figureOutColor(0)}} />
            <div style={{...lightStyles, backgroundColor: figureOutColor(1)}} />
            <div style={{...lightStyles, backgroundColor: figureOutColor(2)}} />
            <div style={{...lightStyles, backgroundColor: figureOutColor(3)}} />
        </div>
    )
}
export default RobotLights