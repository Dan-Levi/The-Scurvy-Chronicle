import { Skull } from "lucide-react";

export const Footer = () => (
  <footer className="relative overflow-hidden border-t-4 border-[#0D0D0D] bg-[#401801] sm:border-t-[8px]">
    <div
      className="absolute inset-0 opacity-20"
      style={{
        backgroundImage:
          "repeating-linear-gradient(45deg, rgba(13,13,13,0.1) 0 4px, transparent 4px 16px)",
      }}
    />

    <div className="relative z-10 mx-auto flex max-w-7xl flex-col flex-wrap items-center justify-between gap-4 px-4 py-6 sm:flex-row sm:px-6 sm:py-8">
      <div className="text-center sm:text-left">
        <p className="mb-1 text-xs font-black tracking-widest uppercase text-[#F2E2CE] sm:mb-2 sm:text-sm">
          © {new Date().getFullYear()} The Scurvy Chronicle
        </p>
        <p className="text-xs font-bold text-[#F2E2CE] opacity-75 sm:text-lg">
          Ink, Iron, & Interference — Since the Golden Age of Piracy
        </p>
      </div>

      <div className="flex items-center gap-2 sm:gap-3">
        <div className="flex gap-1 sm:gap-2">
          <span
            className="h-3 w-12 border-2 border-[#0D0D0D] bg-[#D97B59] shadow-[4px_4px_0_0_#401801] sm:h-4 sm:w-20 sm:border-[4px] sm:shadow-[8px_8px_0_0_#401801]"
            style={{
              transform: "rotate(2deg)",
              imageRendering: "pixelated",
            }}
          />
          <span
            className="h-3 w-12 border-2 border-[#0D0D0D] bg-[#401801] shadow-[4px_4px_0_0_#0D0D0D] sm:h-4 sm:w-20 sm:border-[4px] sm:shadow-[8px_8px_0_0_#0D0D0D]"
            style={{
              transform: "rotate(-1deg)",
              imageRendering: "pixelated",
            }}
          />
          <span
            className="h-3 w-12 border-2 border-[#0D0D0D] bg-[#D97B59] shadow-[4px_4px_0_0_#401801] sm:h-4 sm:w-20 sm:border-[4px] sm:shadow-[8px_8px_0_0_#401801]"
            style={{
              transform: "rotate(1deg)",
              imageRendering: "pixelated",
            }}
          />
        </div>
        <div className="border-2 border-[#0D0D0D] bg-[#0D0D0D] p-1 shadow-[3px_3px_0_0_#401801] sm:border-[4px] sm:p-2 sm:shadow-[6px_6px_0_0_#401801]">
          <Skull className="h-4 w-4 text-[#F2E2CE] sm:h-6 sm:w-6" />
        </div>
      </div>
    </div>
  </footer>
);
