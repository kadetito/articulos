import React from "react";
import NextLink from "next/link";
import { NextPage } from "next";
import { GetStaticPaths, GetStaticProps } from "next";
import { ContentLayout } from "../../layouts/ContentLayout";
import { Row, Col, Breadcrumb } from "react-bootstrap";
import { ArticleCard } from "../../components/articles/ArticleCard";
import { IArticle } from "../../interfaces/articles";
import { dbArticles } from "database";

interface Props {
  article: IArticle;
}

const ArticlePage: NextPage<Props> = ({ article }) => {
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

// export const getServerSideProps: GetServerSideProps = async ({ params }) => {
//   const { slug = "" } = params as { slug: string };
//   const article = await dbArticles.getArticleBySlug(slug);

//   if (!article) {
//     return {
//       redirect: {
//         destination: "/",
//         permanent: false,
//       },
//     };
//   }

//   return {
//     props: { article },
//   };
// };

// llama a la funcion que obtiene la data y la manda a static cprops
export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const articleSlugs = await dbArticles.getAllArticlesSlugs();
  return {
    paths: articleSlugs.map(({ slug }) => ({
      params: {
        slug,
      },
    })),
    fallback: "blocking",
  };
};

// crea de manera estática todas las pantallas con los static paths sonseguidos a traves de la consulta a la bbdd
// de la funcion anterior
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as { slug: string }; // your fetch function here
  const article = await dbArticles.getArticleBySlug(slug);

  if (!article) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {
      article,
    },
    revalidate: 60 * 60 * 24,
  };
};

export default ArticlePage;
