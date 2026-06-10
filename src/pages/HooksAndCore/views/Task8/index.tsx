import { useState } from "react";
import Box from "../../../../components/common/Box/Box";
import useFetch from "../../../../hooks/useFetch";
import type { ProductsResponse } from "./types";
import useDebounce from "../../../../hooks/useDebounce";


export default function Task8(){
    const [searchValue,setSearchValue] = useState('');
    const debouncedSearchValue = useDebounce(searchValue,2000);
    const { data,error,loading } = useFetch<ProductsResponse>(`https://dummyjson.com/products/search?q=${debouncedSearchValue}`);
    return (
        <Box>
            <h1>Data of Task8</h1>
            <input type="text" value={searchValue} onChange={(e)=>setSearchValue(e.target.value)}/>
            {error && <p>Something went wrong.</p>}
            {loading && <p>Loading...</p>}
            {!loading && !error && <div>
                {data?.products?.map(item=>{
                    return <div key={item.id}>{item.brand}-{item.category}-{item.title}</div>
                })}
            </div>}
        </Box>
    )
}