import { Row, Col } from "react-bootstrap";
import { ContentLayout } from "../layouts/ContentLayout";
import { ArticlesList } from "../components/articles/ArticlesList";
import { initialData } from "database/articles";

export default function Home() {
  return (
    <ContentLayout
      title={"Articulos en NEXTJS (sandbox) - Home page"}
      pageDescription={"listado de artículos creado en Next como plantilla"}
    >
      <h1>Artículos</h1>

      <div className="row">
        <div className="col-md-4"></div>
      </div>

      <Row>
        <Col sm="12" xs="12" md="3" lg="3" xl="3" style={{ display: "block" }}>
          sidebar
        </Col>
        <Col className="custom__card-home">
          <ArticlesList articles={initialData.articles as any} />
        </Col>
      </Row>
    </ContentLayout>
  );
}
