import Alert from "@material-ui/lab/Alert/Alert";

export const ErrorMessage = ({ error }) => {
  return (
    <>
      <Alert severity="error">{error}</Alert>
    </>
  );
};
