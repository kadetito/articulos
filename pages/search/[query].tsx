import type { NextPage, GetServerSideProps } from "next";
import { dbArticles } from "../../database";
import { IArticle } from "../../interfaces";
import { ArticlesList } from "../../components/articles";
import { Row, Col } from "react-bootstrap";
import { ContentLayout } from "../../layouts/ContentLayout";

interface Props {
  articles: IArticle[];
  foundArticles: boolean;
  query: string;
}

const SearchPage: NextPage<Props> = ({ articles, foundArticles, query }) => {
  return (
    <ContentLayout
      title={"Articulos en NEXTJS (sandbox) - Home page"}
      pageDescription={"listado de artículos creado en Next como plantilla"}
    >
      <h1>Search article</h1>

      <div className="row">
        <div className="col-md-4"></div>
      </div>

      <Row>
        <Col sm="12" xs="12" md="3" lg="3" xl="3" style={{ display: "block" }}>
          sidebar
        </Col>
        <Col className="custom__card-home">
          {foundArticles ? (
            <h4>Término: {query}</h4>
          ) : (
            <>
              <h2>No encontramos ningún artículo</h2>
              <h2>{query}</h2>
            </>
          )}

          <ArticlesList articles={articles} />
        </Col>
      </Row>
    </ContentLayout>
  );
};

// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time
export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { query = "" } = params as { query: string };

  if (query.length === 0) {
    return {
      redirect: {
        destination: "/",
        permanent: true,
      },
    };
  }

  // y no hay productos
  let articles = await dbArticles.getArticlesByTerm(query);
  const foundArticles = articles.length > 0;

  // TODO: retornar otros productos
  if (!foundArticles) {
    articles = await dbArticles.getAllArticles();
  }

  return {
    props: {
      articles,
      foundArticles,
      query,
    },
  };
};

export default SearchPage;
