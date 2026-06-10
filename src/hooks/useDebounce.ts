import { useEffect, useRef, useState } from "react";

export default function useDebounce<T>(value:T,delay:number=400){
    const [debouncedValue,setDebouncedValue] = useState(value);
    const lastRef = useRef<number|null>(null);
    useEffect(()=>{
        if(lastRef.current)clearTimeout(lastRef.current);
        lastRef.current = setTimeout(()=>setDebouncedValue(value),delay);
        return ()=>{
            if(lastRef.current)clearTimeout(lastRef.current);
        }
    },[value,delay]);
    return debouncedValue;
}