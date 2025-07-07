import { cn } from "@/lib/utils";
import { MotionWrapper } from "./motion-wrapper";

type SectionHeaderProps = {
  title: string;
  subtitle?: string;
  className?: string;
};

export function SectionHeader({ title, subtitle, className }: SectionHeaderProps) {
  return (
    <MotionWrapper
      className={cn("max-w-2xl mx-auto text-center", className)}
    >
      <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl font-headline">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg text-muted-foreground">{subtitle}</p>
      )}
    </MotionWrapper>
  );
}
