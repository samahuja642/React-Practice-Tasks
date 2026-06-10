import Box from "../../../../components/common/Box/Box";
import useFetch from "../../../../hooks/useFetch";
import type { ProductsResponse } from "./types";


export default function Task7(){
    const { data,error,loading } = useFetch<ProductsResponse>('https://dummyjson.com/products');
    return (
        <Box>
            <h1>Data of Task7</h1>
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