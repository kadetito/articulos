import React from "react";
import { ContentLayout } from "../layouts/ContentLayout";

const Custom404 = () => {
  return (
    <ContentLayout
      title={"404 not found"}
      pageDescription={"página no encontrada"}
    >
      <h1>404</h1>
    </ContentLayout>
  );
};

export default Custom404;
