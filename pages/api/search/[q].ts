import type { NextApiRequest, NextApiResponse } from "next";
import { db } from "../../../database";
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
      return searchArticles(req, res);

    default:
      return res.status(400).json({ message: "Bad request" });
  }
}

const searchArticles = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  let { q = "" } = req.query;

  if (q.length === 0) {
    return res
      .status(400)
      .json({ message: "Debe especificafr el query de la búsqueda" });
  }

  q = q.toString().toLowerCase();

  await db.connect();
  const articles = await Article.find({
    $text: { $search: q },
  })
    .select("title images footImages activated slug -_id")
    .lean();

  await db.disconnect();

  return res.status(200).json(articles);
};
