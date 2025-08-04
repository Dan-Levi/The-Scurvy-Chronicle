import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { Article } from "../types/article";
import "../article.css";

export const ArticlePage = () => {
  const { id } = useParams<{ id: string }>();
  const [article, setArticle] = useState<Article | null>(null);

  useEffect(() => {
    const fetchArticle = async () => {
      const res = await fetch(`https://api.danlevi.no/api/articles_generated/${id}`);
      const json = await res.json();
      setArticle(json);
    };
    fetchArticle();
  }, [id]);

  if (!article) {
    return (
      <div className="flex h-screen items-center justify-center bg-[#FFF8E7]">
        <div className="animate-ping text-4xl">☠️</div>
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden border-b-4 border-[#0D0D0D] bg-[#FFF8E7] px-4 py-12 sm:border-b-[8px] sm:px-6 sm:py-20">
      <div className="relative z-10 mx-auto max-w-4xl">
        <h1
          className="mb-8 text-3xl font-black tracking-widest uppercase sm:mb-12 sm:text-4xl md:text-5xl"
          style={{
            transform: "skewX(-2deg)",
            imageRendering: "pixelated",
          }}
        >
          <span className="mb-2 inline-block border-3 border-[#0D0D0D] bg-[#F23054] px-2 py-1 text-white shadow-[5px_5px_0_0_#0D0D0D] sm:border-[6px] sm:px-3 sm:py-2 sm:shadow-[10px_10px_0_0_#0D0D0D]">
            {article.gen_title}
          </span>
        </h1>
        <div
          className="relative mb-12"
          style={{
            transform: "rotate(1deg)",
            imageRendering: "pixelated",
          }}
        >
          <img
            src={`https://api.danlevi.no/uploads/${article.gen_image_name}`}
            alt={article.gen_title}
            className="w-full border-4 border-[#0D0D0D] object-cover shadow-[10px_10px_0_0_#0D0D0D] sm:border-[8px] sm:shadow-[20px_20px_0_0_#0D0D0D]"
          />
          <div className="absolute -top-2 -right-2 h-6 w-6 border-2 border-[#0D0D0D] bg-[#F2C12E] shadow-[3px_3px_0_0_#0D0D0D] sm:-top-3 sm:-right-3 sm:h-8 sm:w-8 sm:border-[4px] sm:shadow-[6px_6px_0_0_#0D0D0D]" />
          <div className="absolute -bottom-2 -left-2 h-6 w-6 border-2 border-[#0D0D0D] bg-[#F27F1B] shadow-[3px_3px_0_0_#0D0D0D] sm:-bottom-3 sm:-left-3 sm:h-8 sm:w-8 sm:border-[4px] sm:shadow-[6px_6px_0_0_#0D0D0D]" />
        </div>

        <div
          className="article-content"
          dangerouslySetInnerHTML={{ __html: article.gen_html || "" }}
        />
      </div>
    </div>
  );
};