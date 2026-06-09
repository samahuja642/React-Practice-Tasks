import { useRef, useState } from "react";

export default function useLogic(){
    const [showVal,setShowVal] = useState<boolean>(false);
    const [value,setValue] = useState('');
    const inputValueChangeHandler = (e:React.ChangeEvent<HTMLInputElement, HTMLInputElement>) =>{
        setValue(e.target.value);
    }
    const toggleShowValue = () => {
        setShowVal(prev=>!prev);
    }
    return {
        showVal,
        value,
        inputValueChangeHandler,
        toggleShowValue,
    }
}