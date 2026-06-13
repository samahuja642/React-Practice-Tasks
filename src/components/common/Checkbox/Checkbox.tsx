import type { CheckboxProps } from "./types";
import { StyledCheckbox } from "./styles";

export default function Checkbox(props: CheckboxProps) {
    return <StyledCheckbox {...props} />;
}
