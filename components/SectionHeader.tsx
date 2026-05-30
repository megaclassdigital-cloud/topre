type SectionHeaderProps = {
  label: string;
  title: string;
  description: string;
  inverse?: boolean;
  align?: "center" | "left";
};

export default function SectionHeader({ label, title, description, inverse = false, align = "center" }: SectionHeaderProps) {
  return (
    <div className={align === "center" ? "mx-auto mb-10 max-w-3xl text-center md:mb-12" : "mb-8 max-w-2xl text-center md:text-left"}>
      <div className={align === "center" ? "mb-4 flex justify-center" : "mb-4 flex justify-center md:justify-start"}>
        <span className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold ${
          inverse
            ? "border-white/20 bg-white/10 text-white"
            : "border-topre-light bg-topre-light/60 text-topre-primary"
        }`}>
          <span className="h-1.5 w-1.5 rounded-full bg-topre-yellow" />
          {label}
        </span>
      </div>
      <h2 className={`text-3xl font-black tracking-tight md:text-4xl lg:text-[42px] ${inverse ? "text-white" : "text-topre-navy"}`}>
        {title}
      </h2>
      <p className={`mt-4 text-base leading-8 md:text-lg ${inverse ? "text-blue-100" : "text-slate-600"}`}>
        {description}
      </p>
    </div>
  );
}
