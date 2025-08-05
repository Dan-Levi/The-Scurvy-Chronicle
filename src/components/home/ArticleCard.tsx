import { Link } from "react-router-dom";
import type { Article } from "../../types/article";

interface ArticleCardProps {
  article: Article;
  index: number;
}

export const ArticleCard = ({ article, index }: ArticleCardProps) => (
  <article
    key={article.id}
    className={`group relative flex min-h-[420px] flex-col justify-between border-4 border-[#0D0D0D] bg-[#F2E2CE] shadow-[8px_8px_0_0_#401801] transition-all duration-200 hover:translate-x-[-2px] hover:translate-y-[-2px] hover:transform hover:shadow-[10px_10px_0_0_#401801] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[4px_4px_0_0_#401801] sm:min-h-[520px] sm:border-[8px] sm:shadow-[16px_16px_0_0_#401801] sm:hover:translate-x-[-4px] sm:hover:translate-y-[-4px] sm:hover:shadow-[20px_20px_0_0_#401801] sm:active:translate-x-[4px] sm:active:translate-y-[4px] sm:active:shadow-[8px_8px_0_0_#401801]`}
    style={{
      transform:
        index % 3 === 1
          ? "rotate(1deg)"
          : index % 3 === 2
          ? "rotate(-1deg)"
          : "rotate(0deg)",
      imageRendering: "pixelated",
    }}
  >
    {/* Enhanced tags with stacking */}
    <div className="absolute -top-3 -left-3 z-10 flex flex-col gap-1 sm:-top-4 sm:-left-4">
      <div
        className="border-2 border-[#0D0D0D] bg-[#D97B59] px-2 py-1 text-xs font-black text-[#0D0D0D] uppercase shadow-[4px_4px_0_0_#401801] sm:border-[4px] sm:px-3 sm:shadow-[8px_8px_0_0_#401801]"
        style={{
          transform: "rotate(3deg)",
          imageRendering: "pixelated",
        }}
      >
        Gaming
      </div>
      <div
        className="border-2 border-[#0D0D0D] bg-[#D97B59] px-2 py-1 text-xs font-black text-[#0D0D0D] uppercase shadow-[4px_4px_0_0_#401801] sm:border-[4px] sm:px-3 sm:shadow-[8px_8px_0_0_#401801]"
        style={{
          transform: "rotate(-2deg)",
          imageRendering: "pixelated",
        }}
      >
        Hot
      </div>
    </div>

    {/* Real Image */}
    <img
      src={`https://api.danlevi.no/uploads/${article.gen_image_name}`}
      alt={article.gen_title}
      className="h-48 w-full border-b-4 border-[#0D0D0D] object-cover sm:h-64 sm:border-b-[8px]"
    />

    {/* Enhanced Content */}
    <div className="relative flex grow flex-col justify-between p-4 sm:p-6">
      {/* Background texture for content area */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, rgba(13,13,13,0.05) 0 2px, transparent 2px 12px)",
        }}
      />

      <h4 className="relative z-10 mb-4 text-lg leading-tight font-black sm:mb-6 sm:text-xl">
        {article.gen_title}
      </h4>

      <div className="relative z-10 mt-auto flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
        <div className="text-xs font-black uppercase text-[#401801]">
          By Capt. Drunkbeard
        </div>
        <Link to={`/article/${article.id}`} className="border-3 border-[#0D0D0D] bg-[#D97B59] px-3 py-1 text-xs font-black uppercase shadow-[5px_5px_0_0_#401801] transition-all hover:translate-x-[-1px] hover:translate-y-[-1px] hover:transform hover:shadow-[6px_6px_0_0_#401801] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[3px_3px_0_0_#401801] sm:border-[6px] sm:px-4 sm:py-2 sm:text-sm sm:shadow-[10px_10px_0_0_#401801] sm:hover:translate-x-[-2px] sm:hover:translate-y-[-2px] sm:hover:shadow-[12px_12px_0_0_#401801] sm:active:translate-x-[2px] sm:active:translate-y-[2px] sm:active:shadow-[6px_6px_0_0_#401801]">
          Read Rant
        </Link>
      </div>
    </div>
  </article>
);