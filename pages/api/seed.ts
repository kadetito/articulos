import { db, seedDatabase } from "../../database";
import type { NextApiRequest, NextApiResponse } from "next";
import { Article } from "../../models";

type Data = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (process.env.NODE_ENV === "production") {
    return res.status(401).json({ message: "no tiene acceso a este API" });
  }

  await db.connect();
  await Article.deleteMany();
  await Article.insertMany(seedDatabase.initialData.articles);
  await db.disconnect();

  res.status(200).json({ message: "Carga de datos realizada correctamente" });
}
