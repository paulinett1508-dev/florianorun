import { cn } from "@/lib/utils";

export default function SectionHeading({
  children,
  subtitle,
  className,
  light = false,
}: {
  children: React.ReactNode;
  subtitle?: string;
  className?: string;
  light?: boolean;
}) {
  return (
    <div className={cn("text-center mb-12", className)}>
      <h2
        className={cn(
          "font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold italic uppercase tracking-tight",
          light ? "text-white" : "text-white"
        )}
      >
        {children}
      </h2>
      <div className="mt-4 mx-auto h-1 w-20 rounded-full bg-orange-vibrant" />
      {subtitle && (
        <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}
