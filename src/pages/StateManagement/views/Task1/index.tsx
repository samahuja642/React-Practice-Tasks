import Button from "../../../../components/common/Button/Button";
import Input from "../../../../components/common/Input/Input";
import FormField from "../../../../components/common/FormField/FormField";
import useLogic from "./logic";
import { FormContainer } from "./styles";

export default function Task1(){
    const { formValues, formErrors, touched, isFormValid, handleFieldBlur, handleChangeFormValue, handleFormSubmission, isFieldRequired, FORM_FIELDS } = useLogic();
    return <FormContainer>
        <FormField label="Name" required={isFieldRequired(FORM_FIELDS.NAME)} errors={formErrors[FORM_FIELDS.NAME]} touched={touched[FORM_FIELDS.NAME]}>
            <Input type="text" placeholder="Enter your name" value={formValues[FORM_FIELDS.NAME]} onChange={e=>handleChangeFormValue(FORM_FIELDS.NAME,e.target.value)} onBlur={()=>handleFieldBlur(FORM_FIELDS.NAME)}/>
        </FormField>
        <FormField label="Email" required={isFieldRequired(FORM_FIELDS.EMAIL)} errors={formErrors[FORM_FIELDS.EMAIL]} touched={touched[FORM_FIELDS.EMAIL]}>
            <Input type="email" placeholder="Enter your email" value={formValues[FORM_FIELDS.EMAIL]} onChange={e=>handleChangeFormValue(FORM_FIELDS.EMAIL,e.target.value)} onBlur={()=>handleFieldBlur(FORM_FIELDS.EMAIL)} />
        </FormField>
        <FormField label="Password" required={isFieldRequired(FORM_FIELDS.PASSWORD)} errors={formErrors[FORM_FIELDS.PASSWORD]} touched={touched[FORM_FIELDS.PASSWORD]}>
            <Input type="password" placeholder="Enter your password" value={formValues[FORM_FIELDS.PASSWORD]} onChange={e=>handleChangeFormValue(FORM_FIELDS.PASSWORD,e.target.value)} onBlur={()=>handleFieldBlur(FORM_FIELDS.PASSWORD)}/>
        </FormField>
        <Button onClick={handleFormSubmission} disabled={!touched || !isFormValid}>Submit</Button>
    </FormContainer>;
}
