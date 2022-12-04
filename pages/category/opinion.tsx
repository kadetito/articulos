import type { NextPage } from "next";
import { Row, Col } from "react-bootstrap";
import { ArticlesList } from "../../components/articles";
import { useArticles } from "../../hooks";

import { FullScreenLoading } from "../../components/ui";
import { ContentLayout } from "../../layouts/ContentLayout";

const OpinionPage: NextPage = () => {
  const { articles, isLoading } = useArticles("/articles?category=opinion");

  return (
    <ContentLayout
      title={"Articulos en NEXTJS (sandbox) - Home page"}
      pageDescription={"listado de artículos creado en Next como plantilla"}
    >
      <h1>Opinión</h1>

      <div className="row">
        <div className="col-md-4"></div>
      </div>

      <Row>
        <Col sm="12" xs="12" md="3" lg="3" xl="3" style={{ display: "block" }}>
          sidebar
        </Col>
        <Col className="custom__card-home">
          {isLoading ? (
            <FullScreenLoading />
          ) : (
            <ArticlesList articles={articles} />
          )}
        </Col>
      </Row>
    </ContentLayout>
  );
};

export default OpinionPage;
