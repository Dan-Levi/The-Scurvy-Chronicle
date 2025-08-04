import PirateVid from "../../assets/videos/header/pirate_01.mp4";

export const Hero = () => (
  <section className="relative overflow-hidden border-b-4 border-[#0D0D0D] bg-[#FFF8E7] sm:border-b-[8px]">
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
        <div className="absolute -top-2 -right-2 h-6 w-6 border-2 border-[#0D0D0D] bg-[#F23054] shadow-[3px_3px_0_0_#0D0D0D] sm:-top-3 sm:-right-3 sm:h-8 sm:w-8 sm:border-[4px] sm:shadow-[6px_6px_0_0_#0D0D0D]" />
        <div className="absolute -bottom-2 -left-2 h-6 w-6 border-2 border-[#0D0D0D] bg-[#F27F1B] shadow-[3px_3px_0_0_#0D0D0D] sm:-bottom-3 sm:-left-3 sm:h-8 sm:w-8 sm:border-[4px] sm:shadow-[6px_6px_0_0_#0D0D0D]" />
      </div>
    </div>
  </section>
);
