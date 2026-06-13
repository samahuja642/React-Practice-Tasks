import { styled } from "@mui/material/styles";
import { Chip as MUIChip } from "@mui/material";

export const StyledChip = styled(MUIChip)(({ theme }) => ({
    fontWeight: 500,
    fontSize: "0.75rem",
    borderRadius: theme.shape.borderRadius,
    transition: theme.transitions.create(["background-color", "color", "border-color"]),
}));
