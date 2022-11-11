import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import Radio from "@mui/material/Radio";
import RadioGroup, { RadioGroupProps } from "@mui/material/RadioGroup";
import { useFormikContext, useField } from "formik";
import { v4 as uuidv4 } from "uuid";

const FRadioGroup: React.FC<FRadioGroupProps> = (
  props: FRadioGroupProps
): JSX.Element => {
  const { name, options, isBoolean, label, ...otherProps } = props;

  const [field, meta] = useField(name);
  const { setFieldValue, isSubmitting } = useFormikContext();

  const handleChange = (event: any) => {
    const { value } = event.target;
    if (isBoolean) setFieldValue(name, value === "true" ? true : false);
    else setFieldValue(name, value);
  };

  const configRadioGroup: RadioGroupProps = {
    ...field,
    ...otherProps,
    onChange: handleChange
  };

  const configFormControl: any = {};

  //error handling
  if (meta && meta.touched && meta.error) {
    configFormControl.error = true;
    configFormControl.helpertext = meta.error;
  }

  return (
    <FormControl {...configFormControl}>
      <FormLabel>{label}</FormLabel>
      <RadioGroup name={name} {...configRadioGroup}>
        {options.map((option: RadioOptionProps, index: number) => {
          return (
            <FormControlLabel
              key={uuidv4()}
              value={option.value}
              control={<Radio color={"primary"} disabled={isSubmitting} />}
              label={option.label.toString()}
            />
          );
        })}
      </RadioGroup>
    </FormControl>
  );
};

export default FRadioGroup;

interface RadioOptionProps {
  label: string;
  value: string | boolean;
}

interface FRadioGroupProps extends RadioGroupProps {
  name: string;
  options: Array<RadioOptionProps>;
  isBoolean?: boolean;
  label: string;
}
