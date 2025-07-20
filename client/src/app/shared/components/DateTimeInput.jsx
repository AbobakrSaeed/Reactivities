import { DateTimePicker } from "@mui/x-date-pickers";
import { useController } from "react-hook-form";

export default function DateTimeInput(props) {
  const { field, fieldState } = useController({ ...props });

  return (
    <DateTimePicker
      {...props}
      value={field.value ? new Date(field.value) : null}
      onChange={(value) => field.onChange(value)}
      sx={{ width: "100%" }}
      slotProps={{
        textField: {
          onBlur: field.onBlur,
          error: !!fieldState.error,
          helperText: fieldState.error?.message,
        },
      }}
    />
  );
}
