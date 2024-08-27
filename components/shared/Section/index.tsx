import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
import { DetailedHTMLProps, HTMLAttributes } from "react";

interface SectionProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  children: React.ReactNode;
  /**
   * @example <Section variant="full-width">Page content here</Section>
   */
  variant?: "max-w-7xl" | "full-width";
}

export default function Section({
  children,
  variant,
  className,
  ...rest
}: SectionProps) {
  const sectionVariants = cva("h-full", {
    variants: {
      variant: {
        "max-w-7xl": "w-full max-w-7xl mx-auto",
        "full-width": "w-full",
      },
    },
    defaultVariants: {
      variant: "max-w-7xl",
    },
  });

  return (
    <section className={cn(sectionVariants({ variant, className }))} {...rest}>
      {children}
    </section>
  );
}
