import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { Field } from "formik";

const FAutoCompleteV2: React.FC<FAutoCompleteProps> = (
  props: FAutoCompleteProps
): JSX.Element => {
  const { name, options, ...otherProps } = props;

  const configTextField = {
    ...otherProps
  };

  return (
    <Field
      name={name}
      as={
        <Autocomplete
          renderInput={(params) => (
            <TextField {...params} {...configTextField} />
          )}
          options={options}
        />
      }
    />
  );
};

export default FAutoCompleteV2;

interface FAutoCompleteProps {
  name: string;
  options: Array<{ label: string; value: string | number }>;
}
