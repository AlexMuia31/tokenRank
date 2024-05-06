import React from "react";
import type { NextPageWithLayout } from "./_app";
import Layout from "@/components/layout/layout";

const ProjectDetail: NextPageWithLayout = () => {
  return <div> ProjectDetail</div>;
};

ProjectDetail.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};

export default ProjectDetail;
