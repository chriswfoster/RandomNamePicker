import React from 'react';

 
const NameList = (props) => {


    return (
        props.orderList.length > 0 ? 
        <div style={{width: '100vw', height: 'auto', textAlign: 'center',
            display: "flex",
            flexDirection: "column",
            flexWrap: "nowrap",
            justifyContent: "space-around",
            alignItems: "stretch",
            alignContent: "stretch",
            backgroundColor: "#f8f8ff"
        }}>
            {props.orderList.map((assct, i) => {
                return (
                <span key={assct+i}>{i+1} {assct}</span>
                )
            })}
        </div> :
        props.start ? 
            <span style={{fontSize: '30px', color: "white", width: "100vw", display: 'block'}}>COMPUTING...</span> :
            null
    )
}
export default NameList