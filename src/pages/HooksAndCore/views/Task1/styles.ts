import type { SystemStyleObject, Theme } from "@mui/system";

export const container: SystemStyleObject<Theme> = {
  p: 3,
  display: "flex",
  flexDirection: "column",
  gap: 3,
};

export const countDisplay: SystemStyleObject<Theme> = {
  display: "flex",
  alignItems: "center",
  gap: 1,
};

export const countValue: SystemStyleObject<Theme> = {
  fontWeight: 600,
};

export const buttonGroup: SystemStyleObject<Theme> = {
  display: "flex",
  gap: 2,
};
