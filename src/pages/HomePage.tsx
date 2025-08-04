import { useArticles } from "../hooks/useArticles";
import { Hero } from "../components/home/Hero";
import { ArticleFeed } from "../components/home/ArticleFeed";
import { Callout } from "../components/home/Callout";
import { SectionDivider } from "../components/layout/SectionDivider";

export const HomePage = () => {
  const { articles, currentPage, lastPage, goToPrevious, goToNext } = useArticles();

  return (
    <>
      <Hero />
      <SectionDivider />
      <ArticleFeed
        articles={articles}
        currentPage={currentPage}
        lastPage={lastPage}
        goToPrevious={goToPrevious}
        goToNext={goToNext}
      />
      <Callout />
    </>
  );
};
