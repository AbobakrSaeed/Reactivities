import { useController } from "react-hook-form";
import { TextField } from "@mui/material";

export default function TextInput(props) {
  const { field, fieldState } = useController({ ...props });
  return (
    <TextField
      {...props}
      {...field}
      value={field.value || ""}
      fullWidth
      variant="outlined"
      error={!!fieldState.error}
      helperText={fieldState.error?.message}
    />
  );
}
