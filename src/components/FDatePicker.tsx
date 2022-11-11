import TextField, { TextFieldProps } from "@mui/material/TextField";
import { useField } from "formik";
import React from "react";

const FDatePicker: React.FC<FDatePickerProps> = ({
  name,
  ...otherProps
}): JSX.Element => {
  const [field, meta] = useField(name);

  const configDatePicker: TextFieldProps = {
    ...otherProps,
    ...field,
    variant: "outlined",
    fullWidth: true,
    type: "date",
    InputLabelProps: {
      shrink: true
    }
  };

  if (meta && meta.touched && meta.error) {
    configDatePicker.error = true;
    configDatePicker.helperText = meta.error;
  }

  return <TextField {...configDatePicker} />;
};

export default FDatePicker;

type FDatePickerProps = {
  name: string;
} & TextFieldProps;
