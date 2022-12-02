import { FC, useMemo } from "react";
import { Row, Col, Card, Button } from "react-bootstrap";
import { IArticle } from "interfaces";
import { ImageComponent, ImagesComponent, ShareSocialMedia } from "../ui";
import NextLink from "next/link";

interface Props {
  article: IArticle;
  isSlug?: boolean;
}

export const ArticleCard: FC<Props> = ({ article, isSlug }) => {
  const articleImage = useMemo(() => {
    return `articles/${article.images[0]}`;
  }, [article.images]);

  const articleFootImage = useMemo(() => {
    return article.footImages[0];
  }, [article.footImages]);

  return (
    <Card className="mb-3">
      <Card.Body>
        <Card.Title as="h3" className="mb-3">
          {article.title}
        </Card.Title>
        <Card.Title as="h5" className="card-subtitle mb-4">
          {article.subtitle}
        </Card.Title>
        <Row>
          <Col
            md={{ order: "last" }}
            sm={{ order: "last" }}
            xs={{ order: "last" }}
            lg={{ span: "4", order: "first" }}
            xl={{ span: "4", order: "first" }}
          >
            {isSlug ? (
              <ImagesComponent
                title={article.title}
                images={article.images}
                footImages={article.footImages}
              />
            ) : (
              <ImageComponent
                title={article.title}
                image={articleImage}
                footImages={articleFootImage}
              />
            )}
          </Col>
          <Col>
            <Row>
              <Col>
                <Card.Text className="custom__overflow mb-3">
                  {!isSlug
                    ? `${article.content.substring(0, 550)} ...[sigue]`
                    : article.content}
                </Card.Text>
              </Col>
            </Row>

            <Row>
              <Col xs="8">
                <Card.Text className="custom__overflow mb-3">
                  <ShareSocialMedia />
                </Card.Text>
              </Col>
              {!isSlug && (
                <Col className="d-flex justify-content-end ">
                  <NextLink href="/article/slug" passHref prefetch={false}>
                    <Button variant="outline-secondary">View detail</Button>
                  </NextLink>
                </Col>
              )}
            </Row>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};
