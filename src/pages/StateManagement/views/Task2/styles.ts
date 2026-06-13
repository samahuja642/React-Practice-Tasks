import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

export const FormContainer = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(3),
    maxWidth: 450,
    padding: theme.spacing(4),
    borderRadius: Number(theme.shape.borderRadius) * 2,
    border: `1px solid ${theme.palette.divider}`,
}));
