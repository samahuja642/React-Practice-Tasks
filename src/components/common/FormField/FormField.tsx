import { FormControl, FormHelperText, FormLabel } from "@mui/material";
import type { FormFieldProps } from "./FormField.types";

export default function FormField({ label, errors, touched, required, children }: FormFieldProps) {
    const showErrors = touched && errors && errors.length > 0;
    return (
        <FormControl error={!!showErrors} required={required} fullWidth>
            {label && <FormLabel>{label}</FormLabel>}
            {children}
            {showErrors && errors.map((msg, i) => (
                <FormHelperText key={i}>{msg}</FormHelperText>
            ))}
        </FormControl>
    );
}
