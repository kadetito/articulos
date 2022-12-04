import { FC } from "react";
import { Row, Col } from "react-bootstrap";
import { IArticle } from "interfaces";
import { ArticleCard } from "./ArticleCard";

interface Props {
  articles: IArticle[];
}

export const ArticlesList: FC<Props> = ({ articles }) => {
  return (
    <Row>
      <Col className=" mb-4" sm="12" xs="12" md="12" lg="12" xl="12">
        {articles.map((article) => (
          <ArticleCard article={article} isSlug={false} key={article.slug} />
        ))}
      </Col>
    </Row>
  );
};
