import type { ButtonProps as MUIButtonProps } from "@mui/material";
export interface ButtonProps extends MUIButtonProps{
    "data-action"?: string;
}