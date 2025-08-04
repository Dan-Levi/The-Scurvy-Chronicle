import { useArticles } from "./hooks/useArticles";
import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { Hero } from "./components/home/Hero";
import { ArticleFeed } from "./components/home/ArticleFeed";
import { Callout } from "./components/home/Callout";
import { TopStrap } from "./components/layout/TopStrap";
import { SectionDivider } from "./components/layout/SectionDivider";

/**
 * Color Palette:
 * red:    #F23054
 * yellow: #F2C12E
 * orange: #F27F1B
 * brown:  #734319
 * black:  #0D0D0D
 * cream:  #FFF8E7
 */

export default function App() {
  const { articles, currentPage, lastPage, goToPrevious, goToNext } = useArticles();

  return (
    <div className="min-h-screen bg-[#FFF8E7] font-serif text-[#0D0D0D] antialiased">
      <TopStrap />
      <Header />
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
      <Footer />
    </div>
  );
}