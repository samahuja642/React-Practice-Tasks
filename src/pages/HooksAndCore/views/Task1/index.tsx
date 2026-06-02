import Box from "../../../../components/common/Box/Box";
import Typography from "../../../../components/common/Typography/Typography";
import Button from "../../../../components/common/Button/Button";
import NumberField from "../../../../components/common/NumberField/NumberField";
import * as styles from "./styles";
import useLogic from "./logic";

export default function Task1(){
    const {count, stepValue, stepValueChangeHandler, clickActionHandler} = useLogic();
    return <Box sx={[styles.container]}>
        <Box sx={[styles.countDisplay]}>
            <Typography variant="body1">Count Value :</Typography>
            <Typography variant="h6" sx={[styles.countValue]}>{count}</Typography>
        </Box>
        <NumberField placeholder="Step Value" step={1} value={stepValue} min={1} onChange={stepValueChangeHandler}/>
        <Box sx={[styles.buttonGroup]} onClick={clickActionHandler}>
            <Button data-action="decrement">Decrement</Button>
            <Button data-action="increment">Increment</Button>
            <Button data-action="reset">Reset</Button>
        </Box>
    </Box>
}