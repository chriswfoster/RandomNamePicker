import React, {useState} from 'react';
import { Input, Button } from 'antd';
import { useFullPath } from 'rc-menu/lib/context/PathContext';
import NameList from '../Layout/NameList';
import AddRemoveList from '../Layout/AddRemoveList';

 
const AddRemoveNames = (props) => {
    const [inputText, setInputText] = useState("");

    const removeAssct = (name) => {
        const getIndex = props.allOfUs.indexOf(name);
        console.log('the index: ', getIndex)
        let tempArr = props.allOfUs;
        tempArr.splice(getIndex, 1);
        props.setAllOfUs([...tempArr]);
    }

    return (
        <div className="fullview">
            <div style={{marginTop: '30px', marginBottom: "30px"}}>
                <Input 
                    style={{width: '150px'}}
                    value={inputText}
                    onChange={e => setInputText(e.target.value)}
                    placeholder="Type Name"
                />
                <Button onClick={() => {
                    let newArr = [...props.allOfUs, inputText];
                    props.setAllOfUs(newArr);
                    setInputText("");
                }}>
                    Add
                </Button>
            </div>
            <AddRemoveList removeAssct={removeAssct} list={props.allOfUs} />
        </div>
    )
}
export default AddRemoveNames