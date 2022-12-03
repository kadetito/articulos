import { db } from "../../../database";
import type { NextApiRequest, NextApiResponse } from "next";
import { Article } from "../../../models";
import { IArticle } from "../../../interfaces/articles";

type Data =
  | {
      message: string;
    }
  | IArticle;

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  switch (req.method) {
    case "GET":
      return getArticleBySlug(req, res);

    default:
      return res.status(400).json({ message: "Bad request" });
  }
}

const getArticleBySlug = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  await db.connect();
  const { slug } = req.query;

  const article = await Article.findOne({ slug }).lean();
  await db.disconnect();

  if (!article) {
    return res.status(400).json({
      message: "Artículo no encontrado",
    });
  }

  return res.json(article);
};
