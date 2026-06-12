import { useSnackbar } from "notistack";
import { useCallback, useMemo, useState, type SetStateAction } from "react";
import * as z from "zod";

const FORM_FIELDS = {
    NAME: 'name',
    EMAIL: 'email',
    PASSWORD: 'password',
} as const;

type FormFieldKey = (typeof FORM_FIELDS)[keyof typeof FORM_FIELDS];

const formInitialValues: Record<FormFieldKey, string> = {
    [FORM_FIELDS.NAME] : "",
    [FORM_FIELDS.EMAIL]: "",
    [FORM_FIELDS.PASSWORD]: "",
}

const formErrorsInitialValue: Record<FormFieldKey, string[] | undefined> = {
    [FORM_FIELDS.NAME] : undefined,
    [FORM_FIELDS.EMAIL]: undefined,
    [FORM_FIELDS.PASSWORD]: undefined,
}

const touchedInitialValue: Record<FormFieldKey, boolean> = {
    [FORM_FIELDS.NAME] : false,
    [FORM_FIELDS.EMAIL]: false,
    [FORM_FIELDS.PASSWORD]: false,
}

const formValidationSchema = z.object({
    [FORM_FIELDS.NAME] : z.string().nonempty(),
    [FORM_FIELDS.EMAIL]: z.email(),
    [FORM_FIELDS.PASSWORD]: z.string()
        .min(8, "Password must be at least 8 characters")
        .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
        .regex(/[a-z]/, "Password must contain at least one lowercase letter")
        .regex(/[0-9]/, "Password must contain at least one number")
        .regex(/[^A-Za-z0-9]/, "Password must contain at least one special character"),
});

export default function useLogic(){
    const [formValues,setFormValues] = useState(formInitialValues);
    const [formErrors,setFormErrors] = useState(formErrorsInitialValue);
    const [touched,setTouched] = useState(touchedInitialValue);
    const { enqueueSnackbar } = useSnackbar();

    const handleChangeFormValue = useCallback((
        field: FormFieldKey,
        value: SetStateAction<string>,
    )=>{
        setFormValues(prev=>({
            ...prev,
            [field]: typeof value === "function" ? value(prev[field]) : value,
        }))
    },[])
    const handleFormSubmission = useCallback(() => {
        setTouched({ [FORM_FIELDS.NAME]: true, [FORM_FIELDS.EMAIL]: true, [FORM_FIELDS.PASSWORD]: true });
        const result = formValidationSchema.safeParse(formValues);
        if(!result.success){
            const newErrors = { ...formErrorsInitialValue };
            result.error.issues.forEach(err=>{
                const field = err.path[0] as FormFieldKey;
                if(!newErrors[field]) newErrors[field] = [];
                newErrors[field].push(err.message);
            });
            setFormErrors(newErrors);
        }
        else{
            setFormErrors(formErrorsInitialValue);
            setTouched(touchedInitialValue);
            setFormValues(formInitialValues);
            enqueueSnackbar('Form Submitted Successfully', { variant:'success' });
        }
    },[enqueueSnackbar, formValues])
    const handleFieldBlur = useCallback((
        field: FormFieldKey
    ) => {
        setTouched(prev=>({ ...prev, [field]: true }));
        const schema = formValidationSchema.shape[field as keyof typeof formValidationSchema.shape];
        const result = schema.safeParse(formValues[field]);
        if(!result.success){
            setFormErrors(prev=>({
                ...prev,
                [field]: result.error.issues.map(issue => issue.message),
            }))
        } else {
            setFormErrors(prev=>({
                ...prev,
                [field]: undefined,
            }))
        }
    },[formValues])

    const isFieldRequired = useCallback((field: FormFieldKey) => {
        const schema = formValidationSchema.shape[field as keyof typeof formValidationSchema.shape];
        return !schema._zod.optin?.includes("optional");
    },[])

    const isFormValid = useMemo(() => formValidationSchema.safeParse(formValues).success, [formValues]);
    return {
        formValues,
        formErrors,
        touched,
        isFormValid,
        handleChangeFormValue,
        handleFormSubmission,
        handleFieldBlur,
        isFieldRequired,
        FORM_FIELDS,
    };
}