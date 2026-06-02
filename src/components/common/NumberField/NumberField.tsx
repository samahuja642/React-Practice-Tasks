import type { NumberFieldProps } from "./types";
import { StyledNumberField } from "./styles";

export default function NumberField({
  min,
  max,
  step = 1,
  onChange,
  ...rest
}: NumberFieldProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value;
    if (raw === "") {
      onChange?.(null, e);
      return;
    }
    const num = parseFloat(raw);
    if (!isNaN(num)) {
      onChange?.(num, e);
    }
  };

  return (
    <StyledNumberField
      type="number"
      onChange={handleChange}
      inputProps={{ min, max, step }}
      {...rest}
    />
  );
}
