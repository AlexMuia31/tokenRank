import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";

export const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "#ffffff",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "green",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "grey",
    },
    "&:hover fieldset": {
      borderColor: "#f6f8fc",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#f6f8fc",
    },
  },
  ".MuiInputBase-root": {
    backgroundColor: "#19213D",
    borderRadius: "8px",
  },
});
