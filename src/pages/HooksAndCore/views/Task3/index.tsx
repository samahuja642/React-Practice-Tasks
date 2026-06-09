import Box from "../../../../components/common/Box/Box";
import useLogic from "./logic";

export default function Task3(){
    const {
        value,
        inputValueChangeHandler,
    } = useLogic();
    return (
        <Box>
            <input type='text' value={value} onChange={inputValueChangeHandler} />
        </Box>
    )
}