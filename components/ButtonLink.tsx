import type { AnchorHTMLAttributes, ReactNode } from "react";

type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: "primary" | "secondary" | "white";
  children: ReactNode;
};

export default function ButtonLink({ variant = "primary", children, className = "", ...props }: ButtonLinkProps) {
  const styles = {
    primary:
      "bg-topre-primary text-white hover:bg-topre-navy border border-topre-primary shadow-card",
    secondary:
      "bg-white text-topre-primary border border-topre-primary hover:bg-topre-light",
    white:
      "bg-white text-topre-primary border border-white hover:bg-topre-light",
  }[variant];

  return (
    <a
      className={`focus-ring inline-flex min-h-12 items-center justify-center rounded-full px-6 py-3 text-center text-sm font-bold transition ${styles} ${className}`}
      {...props}
    >
      {children}
    </a>
  );
}
