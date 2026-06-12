import type { ReactNode } from "react";

export interface FormFieldProps {
    label?: string;
    errors?: string[];
    touched?: boolean;
    required?: boolean;
    children: ReactNode;
}
