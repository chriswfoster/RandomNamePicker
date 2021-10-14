import React, {useState} from 'react';
import { Input } from 'antd';

 
const AddRemoveNames = () => {
    const [inputText, setInputText] = useState("");
    return (
        <div>
            <Input 
                value={inputText}
                onChange={e => setInputText(e.target.value)}
            />
        </div>
    )
}
export default AddRemoveNames