import type { InputProps } from "./types";
import { StyledInput } from "./styles";

export default function Input(props: InputProps) {
  return <StyledInput {...props} />;
}