import { styled } from "@mui/material/styles";
import { StyledInput } from "../Input/styles";

export const StyledNumberField = styled(StyledInput)(() => ({
  "& input[type=number]": {
    MozAppearance: "textfield",
  },
  "& input[type=number]::-webkit-outer-spin-button, & input[type=number]::-webkit-inner-spin-button":
    {
      WebkitAppearance: "none",
      margin: 0,
    },
}));
