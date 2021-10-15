import React, {useState} from 'react';
import { Button, Popconfirm } from 'antd';

 
const AddRemoveList = (props) => {
    const [showPopConfirm, setShowPopConfirm] = useState(false);



    const flexStyles = {
        display: "flex",
        flexDirection: "column",
        flexWrap: "nowrap",
        justifyContent: "center",
        alignItems: "stretch",
        alignContent: "stretch",
    }
    return (
        props.list.length > 0 ? 
        <div style={{width: '300px', height: 'auto', textAlign: 'center', backgroundColor: "#f8f8ff", ...flexStyles
        }}>
            {props.list.map((assct, i) => {
                return (
                    <div key={assct+i} style={{...flexStyles, justifyContent: "space-around", flexDirection: 'row', marginBottom: '8px', marginTop: '8px'}}>
                        <span style={{width: '80px'}} key={assct+i}>{assct}</span>
                        <Popconfirm
                          title={`Delete ${assct}?`}
                          onConfirm={() => props.removeAssct(assct)}
                        //   onCancel={cancel}
                          okText="Yes"
                          cancelText="No"
                        >
                            <Button 
                                style={{width: '80px'}} 
                                type="danger"
                            >
                                DELETE
                            </Button>
                        </Popconfirm>

                    </div>
                )
            })}
        </div> :
        props.start ? 
            <span style={{fontSize: '30px', color: "white", width: "100vw", display: 'block'}}>COMPUTING...</span> :
            null
    )
}
export default AddRemoveList