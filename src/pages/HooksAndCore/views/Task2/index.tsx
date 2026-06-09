import Box from "../../../../components/common/Box/Box";
import Button from "../../../../components/common/Button/Button";
import useLogic from "./logic";

export default function Task2(){
    const {
        value,
        showVal,
        inputValueChangeHandler,
        toggleShowValue,
    } = useLogic();
    return (
        <Box>
            <input type={showVal?'text':'password'} value={value} onChange={inputValueChangeHandler} />
            <Button onClick={toggleShowValue}>{showVal?'Hide Value':'Show Value'}</Button>
        </Box>
    )
}