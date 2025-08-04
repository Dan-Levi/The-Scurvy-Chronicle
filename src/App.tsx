import {
  Skull,
  ChevronLeft,
  ChevronRight,
  Anchor,
  Compass,
  Swords,
} from "lucide-react";
import PirateVid from "./assets/videos/header/pirate_01.mp4";
import { useEffect, useState } from "react";

const API_URL = "https://api.danlevi.no/api/articles_generated?per_page=6";

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
  const [articles, setArticles] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);

  // Real API call
  useEffect(() => {
    const fetchArticles = async () => {
      const res = await fetch(`${API_URL}&page=${currentPage}`);
      const json = await res.json();
      setArticles(json.data);
      setLastPage(json.meta.last_page);
    };
    fetchArticles();
  }, [currentPage]);

  const goToPrevious = () => setCurrentPage((p) => Math.max(1, p - 1));
  const goToNext = () => setCurrentPage((p) => Math.min(lastPage, p + 1));

  return (
    <div className="min-h-screen bg-[#FFF8E7] font-serif text-[#0D0D0D] antialiased">
      {/* ENHANCED TOP STRAP with texture */}
      <div
        className="h-3 w-full border-b-2 border-[#F23054] bg-[#0D0D0D] sm:h-5 sm:border-b-[4px]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, #0D0D0D 0 8px, #1a1a1a 8px 16px)",
        }}
      />

      {/* ENHANCED HEADER with angled elements */}
      <header className="relative overflow-hidden border-b-4 border-[#0D0D0D] bg-[#F2C12E] sm:border-b-[8px]">
        {/* Diagonal accent */}
        <div
          className="absolute top-0 right-0 h-full w-16 border-l-4 border-[#0D0D0D] bg-[#F27F1B] sm:w-32 sm:border-l-[8px]"
          style={{
            clipPath: "polygon(30% 0%, 100% 0%, 100% 100%, 0% 100%)",
            imageRendering: "pixelated",
          }}
        />

        <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-4 sm:flex-row sm:px-6 sm:py-8">
          {/* Logo with enhanced brutalist treatment */}
          <div className="flex items-center gap-2 sm:gap-3">
            <div
              className="border-3 border-[#0D0D0D] bg-[#F23054] p-1 shadow-[4px_4px_0_0_#0D0D0D] sm:border-[6px] sm:p-2 sm:shadow-[8px_8px_0_0_#0D0D0D]"
              style={{
                transform: "rotate(3deg)",
                imageRendering: "pixelated",
              }}
            >
              <Anchor className="h-6 w-6 text-white sm:h-8 sm:w-8" />
            </div>
            <div
              className="border-3 border-[#0D0D0D] bg-[#734319] p-1 shadow-[4px_4px_0_0_#0D0D0D] sm:border-[6px] sm:p-2 sm:shadow-[8px_8px_0_0_#0D0D0D]"
              style={{
                transform: "rotate(-2deg)",
                imageRendering: "pixelated",
              }}
            >
              <Swords className="h-6 w-6 text-white sm:h-8 sm:w-8" />
            </div>
          </div>

          <h1
            className="flex items-center gap-2 text-center text-xl font-black tracking-widest uppercase sm:gap-4 sm:text-left sm:text-2xl md:text-3xl"
            style={{
              transform: "skewX(-3deg)",
              imageRendering: "pixelated",
            }}
          >
            <span className="border-2 border-[#F23054] bg-[#0D0D0D] px-2 py-1 text-[#F2C12E] shadow-[3px_3px_0_0_#F23054] sm:border-[4px] sm:shadow-[6px_6px_0_0_#F23054]">
              The Scurvy
            </span>
            <span className="border-2 border-[#0D0D0D] bg-[#F23054] px-2 py-1 text-white shadow-[3px_3px_0_0_#0D0D0D] sm:border-[4px] sm:shadow-[6px_6px_0_0_#0D0D0D]">
              Chronicle
            </span>
            <Skull
              className="h-8 w-8 sm:h-12 sm:w-12"
              style={{
                transform: "rotate(12deg)",
                imageRendering: "pixelated",
              }}
            />
          </h1>
        </div>
      </header>

      {/* ENHANCED HERO with more dynamic layout */}
      <section className="relative overflow-hidden border-b-4 border-[#0D0D0D] bg-[#FFF8E7] sm:border-b-[8px]">
        {/* Background texture */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `
              repeating-linear-gradient(45deg, rgba(13,13,13,0.1) 0 3px, transparent 3px 12px),
              repeating-linear-gradient(-45deg, rgba(242,48,84,0.05) 0 2px, transparent 2px 15px)
            `,
          }}
        />

        <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 py-12 sm:gap-12 sm:px-6 sm:py-20 lg:grid-cols-2">
          {/* Enhanced Text Block */}
          <div className="order-2 flex flex-col justify-center lg:order-1">
            <div className="mb-4 flex flex-wrap gap-2 sm:mb-6 sm:gap-3">
              <div
                className="inline-block border-3 border-[#0D0D0D] bg-[#F23054] px-3 py-1 text-xs font-black tracking-widest text-white uppercase shadow-[6px_6px_0_0_#0D0D0D] sm:border-[6px] sm:px-4 sm:py-2 sm:text-sm sm:shadow-[12px_12px_0_0_#0D0D0D]"
                style={{
                  transform: "rotate(1deg)",
                  imageRendering: "pixelated",
                }}
              >
                Manifesto
              </div>
              <div
                className="inline-block border-3 border-[#0D0D0D] bg-[#734319] px-3 py-1 text-xs font-black tracking-widest text-white uppercase shadow-[6px_6px_0_0_#0D0D0D] sm:border-[6px] sm:px-4 sm:py-2 sm:text-sm sm:shadow-[12px_12px_0_0_#0D0D0D]"
                style={{
                  transform: "rotate(-2deg)",
                  imageRendering: "pixelated",
                }}
              >
                Est. 1716
              </div>
            </div>

            <h2
              className="mb-4 text-3xl leading-[0.9] font-black sm:mb-6 sm:text-4xl md:text-5xl lg:text-6xl"
              style={{
                transform: "skewY(-1deg)",
                imageRendering: "pixelated",
              }}
            >
              <span className="mb-2 block border-3 border-[#0D0D0D] bg-[#F2C12E] px-2 py-1 shadow-[5px_5px_0_0_#0D0D0D] sm:mb-4 sm:border-[6px] sm:shadow-[10px_10px_0_0_#0D0D0D]">
                THE SCURVY
              </span>
              <span
                className="mb-2 block border-3 border-[#0D0D0D] bg-[#F27F1B] px-2 py-1 text-white shadow-[5px_5px_0_0_#0D0D0D] sm:mb-4 sm:border-[6px] sm:shadow-[10px_10px_0_0_#0D0D0D]"
                style={{ transform: "translateX(8px) sm:translateX(16px)" }}
              >
                CHRONICLE
              </span>
              <span
                className="block text-lg font-black sm:text-xl md:text-2xl lg:text-3xl"
                style={{ transform: "translateX(16px) sm:translateX(32px)" }}
              >
                Gaming news, shouted by a drunk pirate with a broken keyboard.
              </span>
            </h2>

            <div
              className="border-4 border-[#0D0D0D] bg-white p-4 shadow-[8px_8px_0_0_#0D0D0D] sm:border-[8px] sm:p-6 sm:shadow-[16px_16px_0_0_#0D0D0D]"
              style={{
                transform: "rotate(1deg)",
                imageRendering: "pixelated",
              }}
            >
              <p className="text-base leading-relaxed font-bold sm:text-lg">
                Plundered press releases, rage-soaked reviews, and bug reports
                scribbled on rum-stained parchment. No{" "}
                <span className="border-2 border-[#0D0D0D] bg-[#F2C12E] px-1 py-1 font-black sm:border-[3px] sm:px-2">
                  corrections
                </span>
                , no{" "}
                <span className="border-2 border-[#0D0D0D] bg-[#F23054] px-1 py-1 font-black text-white sm:border-[3px] sm:px-2">
                  patch notes
                </span>
                , just unfiltered sea-sick commentary from the brig below deck.
              </p>
            </div>
          </div>

          {/* Real Video with enhanced brutalist frame */}
          <div
            className="relative order-1 lg:order-2"
            style={{
              transform: "rotate(2deg)",
              imageRendering: "pixelated",
            }}
          >
            <div className="border-4 border-[#0D0D0D] bg-[#734319] p-2 shadow-[10px_10px_0_0_#0D0D0D] sm:border-[8px] sm:p-4 sm:shadow-[20px_20px_0_0_#0D0D0D]">
              <video
                src={PirateVid}
                loop
                autoPlay
                muted
                playsInline
                className="w-full"
              >
                Your browser does not support the video tag.
              </video>
            </div>
            {/* Decorative corner elements */}
            <div className="absolute -top-2 -right-2 h-6 w-6 border-2 border-[#0D0D0D] bg-[#F23054] shadow-[3px_3px_0_0_#0D0D0D] sm:-top-3 sm:-right-3 sm:h-8 sm:w-8 sm:border-[4px] sm:shadow-[6px_6px_0_0_#0D0D0D]" />
            <div className="absolute -bottom-2 -left-2 h-6 w-6 border-2 border-[#0D0D0D] bg-[#F27F1B] shadow-[3px_3px_0_0_#0D0D0D] sm:-bottom-3 sm:-left-3 sm:h-8 sm:w-8 sm:border-[4px] sm:shadow-[6px_6px_0_0_#0D0D0D]" />
          </div>
        </div>
      </section>

      {/* ENHANCED SECTION DIVIDER with more visual interest */}
      <div className="relative">
        <div className="h-4 w-full border-y-4 border-[#0D0D0D] bg-[#734319] sm:h-8 sm:border-y-[8px]" />
        <div
          className="absolute inset-0 h-4 sm:h-8"
          style={{
            backgroundImage:
              "repeating-linear-gradient(90deg, #734319 0 20px, #8B5A2B 20px 40px)",
          }}
        />
        {/* Scattered decorative elements */}
        <div
          className="absolute top-1/2 left-6 h-3 w-3 -translate-y-1/2 border-2 border-[#0D0D0D] bg-[#F23054] sm:left-10 sm:h-4 sm:w-4 sm:border-[3px]"
          style={{ transform: "translateY(-50%) rotate(45deg)" }}
        />
        <div
          className="absolute top-1/2 right-12 h-3 w-3 -translate-y-1/2 border-2 border-[#0D0D0D] bg-[#F2C12E] sm:right-20 sm:h-4 sm:w-4 sm:border-[3px]"
          style={{ transform: "translateY(-50%) rotate(45deg)" }}
        />
        <div
          className="absolute top-1/2 left-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 border-2 border-[#0D0D0D] bg-[#F27F1B] sm:h-4 sm:w-4 sm:border-[3px]"
          style={{ transform: "translate(-50%, -50%) rotate(45deg)" }}
        />
      </div>

      {/* ENHANCED ARTICLE FEED */}
      <section className="relative overflow-hidden border-b-4 border-[#0D0D0D] bg-[#FFF8E7] px-4 py-12 sm:border-b-[8px] sm:px-6 sm:py-20">
        {/* Enhanced background pattern */}
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
              <article
                key={a.id}
                className={`group relative flex min-h-[420px] flex-col justify-between border-4 border-[#0D0D0D] bg-white shadow-[8px_8px_0_0_#0D0D0D] transition-all duration-200 hover:translate-x-[-2px] hover:translate-y-[-2px] hover:transform hover:shadow-[10px_10px_0_0_#0D0D0D] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[4px_4px_0_0_#0D0D0D] sm:min-h-[520px] sm:border-[8px] sm:shadow-[16px_16px_0_0_#0D0D0D] sm:hover:translate-x-[-4px] sm:hover:translate-y-[-4px] sm:hover:shadow-[20px_20px_0_0_#0D0D0D] sm:active:translate-x-[4px] sm:active:translate-y-[4px] sm:active:shadow-[8px_8px_0_0_#0D0D0D]`}
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
                    className="border-2 border-[#0D0D0D] bg-[#F23054] px-2 py-1 text-xs font-black text-white uppercase shadow-[4px_4px_0_0_#0D0D0D] sm:border-[4px] sm:px-3 sm:shadow-[8px_8px_0_0_#0D0D0D]"
                    style={{
                      transform: "rotate(3deg)",
                      imageRendering: "pixelated",
                    }}
                  >
                    Gaming
                  </div>
                  <div
                    className="border-2 border-[#0D0D0D] bg-[#F27F1B] px-2 py-1 text-xs font-black text-white uppercase shadow-[4px_4px_0_0_#0D0D0D] sm:border-[4px] sm:px-3 sm:shadow-[8px_8px_0_0_#0D0D0D]"
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
                  src={`https://api.danlevi.no/uploads/${a.gen_image_name}`}
                  alt={a.gen_title}
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
                    {a.gen_title}
                  </h4>

                  <div className="relative z-10 mt-auto flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
                    <div className="text-xs font-black uppercase opacity-60">
                      By Capt. Drunkbeard
                    </div>
                    <button className="border-3 border-[#0D0D0D] bg-[#F2C12E] px-3 py-1 text-xs font-black uppercase shadow-[5px_5px_0_0_#0D0D0D] transition-all hover:translate-x-[-1px] hover:translate-y-[-1px] hover:transform hover:shadow-[6px_6px_0_0_#0D0D0D] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[3px_3px_0_0_#0D0D0D] sm:border-[6px] sm:px-4 sm:py-2 sm:text-sm sm:shadow-[10px_10px_0_0_#0D0D0D] sm:hover:translate-x-[-2px] sm:hover:translate-y-[-2px] sm:hover:shadow-[12px_12px_0_0_#0D0D0D] sm:active:translate-x-[2px] sm:active:translate-y-[2px] sm:active:shadow-[6px_6px_0_0_#0D0D0D]">
                      Read Rant
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* ENHANCED PAGINATION CONTROLS */}
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

      {/* ENHANCED CALLOUT with more dynamic layout */}
      <section
        id="about"
        className="relative overflow-hidden border-b-4 border-[#0D0D0D] bg-[#F23054] px-4 py-16 text-white sm:border-b-[8px] sm:px-6 sm:py-24"
      >
        {/* Background elements */}
        <div
          className="absolute top-6 left-6 h-12 w-12 border-3 border-white opacity-20 sm:top-10 sm:left-10 sm:h-16 sm:w-16 sm:border-[6px]"
          style={{ transform: "rotate(45deg)" }}
        />
        <div
          className="absolute right-6 bottom-6 h-16 w-16 border-3 border-white opacity-20 sm:right-10 sm:bottom-10 sm:h-20 sm:w-20 sm:border-[6px]"
          style={{ transform: "rotate(-12deg)" }}
        />
        <div
          className="absolute top-1/2 left-1/4 h-8 w-8 border-3 border-[#F2C12E] opacity-30 sm:h-12 sm:w-12 sm:border-[6px]"
          style={{ transform: "rotate(12deg)" }}
        />

        <div className="relative z-10 mx-auto max-w-6xl">
          <div className="grid grid-cols-1 items-center gap-8 sm:gap-12 lg:grid-cols-2">
            <div>
              <h4
                className="mb-6 text-2xl font-black tracking-widest text-white uppercase sm:mb-8 sm:text-3xl md:text-4xl"
                style={{
                  transform: "skewY(-2deg)",
                  imageRendering: "pixelated",
                }}
              >
                <span className="mb-2 inline-block border-3 border-[#0D0D0D] bg-white px-2 py-1 text-[#F23054] shadow-[6px_6px_0_0_#0D0D0D] sm:mb-4 sm:border-[6px] sm:px-3 sm:py-2 sm:shadow-[12px_12px_0_0_#0D0D0D]">
                  Brutal.
                </span>
                <br />
                <span
                  className="mb-2 inline-block border-3 border-white bg-[#0D0D0D] px-2 py-1 text-[#F2C12E] shadow-[6px_6px_0_0_white] sm:mb-4 sm:border-[6px] sm:px-3 sm:py-2 sm:shadow-[12px_12px_0_0_white]"
                  style={{ transform: "translateX(8px) sm:translateX(32px)" }}
                >
                  Belligerent.
                </span>
                <br />
                <span
                  className="inline-block border-3 border-[#F27F1B] bg-[#734319] px-2 py-1 text-white shadow-[6px_6px_0_0_#F27F1B] sm:border-[6px] sm:px-3 sm:py-2 sm:shadow-[12px_12px_0_0_#F27F1B]"
                  style={{ transform: "translateX(16px) sm:translateX(64px)" }}
                >
                  Buggy.
                </span>
              </h4>
            </div>

            <div
              className="border-4 border-white bg-[#0D0D0D] p-4 shadow-[10px_10px_0_0_white] sm:border-[8px] sm:p-8 sm:shadow-[20px_20px_0_0_white]"
              style={{
                transform: "rotate(2deg)",
                imageRendering: "pixelated",
              }}
            >
              <p className="mb-3 text-lg leading-relaxed font-bold text-white sm:mb-4 sm:text-xl">
                These pages be scrawled in grog and guesswork — loud borders,
                louder opinions, and zero QA testing.
              </p>
              <p className="text-base leading-relaxed text-white opacity-90 sm:text-lg">
                We publish what we can't remember shouting, and edit only when
                the rum runs out.
              </p>
              <div className="mt-4 flex gap-2 sm:mt-6 sm:gap-3">
                <div className="h-2 w-6 border-2 border-white bg-[#F2C12E] sm:w-8 sm:border-[3px]" />
                <div className="h-2 w-6 border-2 border-white bg-[#F27F1B] sm:w-8 sm:border-[3px]" />
                <div className="h-2 w-6 border-2 border-white bg-[#F23054] sm:w-8 sm:border-[3px]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ENHANCED FOOTER */}
      <footer className="relative overflow-hidden border-t-4 border-[#0D0D0D] bg-[#F2C12E] sm:border-t-[8px]">
        {/* Background pattern */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, rgba(13,13,13,0.1) 0 4px, transparent 4px 16px)",
          }}
        />

        <div className="relative z-10 mx-auto flex max-w-7xl flex-col flex-wrap items-center justify-between gap-4 px-4 py-6 sm:flex-row sm:px-6 sm:py-8">
          <div className="text-center sm:text-left">
            <p className="mb-1 text-xs font-black tracking-widest uppercase sm:mb-2 sm:text-sm">
              © {new Date().getFullYear()} The Scurvy Chronicle
            </p>
            <p className="text-xs font-bold opacity-75">
              Ink, Iron, & Interference — Since the Golden Age of Piracy
            </p>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <div className="flex gap-1 sm:gap-2">
              <span
                className="h-3 w-12 border-2 border-[#0D0D0D] bg-[#F27F1B] shadow-[4px_4px_0_0_#0D0D0D] sm:h-4 sm:w-20 sm:border-[4px] sm:shadow-[8px_8px_0_0_#0D0D0D]"
                style={{
                  transform: "rotate(2deg)",
                  imageRendering: "pixelated",
                }}
              />
              <span
                className="h-3 w-12 border-2 border-[#0D0D0D] bg-[#734319] shadow-[4px_4px_0_0_#0D0D0D] sm:h-4 sm:w-20 sm:border-[4px] sm:shadow-[8px_8px_0_0_#0D0D0D]"
                style={{
                  transform: "rotate(-1deg)",
                  imageRendering: "pixelated",
                }}
              />
              <span
                className="h-3 w-12 border-2 border-[#0D0D0D] bg-[#F23054] shadow-[4px_4px_0_0_#0D0D0D] sm:h-4 sm:w-20 sm:border-[4px] sm:shadow-[8px_8px_0_0_#0D0D0D]"
                style={{
                  transform: "rotate(1deg)",
                  imageRendering: "pixelated",
                }}
              />
            </div>
            <div className="border-2 border-[#0D0D0D] bg-[#0D0D0D] p-1 shadow-[3px_3px_0_0_#F23054] sm:border-[4px] sm:p-2 sm:shadow-[6px_6px_0_0_#F23054]">
              <Skull className="h-4 w-4 text-[#F2C12E] sm:h-6 sm:w-6" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
