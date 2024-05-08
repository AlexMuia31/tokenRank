import { Box, Divider, Grid } from "@mui/material";
import React from "react";
import { CssTextField } from "./TextFields";
import { Heading } from "./Typographies";
import { SecondaryButton } from "./Buttons";

const Prelaunch = () => {
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Box>
                <Heading sx={{ fontSize: "18px" }}>Project Name</Heading>
                <CssTextField size="small" fullWidth />
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box>
                <Heading sx={{ fontSize: "18px" }}>Blockchain</Heading>
                <CssTextField size="small" fullWidth />
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box>
                <Heading sx={{ fontSize: "18px" }}>Launch Date</Heading>
                <CssTextField size="small" fullWidth />
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box>
                <Heading sx={{ fontSize: "18px" }}>Launch Time</Heading>
                <CssTextField size="small" fullWidth />
              </Box>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box>
            <Heading sx={{ fontSize: "18px" }}>Description Overview</Heading>
            <CssTextField
              size="small"
              fullWidth
              minRows={4}
              rows={7}
              multiline
            />
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Box>
                <Heading sx={{ fontSize: "18px" }}>Links</Heading>
                <CssTextField size="small" fullWidth />
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box>
                <Heading sx={{ fontSize: "18px" }}>Twitter</Heading>
                <CssTextField size="small" fullWidth />
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box>
                <Heading sx={{ fontSize: "18px" }}>Telegram</Heading>
                <CssTextField size="small" fullWidth />
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box>
                <Heading sx={{ fontSize: "18px" }}>Other Links</Heading>
                <CssTextField size="small" fullWidth />
              </Box>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box>
            <Heading sx={{ fontSize: "18px" }}>Coin Logo</Heading>
            <CssTextField size="small" fullWidth />
          </Box>
        </Grid>
      </Grid>
      <Divider sx={{ backgroundColor: "#A8B7D4", mt: "2%" }} />
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Box sx={{ mt: "1%" }}>
            After submitting the project details, we will promptly publish the
            information on our website, Telegram, and Twitter within 30 minutes.
             All prelaunch listings will automatically be promoted to the
            Upcoming Launches category, followed by a second update on Twitter
            and Telegram once the token is live for trading. To proceed, please
            make a payment of $xxx in either $SOL, $ETH, $BNB, $PLS, or $TON
            coin to 0xxx.
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              mt: "1%",
              border: " 0.5px solid #f6f8fc",
              borderStyle: "dotted",
              borderRadius: "5px",
              padding: "1%",
            }}
          >
            <CssTextField
              fullWidth
              size="small"
              placeholder="Your payment Transaction Hash
            "
            />
            <SecondaryButton sx={{ mt: "2%" }}>SUBMIT NOW</SecondaryButton>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
export default Prelaunch;
