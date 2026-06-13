import Button from "../../../../../../components/common/Button/Button";
import FormField from "../../../../../../components/common/FormField/FormField";
import Input from "../../../../../../components/common/Input/Input";
import Box from "../../../../../../components/common/Box/Box";
import type { AddTaskProps } from "./types";

export default function AddTask({ value, onChange, onAdd }: AddTaskProps) {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <FormField label="Todo Task">
                <Input value={value} onChange={e => onChange(e.target.value)} />
            </FormField>
            <Button onClick={onAdd}>Add Task</Button>
        </Box>
    );
}
