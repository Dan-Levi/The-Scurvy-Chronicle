import { API_URL } from "../constants/api";
import type { Article } from "../types/article";

export const fetchArticles = async (currentPage: number) => {
  const res = await fetch(`${API_URL}&page=${currentPage}`);
  const json = await res.json();
  return {
    articles: json.data as Article[],
    lastPage: json.meta.last_page as number,
  };
};
