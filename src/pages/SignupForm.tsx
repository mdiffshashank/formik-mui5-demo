import Grid from "@mui/material/Grid";
import { Form, Formik, FormikValues } from "formik";
import * as Yup from "yup";
import FAutocomplete from "../components/FAutocomplete";
import FCheckbox from "../components/FCheckbox";
import FDatePicker from "../components/FDatePicker";
import FRadioGroup from "../components/FRadioGroup";
import FSelect from "../components/FSelect";
import FSubmitButton from "../components/FSubmitButton";
import FTextField from "../components/FTextField";

/** form initial values */
const INIT_FORM_VALUES: FormikValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  addressLineOne: "",
  addressLineTwo: "",
  city: "",
  state: "",
  country: "",
  gender: "",
  dob: "",
  description: "",
  isExServiceMan: "",
  product: ""
};

/** form Validation logic using  yup */
const validationSchema = Yup.object().shape({
  firstName: Yup.string().required("This field is required"),
  lastName: Yup.string().required("This field is required"),
  email: Yup.string()
    .email("email formate is not correct")
    .required("This field is required"),
  phone: Yup.number()
    .integer("Phone number must be integers")
    .required("This field is required"),
  addressLineOne: Yup.string().required("This field is required"),
  addressLineTwo: Yup.string(),
  city: Yup.string().required("This field is required"),
  state: Yup.string().required("This field is required"),
  country: Yup.string().required("This field is required"),
  gender: Yup.string().required("This field is required"),
  isExServiceMan: Yup.string().required("This field is required"),
  dob: Yup.date().required("This field is required"),
  product: Yup.string().required("This field is required")
});

/**Sign UP form is a demo form which uses compound components of material UI and formik */
const SignupForm: React.FC = (): JSX.Element => {
  const onSubmit = (values: FormikValues): void => {
    console.log({ values });
  };

  return (
    <Formik<FormikValues>
      initialValues={INIT_FORM_VALUES}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form>
        <Grid container spacing={2} sx={{ width: "100%" }}>
          <Grid item xs={6}>
            <FTextField
              label="First Name"
              name="firstName"
              required
              color="primary"
            />
          </Grid>

          <Grid item xs={6}>
            <FTextField
              label="Last Name"
              name="lastName"
              required
              color="primary"
            />
          </Grid>

          <Grid item xs={6}>
            <FTextField label="Email" name="email" required color="primary" />
          </Grid>

          <Grid item xs={6}>
            <FTextField label="Phone" name="phone" required color="primary" />
          </Grid>

          <Grid item xs={6}>
            <FTextField
              label="Address line one"
              name="addressLineOne"
              required
              color="primary"
            />
          </Grid>

          <Grid item xs={6}>
            <FTextField
              label="Address line two"
              name="addressLineTwo"
              color="primary"
            />
          </Grid>

          <Grid item xs={4}>
            <FTextField label="City" name="city" required color="primary" />
          </Grid>

          <Grid item xs={4}>
            <FTextField label="State" name="state" required color="primary" />
          </Grid>

          <Grid item xs={4}>
            <FSelect
              selectOptions={[
                { label: "India", value: "IND" },
                { label: "England", value: "ENG" },
                { label: "United States of America", value: "USA" }
              ]}
              label={"country"}
              name={"country"}
              required
              color="primary"
            />
          </Grid>

          <Grid item xs={12}>
            <FTextField
              placeholder="Tell us something about yourself ?"
              label="Tell us more"
              name="description"
              multiline
              rows={4}
              color="primary"
            />
          </Grid>

          <Grid item xs={4}>
            <FRadioGroup
              options={[
                { label: "Male", value: "male" },
                { label: "Female", value: "female" }
              ]}
              name={"gender"}
              label={"Gender"}
              color={"primary"}
            />
          </Grid>

          <Grid item xs={4}>
            <FDatePicker
              name={"dob"}
              color={"primary"}
              label={"Date of birth"}
              required
            />
          </Grid>

          <Grid item xs={4}>
            <FCheckbox
              name={"isExServiceMan"}
              label={"Are you ex service man ?"}
              legend={"Ex-serviceMan"}
            />
          </Grid>

          <Grid item xs={4}>
            <FAutocomplete
              label={"Product"}
              name={"product"}
              color={"primary"}
              options={[
                { label: "XYZ", value: 1 },
                { label: "ABC", value: 2 },
                { label: "PQR", value: 3 },
                { label: "XPC", value: 4 }
              ]}
            />
          </Grid>

          <Grid item xs={4}>
            Subscription Start Date
          </Grid>

          <Grid item xs={4}>
            Subscription End Date
          </Grid>
        </Grid>

        <FSubmitButton variant="contained" color="primary">
          Submit
        </FSubmitButton>
      </Form>
    </Formik>
  );
};

export default SignupForm;
