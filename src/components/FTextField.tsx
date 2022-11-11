import TextField, { TextFieldProps } from "@mui/material/TextField";
import { useField } from "formik";

const FTextField: React.FC<FTextFieldProps> = ({
  name,
  ...otherProps
}): JSX.Element => {
  const [field, meta] = useField(name);

  const configTextField: TextFieldProps = {
    ...field,
    ...otherProps,
    variant: "outlined",
    fullWidth: true
  };

  if (meta && meta.touched && meta.error) {
    configTextField.error = true;
    configTextField.helperText = meta.error;
  }

  return <TextField {...configTextField} />;
};

export default FTextField;

export type FTextFieldProps = {
  name: string;
} & TextFieldProps;
