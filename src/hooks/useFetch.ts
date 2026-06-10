import { useEffect, useState } from "react";

export default function useFetch<T>(url:string){
    const [data,setData] = useState<T>();
    const [error,setError] = useState<Error>();
    const [loading,setLoading] = useState(true);
    useEffect(()=>{
        const controller = new AbortController();
        const { signal } = controller;
        async function apiCall(){
            try{
                setLoading(true);
                const res = await fetch(url,{signal});
                if(res.ok){
                    const resData:T = await res.json();
                    setData(resData);
                }
            }
            catch(err:any){
                if (err?.name === 'AbortError') return; 
                setError(err);
            }
            finally{
                if(!signal.aborted)setLoading(false);
            }
        }
        apiCall();
        return ()=>{
            controller.abort();
        }
    },[url]);
    return {
        data,
        error,
        loading,
    } 
}