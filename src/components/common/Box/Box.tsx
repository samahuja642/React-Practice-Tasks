import type { BoxProps } from "./types";
import { StyledBox } from "./styles";

export default function Box(props: BoxProps) {
  return <StyledBox {...props} />;
}
