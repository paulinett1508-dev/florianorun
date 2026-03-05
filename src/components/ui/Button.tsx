import { cn } from "@/lib/utils";

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "outline" | "white";
  size?: "sm" | "md" | "lg";
  className?: string;
  pulse?: boolean;
};

export default function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className,
  pulse = false,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-heading font-bold uppercase tracking-wider rounded-full transition-all duration-300 cursor-pointer";

  const variants = {
    primary:
      "bg-orange-vibrant text-white hover:bg-orange-vibrant-dark hover:scale-105 shadow-lg shadow-orange-vibrant/30",
    outline:
      "border-2 border-white text-white hover:bg-white hover:text-blue-petroleo",
    white:
      "bg-white text-blue-petroleo hover:bg-gray-100 hover:scale-105 shadow-lg",
  };

  const sizes = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };

  const classes = cn(
    baseStyles,
    variants[variant],
    sizes[size],
    pulse && "animate-pulse-slow",
    className
  );

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
      >
        {children}
      </a>
    );
  }

  return <button className={classes}>{children}</button>;
}
