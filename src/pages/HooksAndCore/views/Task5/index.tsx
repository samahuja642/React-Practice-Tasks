import useLocalStorage from "../../../../hooks/useLocalStorage"

export default function Task5(){
    const [value,setValue] = useLocalStorage('inputValue',{
        label:'Label',
        value:''
    });
    return (
        <div>
            <label>{value.label}</label>
            <input type="text" 
                value={value.value} 
                onChange={
                    (e)=>setValue(prev=>{
                        return {
                            ...prev,
                            value: e.target.value,
                        };
                    })
                }/>
            <input type="text" value={value.label} onChange={
                (e)=>setValue(prev=>{
                    return {
                        ...prev,
                        label: e.target.value,
                    }
                })
            }/>
        </div>
    );
}