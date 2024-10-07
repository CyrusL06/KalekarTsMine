import BlurIn from "./ui/BlurIn";

export function BlurInParagraph() {
  return (
    <BlurIn
    word={<>
         Beautifully designed, privacy-focused, and packed with features.
         We care about your experience, not your data.
        </>}
      className="mt-10 text-base md:text-base sm:text-xs font-Poppins"
      duration={1.7}
    />
  );
}
