import { useEffect, useState } from "react";
import debounce from 'lodash/debounce';

export default function useWindowSize(debounceTiming:number = 150){
    const [size,setSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });
    useEffect(()=>{
        const handleResize = debounce(()=>{
            setSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        },debounceTiming);
        window.addEventListener('resize',handleResize);
        return ()=>{
            window.removeEventListener('resize',handleResize);
            handleResize.cancel();
        }
    },[]);
    return {
        width: size.width,
        height: size.height,
    }
}