import CircularProgress from "@mui/material/CircularProgress";
import Button, { ButtonProps } from "@mui/material/Button";
import { useFormikContext } from "formik";

const FSubmitButton: React.FC<BtnProps> = (props: BtnProps): JSX.Element => {
  const { children, ...otherProps } = props;
  const { isSubmitting, submitForm } = useFormikContext();

  const configuration = {
    ...otherProps,
    fullWidth: true
  };

  return (
    <Button
      {...configuration}
      onClick={async () => {
        await submitForm();
      }}
      endIcon={isSubmitting && <CircularProgress color="inherit" size={20} />}
      disabled={isSubmitting}
    >
      {children}
    </Button>
  );
};

export default FSubmitButton;

interface BtnProps extends ButtonProps {
  children: React.ReactNode;
}
