import { styled } from "@mui/material/styles";
import { Checkbox } from "@mui/material";

export const StyledCheckbox = styled(Checkbox)(({ theme }) => ({
    padding: theme.spacing(1),
    borderRadius: theme.shape.borderRadius,
    transition: theme.transitions.create(["background-color", "box-shadow"]),
    "&:hover": {
        backgroundColor: theme.palette.action.hover,
    },
    "&.Mui-checked": {
        color: theme.palette.primary.main,
    },
    "&.Mui-disabled": {
        color: theme.palette.action.disabled,
    },
}));
