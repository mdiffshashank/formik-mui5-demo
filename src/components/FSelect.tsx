import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import MenuItem from "@mui/material/MenuItem";
import { TextFieldProps } from "@mui/material";

import { useField, useFormikContext } from "formik";
import React from "react";

const FSelect: React.FC<FSelectProps> = ({
  name,
  selectOptions,
  ...otherProps
}): JSX.Element => {
  const [field, meta] = useField(name);
  const { setFieldValue } = useFormikContext();

  const handleChange = (event: any) => {
    const { value } = event.target;
    setFieldValue(name, value);
  };
  const selectConfig: TextFieldProps = {
    ...otherProps,
    ...field,
    select: true,
    variant: "outlined",
    fullWidth: true,
    onChange: handleChange
  };

  if (meta && meta.touched && meta.error) {
    selectConfig.error = true;
    selectConfig.helperText = meta.error;
  }

  return (
    <TextField {...selectConfig}>
      {selectOptions.map((option) => {
        return (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        );
      })}
    </TextField>
  );
};

export default FSelect;

export interface Option {
  value: string | number;
  label: string;
}

export type FSelectProps = {
  name: string;
  selectOptions: Array<Option>;
} & TextFieldProps;
