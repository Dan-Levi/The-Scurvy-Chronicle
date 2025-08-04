import { Compass, ChevronLeft, ChevronRight } from "lucide-react";
import type { Article } from "../../types/article";
import { ArticleCard } from "./ArticleCard";

interface ArticleFeedProps {
  articles: Article[];
  currentPage: number;
  lastPage: number;
  goToPrevious: () => void;
  goToNext: () => void;
}

export const ArticleFeed = ({ articles, currentPage, lastPage, goToPrevious, goToNext }: ArticleFeedProps) => (
  <section className="relative overflow-hidden border-b-4 border-[#0D0D0D] bg-[#FFF8E7] px-4 py-12 sm:border-b-[8px] sm:px-6 sm:py-20">
    <div
      className="absolute inset-0 opacity-20"
      style={{
        backgroundImage: `
          repeating-linear-gradient(0deg, rgba(13,13,13,0.1) 0 2px, transparent 2px 20px),
          repeating-linear-gradient(90deg, rgba(242,48,84,0.05) 0 1px, transparent 1px 25px)
        `,
      }}
    />

    <div className="relative z-10 mx-auto max-w-7xl">
      <div className="mb-8 flex flex-col flex-wrap items-start justify-between gap-4 sm:mb-12 sm:flex-row sm:items-center">
        <h3
          className="text-2xl font-black tracking-widest uppercase sm:text-3xl md:text-4xl"
          style={{
            transform: "skewX(-2deg)",
            imageRendering: "pixelated",
          }}
        >
          <span className="mb-2 inline-block border-3 border-[#0D0D0D] bg-[#F23054] px-2 py-1 text-white shadow-[5px_5px_0_0_#0D0D0D] sm:border-[6px] sm:px-3 sm:py-2 sm:shadow-[10px_10px_0_0_#0D0D0D]">
            The Latest
          </span>
          <br className="sm:hidden" />
          <span
            className="inline-block border-3 border-[#F27F1B] bg-[#0D0D0D] px-2 py-1 text-[#F2C12E] shadow-[5px_5px_0_0_#F27F1B] sm:border-[6px] sm:px-3 sm:py-2 sm:shadow-[10px_10px_0_0_#F27F1B]"
            style={{ transform: "translateX(8px) sm:translateX(16px)" }}
          >
            Dispatches
          </span>
        </h3>

        <div className="flex items-center gap-2 sm:gap-3">
          <span
            className="inline-block border-3 border-[#0D0D0D] bg-[#F27F1B] px-3 py-1 text-xs font-black uppercase shadow-[5px_5px_0_0_#0D0D0D] sm:border-[6px] sm:px-4 sm:py-2 sm:text-sm sm:shadow-[10px_10px_0_0_#0D0D0D]"
            style={{
              transform: "rotate(1deg)",
              imageRendering: "pixelated",
            }}
          >
            Page {currentPage} of {lastPage}
          </span>
          <div className="border-3 border-[#0D0D0D] bg-[#734319] p-1 shadow-[4px_4px_0_0_#0D0D0D] sm:border-[6px] sm:p-2 sm:shadow-[8px_8px_0_0_#0D0D0D]">
            <Compass className="h-4 w-4 text-white sm:h-6 sm:w-6" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-10 md:gap-12 lg:grid-cols-3">
        {articles.map((a, index) => (
          <ArticleCard key={a.id} article={a} index={index} />
        ))}
      </div>

      <div className="mt-12 flex flex-col justify-center gap-4 sm:mt-16 sm:flex-row sm:gap-6">
        <button
          onClick={goToPrevious}
          disabled={currentPage === 1}
          className="flex items-center justify-center gap-2 border-4 border-[#0D0D0D] bg-[#F23054] px-4 py-2 text-xs font-black text-white uppercase shadow-[6px_6px_0_0_#0D0D0D] transition-all hover:translate-x-[-2px] hover:translate-y-[-2px] hover:transform hover:shadow-[8px_8px_0_0_#0D0D0D] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[3px_3px_0_0_#0D0D0D] disabled:opacity-40 sm:gap-3 sm:border-[8px] sm:px-6 sm:py-3 sm:text-sm sm:shadow-[12px_12px_0_0_#0D0D0D] sm:hover:translate-x-[-4px] sm:hover:translate-y-[-4px] sm:hover:shadow-[16px_16px_0_0_#0D0D0D] sm:active:translate-x-[4px] sm:active:translate-y-[4px] sm:active:shadow-[6px_6px_0_0_#0D0D0D]"
          style={{
            transform: "rotate(1deg)",
            imageRendering: "pixelated",
          }}
        >
          <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
          <span className="hidden sm:inline">Previous Plunder</span>
          <span className="sm:hidden">Previous</span>
        </button>
        <button
          onClick={goToNext}
          disabled={currentPage === lastPage}
          className="flex items-center justify-center gap-2 border-4 border-[#0D0D0D] bg-[#734319] px-4 py-2 text-xs font-black text-white uppercase shadow-[6px_6px_0_0_#0D0D0D] transition-all hover:translate-x-[-2px] hover:translate-y-[-2px] hover:transform hover:shadow-[8px_8px_0_0_#0D0D0D] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[3px_3px_0_0_#0D0D0D] disabled:opacity-40 sm:gap-3 sm:border-[8px] sm:px-6 sm:py-3 sm:text-sm sm:shadow-[12px_12px_0_0_#0D0D0D] sm:hover:translate-x-[-4px] sm:hover:translate-y-[-4px] sm:hover:shadow-[16px_16px_0_0_#0D0D0D] sm:active:translate-x-[4px] sm:active:translate-y-[4px] sm:active:shadow-[6px_6px_0_0_#0D0D0D]"
          style={{
            transform: "rotate(-1deg)",
            imageRendering: "pixelated",
          }}
        >
          <span className="hidden sm:inline">Next Haul</span>
          <span className="sm:hidden">Next</span>
          <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
        </button>
      </div>
    </div>
  </section>
);