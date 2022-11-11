import TextField, { TextFieldProps } from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { useField, useFormikContext } from "formik";

const FAutocomplete: React.FC<FAutocompleteProps> = (
  props: FAutocompleteProps
): JSX.Element => {
  const { name, options, ...otherProps } = props;
  const [field, meta] = useField(name);

  const { setFieldValue } = useFormikContext();
  const configTextField: TextFieldProps = {
    ...otherProps,
    ...field,
    variant: "outlined",
    fullWidth: true
  };

  if (meta && meta.touched && meta.error) {
    configTextField.error = true;
    configTextField.helperText = meta.error;
  }

  return (
    <Autocomplete
      disablePortal
      autoComplete
      options={options}
      sx={{ width: 300 }}
      onChange={(_, option, reason) => {
        if (option === null) setFieldValue(name, null);
        else setFieldValue(name, option.value);
      }}
      onInputChange={(
        event: React.SyntheticEvent,
        value: string,
        reason: string
      ) => {
        if (value === null) setFieldValue(name, null);
        else setFieldValue(name, value);
      }}
      isOptionEqualToValue={(option, val) => {
        console.log("option", option);
        console.log("val", val);
        return option.value === val.value;
      }}
      getOptionLabel={(option) => option.label}
      renderInput={(params) => <TextField {...params} {...configTextField} />}
    />
  );
};

export default FAutocomplete;

interface Option {
  label: string;
  value: string | number;
}

type FAutocompleteProps = {
  options: Array<Option>;
  name: string;
} & TextFieldProps;
