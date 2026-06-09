import { useState, type SetStateAction } from "react";

export default function useLocalStorage<T>(key:string,defaultValue:T){
    const [value,setValue] = useState<T>(()=>{
        const persistedValue = typeof window !== "undefined" ? localStorage.getItem(key)??null : null;
        try{
            if(persistedValue){
                return JSON.parse(persistedValue);
            }
            return defaultValue;
        }catch(err){
            return defaultValue;
        }
    });
    const updateValue = (newValue:SetStateAction<T>) => {
        setValue(prev => {
            const valueToStore = typeof newValue==="function"?(newValue as (prev:T) => T)(prev):newValue;
            if(typeof window!=="undefined")localStorage.setItem(key,JSON.stringify(valueToStore));
            return valueToStore;
        })
    };
    return [
        value,
        updateValue
    ] as const;
}