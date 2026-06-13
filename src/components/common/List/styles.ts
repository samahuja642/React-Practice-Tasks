import { styled } from "@mui/material/styles";
import { List as MUIList, ListItem as MUIListItem, ListItemText as MUIListItemText } from "@mui/material";

export const StyledList = styled(MUIList)(({ theme }) => ({
    padding: theme.spacing(1, 0),
}));

export const StyledListItem = styled(MUIListItem)(({ theme }) => ({
    borderRadius: theme.shape.borderRadius,
    marginBottom: theme.spacing(1),
    border: `1px solid ${theme.palette.divider}`,
    "&:last-child": {
        marginBottom: 0,
    },
}));

export const StyledListItemText = styled(MUIListItemText)(() => ({
    "& .MuiListItemText-primary": {
        fontSize: "0.875rem",
    },
}));
