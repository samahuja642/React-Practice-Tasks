import { styled } from "@mui/material/styles";
import { Input } from "@mui/material";

export const StyledInput = styled(Input)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,
  padding: "8px 12px",
  fontSize: "0.875rem",
  transition: theme.transitions.create(["border-color", "box-shadow"]),
  "&.MuiInput-underline:before": {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  "&.MuiInput-underline:hover:not(.Mui-disabled):before": {
    borderBottom: `2px solid ${theme.palette.primary.main}`,
  },
  "&.MuiInput-underline:after": {
    borderBottom: `2px solid ${theme.palette.primary.main}`,
  },
  "&.Mui-focused": {
    boxShadow: `0 0 0 2px ${theme.palette.primary.light}`,
  },
  "&.Mui-error:after": {
    borderBottom: `2px solid ${theme.palette.error.main}`,
  },
}));
