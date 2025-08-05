export const Callout = () => (
  <section
    id="about"
    className="relative overflow-hidden border-b-4 border-[#0D0D0D] bg-[#D97B59] px-4 py-16 text-[#0D0D0D] sm:border-b-[8px] sm:px-6 sm:py-24"
  >
    <div
      className="absolute top-6 left-6 h-12 w-12 border-3 border-[#F2E2CE] opacity-20 sm:top-10 sm:left-10 sm:h-16 sm:w-16 sm:border-[6px]"
      style={{ transform: "rotate(45deg)" }}
    />
    <div
      className="absolute right-6 bottom-6 h-16 w-16 border-3 border-[#F2E2CE] opacity-20 sm:right-10 sm:bottom-10 sm:h-20 sm:w-20 sm:border-[6px]"
      style={{ transform: "rotate(-12deg)" }}
    />
    <div
      className="absolute top-1/2 left-1/4 h-8 w-8 border-3 border-[#D97B59] opacity-30 sm:h-12 sm:w-12 sm:border-[6px]"
      style={{ transform: "rotate(12deg)" }}
    />

    <div className="relative z-10 mx-auto max-w-6xl">
      <div className="grid grid-cols-1 items-center gap-8 sm:gap-12 lg:grid-cols-2">
        <div>
          <h4
            className="mb-6 text-2xl font-black tracking-widest text-[#0D0D0D] uppercase sm:mb-8 sm:text-3xl md:text-4xl"
            style={{
              transform: "skewY(-2deg)",
              imageRendering: "pixelated",
            }}
          >
            <span className="mb-2 inline-block border-3 border-[#0D0D0D] bg-[#F2E2CE] px-2 py-1 text-[#0D0D0D] shadow-[6px_6px_0_0_#401801] sm:mb-4 sm:border-[6px] sm:px-3 sm:py-2 sm:shadow-[12px_12px_0_0_#401801]">
              Brutal.
            </span>
            <br />
            <span
              className="mb-2 inline-block border-3 border-[#F2E2CE] bg-[#0D0D0D] px-2 py-1 text-[#D97B59] shadow-[6px_6px_0_0_#401801] sm:mb-4 sm:border-[6px] sm:px-3 sm:py-2 sm:shadow-[12px_12px_0_0_#401801]"
              style={{ transform: "translateX(8px) sm:translateX(32px)" }}
            >
              Belligerent.
            </span>
            <br />
            <span
              className="inline-block border-3 border-[#0D0D0D] bg-[#D97B59] px-2 py-1 text-[#F2E2CE] shadow-[6px_6px_0_0_#401801] sm:border-[6px] sm:px-3 sm:py-2 sm:shadow-[12px_12px_0_0_#401801]"
              style={{ transform: "translateX(16px) sm:translateX(64px)" }}
            >
              Buggy.
            </span>
          </h4>
        </div>

        <div
          className="border-4 border-[#0D0D0D] bg-[#0D0D0D] p-4 shadow-[10px_10px_0_0_#401801] sm:border-[8px] sm:p-8 sm:shadow-[20px_20px_0_0_#401801]"
          style={{
            transform: "rotate(2deg)",
            imageRendering: "pixelated",
          }}
        >
          <p className="mb-3 text-lg leading-relaxed font-bold text-[#F2E2CE] sm:mb-4 sm:text-xl">
            These pages be scrawled in grog and guesswork — loud borders,
            louder opinions, and zero QA testing.
          </p>
          <p className="text-base leading-relaxed text-[#F2E2CE] opacity-90 sm:text-lg">
            We publish what we can't remember shouting, and edit only when
            the rum runs out.
          </p>
          <div className="mt-4 flex gap-2 sm:mt-6 sm:gap-3">
            <div className="h-2 w-6 border-2 border-[#0D0D0D] bg-[#D97B59] sm:w-8 sm:border-[3px]" />
            <div className="h-2 w-6 border-2 border-[#0D0D0D] bg-[#D97B59] sm:w-8 sm:border-[3px]" />
            <div className="h-2 w-6 border-2 border-[#0D0D0D] bg-[#D97B59] sm:w-8 sm:border-[3px]" />
          </div>
        </div>
      </div>
    </div>
  </section>
);
