import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";
import exp from "constants";

export const PrimaryButton = styled(Button)({
  background: "#19213D",
  color: "#00EF8B",
  padding: "10px 20px",
  borderRadius: "8px",
  fontSize: "16px",
  fontWeight: 500,
  lineHeight: "19.2px",
  fontFamily: "Roboto",
  textTransform: "none",
  "&:hover": {
    background: "#19213D",
  },
  border: "1px solid #00EF8B",
});

export const SecondaryButton = styled(Button)({
  background: "#000008",
  color: "#00EF8B",
  padding: "10px 20px",
  borderRadius: "8px",
  fontSize: "16px",
  fontWeight: 500,
  lineHeight: "19.2px",
  fontFamily: "Roboto",
  textTransform: "none",
  "&:hover": {
    background: "#000008",
  },
  border: "1px solid #5D6481",
});
