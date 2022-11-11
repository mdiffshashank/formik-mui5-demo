import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel
} from "@mui/material";
import { useField, useFormikContext } from "formik";
import React from "react";

const FCheckbox: React.FC<FCheckboxProps> = ({
  name,
  label,
  legend
  //   ...otherProps
}): JSX.Element => {
  const [field, meta] = useField(name);
  const { setFieldValue, isSubmitting } = useFormikContext();

  const handleChange = (event: any) => {
    const { checked } = event.target;
    setFieldValue(name, checked);
  };

  const configCheckBox = {
    ...field,
    // ...otherProps,
    onChange: handleChange
  };

  const configFormControl = {};

  if (meta && meta.touched && meta.error) {
    //@ts-ignore
    configFormControl.error = true;
    //@ts-ignore
    configFormControl.helpertext = meta.error;
  }

  return (
    <FormControl {...configFormControl}>
      {legend && <FormLabel component={"legend"}>{legend}</FormLabel>}
      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox
              {...configCheckBox}
              disabled={isSubmitting}
              color={"primary"}
            />
          }
          label={label}
        />
      </FormGroup>
    </FormControl>
  );
};

export default FCheckbox;

interface FCheckboxProps {
  name: string;
  label: string;
  legend?: string;
}
