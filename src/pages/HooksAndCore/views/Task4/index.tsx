import Box from "../../../../components/common/Box/Box";
import useLogic from "./logic";

export default function Task4(){
    const {
        value,
        inputValueChangeHandler,
        previousValue
    } = useLogic();
    return (
        <Box>
            <span>Previous value: {previousValue}</span>
            <input type='number' value={value} onChange={inputValueChangeHandler} />
        </Box>
    )
}