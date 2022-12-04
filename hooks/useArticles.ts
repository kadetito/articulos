import useSWR, { SWRConfiguration } from "swr";
import { IArticle } from "../interfaces/articles";

export const useArticles = (url: string, config: SWRConfiguration = {}) => {
  const { data, error } = useSWR<IArticle[]>(`/api/${url}`, config);

  return { articles: data || [], isLoading: !error && !data, isError: error };
};
