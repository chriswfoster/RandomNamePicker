import React from 'react';

 
const NameList = (props) => {


    return (
        props.orderList.length > 0 ? 
        <div style={{width: '80vw', height: 'auto', textAlign: 'center',
            marginLeft: "10vw",
            marginTop: '5vh',
            display: "flex",
            flexDirection: "column",
            flexWrap: "nowrap",
            justifyContent: "space-around",
            alignItems: "flex-start",
            alignContent: "stretch",
            // backgroundColor: "#f8f8ff"
        }}>
            {props.orderList.map((assct, i) => {
                return (
                <span style={{color: '#39FF14', fontSize: '1vw'}} key={assct+i}>{i+1} {assct}</span>
                )
            })}
        </div> :
        props.start ? 
            <span style={{marginTop: '5vh', fontSize: '30px', color: "#39FF14", width: "100vw", display: 'block'}}>COMPUTING...</span> :
            null
    )
}
export default NameList