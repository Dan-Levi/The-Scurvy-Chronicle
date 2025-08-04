import { Anchor, Skull, Swords } from "lucide-react";
import { Link } from "react-router-dom";

export const Header = () => (
  <header className="relative overflow-hidden border-b-4 border-[#0D0D0D] bg-[#F2C12E] sm:border-b-[8px]">
    <div
      className="absolute top-0 right-0 h-full w-16 border-l-4 border-[#0D0D0D] bg-[#F27F1B] sm:w-32 sm:border-l-[8px]"
      style={{
        clipPath: "polygon(30% 0%, 100% 0%, 100% 100%, 0% 100%)",
        imageRendering: "pixelated",
      }}
    />

    <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-4 sm:flex-row sm:px-6 sm:py-8">
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

      <Link to="/" className="group">
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
            className="skull-icon h-8 w-8 sm:h-12 sm:w-12"
            style={{
              transform: "rotate(12deg)",
              imageRendering: "pixelated",
            }}
          />
        </h1>
      </Link>
    </div>
  </header>
);
