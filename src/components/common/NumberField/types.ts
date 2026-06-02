import type { InputProps } from "../Input/types";

export interface NumberFieldProps extends Omit<InputProps, "type" | "onChange"> {
  min?: number;
  max?: number;
  step?: number;
  onChange?: (value: number | null, event: React.ChangeEvent<HTMLInputElement>) => void;
}