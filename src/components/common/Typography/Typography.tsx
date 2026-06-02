import type { TypographyProps } from "./types";
import { StyledTypography } from "./styles";

export default function Typography(props: TypographyProps) {
  return <StyledTypography {...props} />;
}
