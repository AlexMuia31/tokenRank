import React from "react";
import type { NextPageWithLayout } from "./_app";
import Layout from "@/components/layout/layout";
import { Box, Container, Typography } from "@mui/material";
import { Heading, SubHeading } from "@/components/Typographies";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { PrimaryButton, SecondaryButton } from "@/components/Buttons";
import Prelaunch from "@/components/Prelaunch";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ pt: 2 }}>
          <Box>{children}</Box>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const ProjectDetail: NextPageWithLayout = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Container maxWidth="xl">
      <Heading>Project Listing Details</Heading>
      <SubHeading sx={{ mt: "3%", fontWeight: 700 }} variant="h2">
        Type
      </SubHeading>
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab
              label={
                <PrimaryButton variant="outlined">Pre Launch</PrimaryButton>
              }
              {...a11yProps(0)}
            />
            <Tab
              label={<SecondaryButton>Post Launch</SecondaryButton>}
              {...a11yProps(1)}
            />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <Prelaunch />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          Item Two
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          Item Three
        </CustomTabPanel>
      </Box>
    </Container>
  );
};

ProjectDetail.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};

export default ProjectDetail;
