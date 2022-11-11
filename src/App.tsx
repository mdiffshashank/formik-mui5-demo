import SignupForm from "./pages/SignupForm";
import Box from "@mui/material/Box";

const App: React.FC = (): JSX.Element => {
  return (
    <Box sx={{ m: "20px auto 20px", width: "1024px" }}>
      <SignupForm />
    </Box>
  );
};

export default App;
