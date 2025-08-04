import { useState, useEffect } from "react";
import type { Article } from "../types/article";
import { fetchArticles } from "../services/articleService";

export const useArticles = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);

  useEffect(() => {
    const loadArticles = async () => {
      const { articles, lastPage } = await fetchArticles(currentPage);
      setArticles(articles);
      setLastPage(lastPage);
    };
    loadArticles();
  }, [currentPage]);

  const goToPrevious = () => setCurrentPage((p) => Math.max(1, p - 1));
  const goToNext = () => setCurrentPage((p) => Math.min(lastPage, p + 1));

  return { articles, currentPage, lastPage, goToPrevious, goToNext };
};
