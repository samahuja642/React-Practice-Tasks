import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";

export const StyledButton = styled(Button)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,
  padding: "8px 20px",
  fontSize: "0.875rem",
  fontWeight: 600,
  textTransform: "none",
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  boxShadow: "none",
  transition: theme.transitions.create(
    ["background-color", "box-shadow", "border-color"],
    { duration: theme.transitions.duration.short }
  ),
  "&:hover": {
    backgroundColor: theme.palette.primary.dark,
    boxShadow: theme.shadows[2],
  },
  "&:active": {
    backgroundColor: theme.palette.primary.dark,
    boxShadow: theme.shadows[1],
  },
  "&.Mui-disabled": {
    backgroundColor: theme.palette.grey[300],
    color: theme.palette.grey[500],
    cursor: "not-allowed",
    pointerEvents: "auto",
  },
}));