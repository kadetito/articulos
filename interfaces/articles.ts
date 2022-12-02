export interface IArticle {
  _id: string;
  content: string;
  images: string[];
  footImages: string[];
  activated: number;
  price: number;

  slug: string;
  tags: string[];
  title: string;

  category: "novedades" | "opinion" | "consejos" | "unisex";
  subtitle: string;
}
