import { useState } from "react";

export default function useLogic(){
    const [count,setCount] = useState(0);
    const [stepValue,setStepValue] = useState(1);
    const clickActionHandler = (e:React.MouseEvent<HTMLDivElement>) =>{
        const button = (e.target as HTMLDivElement).closest("button");
        if(!button)return;
        const action = button.dataset.action;
        switch (action) {
            case "decrement":
                setCount(prev=>prev-stepValue);
            break;
            case "increment":
                setCount(prev=>prev+stepValue);
            break;
            case "reset":
                setCount(0);
            break;
        }

    }
    const stepValueChangeHandler:(value: number | null, event: React.ChangeEvent<HTMLInputElement, Element>) => void = (value) =>{
        if(value)setStepValue(value);
    }
    return {
        count,
        stepValue,
        clickActionHandler,
        stepValueChangeHandler
    };
}