import BlurIn from "./ui/BlurIn";

export function BlurInHeroMessage() {
  return (
    <BlurIn
    word={<>
          Beautiful.Fast. 
          Private. <br />
          Your Browser, Your Way.
        </>}
      className="font-Inter font-bold text-[45px] leading-none md:text-7xl 
          mt-5  md:mt-2  px-6 text-center 
          bg-clip-text text-transparent 
          bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50"
      duration={1.2}
    />
  );
}
