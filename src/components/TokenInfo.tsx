import { Box } from "@mui/material";
import React from "react";
import { SubHeading } from "./Typographies";
import XIcon from "@mui/icons-material/X";
import TelegramIcon from "@mui/icons-material/Telegram";
import LanguageIcon from "@mui/icons-material/Language";

const TokenInfo = () => {
  return (
    <Box
      sx={{
        display: "flex",
        background: "#19213D",
        borderRadius: "8px",
        p: "3%",
      }}
    >
      <Box sx={{ width: "96px", height: "96px", background: "#D9D9D9" }}>
        logo
      </Box>
      <Box sx={{ ml: "1%" }}>
        <SubHeading sx={{ mb: "2px" }}>Token Name</SubHeading>
        <Box sx={{ display: "flex", alignItems: "center", mt: "2%" }}>
          <Box
            sx={{ background: "#F6F8FC", width: "32px", height: "32px" }}
          ></Box>
          <Box sx={{ display: "flex", gap: 2 }}>
            <SubHeading>Network</SubHeading>
            <Box>
              <SubHeading sx={{ color: "#00EF8B" }}>4h 20m </SubHeading>
            </Box>
          </Box>
        </Box>
        <Box sx={{ mt: "7%", display: "flex", gap: 2 }}>
          <TelegramIcon />
          <LanguageIcon />
          <XIcon />
        </Box>
      </Box>
    </Box>
  );
};

export default TokenInfo;
