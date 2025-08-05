export const SectionDivider = () => (
  <div className="relative">
    <div className="h-4 w-full border-y-4 border-[#0D0D0D] bg-[#401801] sm:h-8 sm:border-y-[8px]" />
    <div
      className="absolute inset-0 h-4 sm:h-8"
      style={{
        backgroundImage:
          "repeating-linear-gradient(90deg, #401801 0 20px, #D9AE89 20px 40px)",
      }}
    />
    {/* Scattered decorative elements */}
    <div
      className="absolute top-1/2 left-6 h-3 w-3 -translate-y-1/2 border-2 border-[#0D0D0D] bg-[#D97B59] sm:left-10 sm:h-4 sm:w-4 sm:border-[3px]"
      style={{ transform: "translateY(-50%) rotate(45deg)" }}
    />
    <div
      className="absolute top-1/2 right-12 h-3 w-3 -translate-y-1/2 border-2 border-[#0D0D0D] bg-[#D97B59] sm:right-20 sm:h-4 sm:w-4 sm:border-[3px]"
      style={{ transform: "translateY(-50%) rotate(45deg)" }}
    />
    <div
      className="absolute top-1/2 left-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 border-2 border-[#0D0D0D] bg-[#D97B59] sm:h-4 sm:w-4 sm:border-[3px]"
      style={{ transform: "translate(-50%, -50%) rotate(45deg)" }}
    />
  </div>
);