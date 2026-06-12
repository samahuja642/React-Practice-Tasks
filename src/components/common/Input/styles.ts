import { styled } from "@mui/material/styles";
import { OutlinedInput } from "@mui/material";

export const StyledInput = styled(OutlinedInput)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,
  fontSize: "0.875rem",
  transition: theme.transitions.create(["border-color", "box-shadow"]),
  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: theme.palette.primary.main,
    boxShadow: `0 0 0 2px ${theme.palette.primary.light}`,
  },
  "&.Mui-error .MuiOutlinedInput-notchedOutline": {
    borderColor: theme.palette.error.main,
  },
}));
