import { useEffect, useState } from "react";

export default function useLogic(){
    const [value,setValue] = useState('');
    const inputValueChangeHandler = (e:React.ChangeEvent<HTMLInputElement, HTMLInputElement>) =>{
        setValue(e.target.value);
    }
    useEffect(()=>{
        document.title = value;
    },[value]);
    return {
        value,
        inputValueChangeHandler,
    }
}