import PirateVidMp4 from "../../assets/videos/header/pirate_02.mp4";
import PirateVidWebm from "../../assets/videos/header/pirate_02.webm";
import PiratePoster from "../../assets/images/ui/pirate.png";

export const Hero = () => (
  <section className="relative overflow-hidden border-b-4 border-[#0D0D0D] bg-[#D9AE89] sm:border-b-[8px]">
    <div
      className="absolute inset-0 opacity-30"
      style={{
        backgroundImage: `
          repeating-linear-gradient(45deg, rgba(13,13,13,0.1) 0 3px, transparent 3px 12px),
          repeating-linear-gradient(-45deg, rgba(64,24,1,0.05) 0 2px, transparent 2px 15px)
        `,
      }}
    />

    <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 py-12 sm:gap-12 sm:px-6 sm:py-20 lg:grid-cols-2">
      <div className="order-2 flex flex-col justify-center lg:order-1">
        <div className="mb-4 flex flex-wrap gap-2 sm:mb-6 sm:gap-3">
          <div
            className="inline-block border-3 border-[#0D0D0D] bg-[#D97B59] px-3 py-1 text-xs font-black tracking-widest text-[#0D0D0D] uppercase shadow-[6px_6px_0_0_#401801] sm:border-[6px] sm:px-4 sm:py-2 sm:text-sm sm:shadow-[12px_12px_0_0_#401801]"
            style={{
              transform: "rotate(1deg)",
              imageRendering: "pixelated",
            }}
          >
            Manifesto
          </div>
          <div
            className="inline-block border-3 border-[#0D0D0D] bg-[#401801] px-3 py-1 text-xs font-black tracking-widest text-[#F2E2CE] uppercase shadow-[6px_6px_0_0_#0D0D0D] sm:border-[6px] sm:px-4 sm:py-2 sm:text-sm sm:shadow-[12px_12px_0_0_#0D0D0D]"
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
          <span className="mb-2 block border-3 border-[#0D0D0D] bg-[#F2E2CE] px-2 py-1 shadow-[5px_5px_0_0_#401801] sm:mb-4 sm:border-[6px] sm:shadow-[10px_10px_0_0_#401801]">
            THE SCURVY
          </span>
          <span
            className="mb-2 block border-3 border-[#0D0D0D] bg-[#D97B59] px-2 py-1 text-[#0D0D0D] shadow-[5px_5px_0_0_#401801] sm:mb-4 sm:border-[6px] sm:shadow-[10px_10px_0_0_#401801]"
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
          className="border-4 border-[#0D0D0D] bg-[#F2E2CE] p-4 shadow-[8px_8px_0_0_#401801] sm:border-[8px] sm:p-6 sm:shadow-[16px_16px_0_0_#401801]"
          style={{
            transform: "rotate(1deg)",
            imageRendering: "pixelated",
          }}
        >
          <p className="text-base leading-relaxed font-bold text-[#0D0D0D] sm:text-lg">
            Plundered press releases, rage-soaked reviews, and bug reports
            scribbled on rum-stained parchment. No{" "}
            <span className="border-2 border-[#0D0D0D] bg-[#F2E2CE] px-1 py-1 font-black sm:border-[3px] sm:px-2">
              corrections
            </span>
            , no{" "}
            <span className="border-2 border-[#0D0D0D] bg-[#D97B59] px-1 py-1 font-black text-[#0D0D0D] sm:border-[3px] sm:px-2">
              patch notes
            </span>
            , just unfiltered sea-sick commentary from the brig below deck.
          </p>
        </div>
      </div>

      <div
        className="relative order-1 flex items-center justify-center lg:order-2"
        style={{
          transform: "rotate(2deg)",
          imageRendering: "pixelated",
        }}
      >
        <div className="border-4 border-[#0D0D0D] bg-[#0D0D0D] p-2 shadow-[10px_10px_0_0_#401801] sm:border-[8px] sm:p-4 sm:shadow-[20px_20px_0_0_#401801]">
          <video
            loop
            autoPlay
            muted
            playsInline
            poster={PiratePoster}
            className="w-full"
          >
            <source src={PirateVidWebm} type="video/webm" />
            <source src={PirateVidMp4} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  </section>
);
