import React from "react";
import type { NextPageWithLayout } from "./_app";
import Layout from "@/components/layout/layout";
import { Box, Container, Grid } from "@mui/material";
import Article from "@/components/Article";

const Articles = () => {
  return (
    <Box>
      <Container maxWidth="xl">
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <Box>
              <Article />
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box>
              <Article />
            </Box>
          </Grid>{" "}
          <Grid item xs={12} md={4}>
            <Box>
              <Article />
            </Box>
          </Grid>{" "}
          <Grid item xs={12} md={4}>
            <Box>
              <Article />
            </Box>
          </Grid>{" "}
          <Grid item xs={12} md={4}>
            <Box>
              <Article />
            </Box>
          </Grid>{" "}
          <Grid item xs={12} md={4}>
            <Box>
              <Article />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

Articles.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Articles;
