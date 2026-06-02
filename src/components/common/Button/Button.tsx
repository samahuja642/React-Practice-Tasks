import type { ButtonProps } from "./types";
import { StyledButton } from "./styles";
export default function Button(props:ButtonProps){
    return <StyledButton {...props}/>
}