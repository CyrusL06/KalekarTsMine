import { ArrowRight } from 'lucide-react';
import { cn } from "../lib/utils";
import AnimatedShinyText from "../components/ui/AnimatedShinyText";

export function AnimatedShinyTextDemo() {
  return (
    <div className="z-10 flex items-center justify-center p-0 sm:w-full md:w-auto">
      <div className={cn(
        "group rounded-full border text-base text-white hover:cursor-pointer hover:bg-neutral-200 dark:bg-neutral-900 dark:hover:bg-neutral-800",
        "p-0" // Remove default padding
      )}>
        <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 hover:text-neutral-600 hover:dark:text-neutral-400">
          <span className="m-0 p-0 text-gray-300">✨ Introducing Magic UI</span>
          <ArrowRight className="ml-1 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
        </AnimatedShinyText>
      </div>
    </div>
  );
}