import React from "react";
import { ContentLayout } from "../../layouts/ContentLayout";
import { initialData } from "../../database/articles";
import { Row, Col, Breadcrumb } from "react-bootstrap";
import { ArticleCard } from "../../components/articles/ArticleCard";
import NextLink from "next/link";

const article = initialData.articles[0];

const ArticlePage = () => {
  return (
    <ContentLayout title={article.title} pageDescription={article.subtitle}>
      <Row>
        <Col>
          <Breadcrumb>
            <NextLink className="breadcrumb-item" href="../" passHref>
              Home
            </NextLink>

            <Breadcrumb.Item active>{article.title}</Breadcrumb.Item>
          </Breadcrumb>
        </Col>
      </Row>
      <Row>
        <Col>
          <ArticleCard article={article} isSlug={true} />
        </Col>
      </Row>
    </ContentLayout>
  );
};

export default ArticlePage;
