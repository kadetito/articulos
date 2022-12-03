import { db, ARTICLES_CONSTANTS } from "../../../database";
import type { NextApiRequest, NextApiResponse } from "next";
import { Article } from "../../../models";
import { IArticle } from "../../../interfaces/articles";

type Data =
  | {
      message: string;
    }
  | IArticle[];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  switch (req.method) {
    case "GET":
      return getArticles(req, res);

    default:
      return res.status(400).json({
        message: "Bad request",
      });
  }
}

const getArticles = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { category = "all" } = req.query;
  let condition = {};

  if (
    category !== "all" &&
    ARTICLES_CONSTANTS.validCategory.includes(`${category}`)
  ) {
    condition = { category };
  }

  await db.connect();
  const articles = await Article.find(condition)
    .select("title category images imagesFoot activated slug -_id")
    .lean();
  await db.disconnect();

  return res.status(200).json(articles);
};
