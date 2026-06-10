import { useState } from "react";
import usePrevious from "../../../../hooks/usePrevious";

export default function useLogic(){
    const [value,setValue] = useState(0);
    const inputValueChangeHandler = (e:React.ChangeEvent<HTMLInputElement, HTMLInputElement>) =>{
        const newVal = e.target.value;
        setValue(Number(newVal));
    }
    const previousValue = usePrevious(value);
    return {
        value,
        inputValueChangeHandler,
        previousValue
    }
}