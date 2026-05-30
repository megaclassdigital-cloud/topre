import type { SVGProps } from "react";

export function BrandMark() {
  return (
    <div className="flex items-center gap-3" aria-label="Topre Refrigerated Vehicle">
      <div className="relative flex h-10 w-10 items-center justify-center rounded-2xl border border-topre-light bg-white shadow-card">
        <svg viewBox="0 0 42 42" className="h-7 w-7" aria-hidden="true">
          <path d="M7 28L14 11H35L31 17H19L17.8 20H30L26.8 26H15.4L14.6 28H7Z" fill="#1E3A8A" />
          <path d="M8 31H28" stroke="#FACC15" strokeWidth="3" strokeLinecap="round" />
        </svg>
      </div>
      <div className="leading-tight">
        <p className="text-lg font-black tracking-tight text-topre-primary">Topre</p>
        <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-slate-500">Refrigerated Vehicle</p>
      </div>
    </div>
  );
}

export function CoolingTruckIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 620 360" fill="none" role="img" aria-label="Mockup refrigerated truck Topre" {...props}>
      <rect x="20" y="28" width="580" height="304" rx="34" fill="#F8FAFC" />
      <rect x="130" y="95" width="330" height="142" rx="14" fill="white" stroke="#1E3A8A" strokeWidth="6" />
      <path d="M459 139H514C531 139 544 152 544 169V237H459V139Z" fill="white" stroke="#1E3A8A" strokeWidth="6" />
      <path d="M492 152H517C525 152 532 159 532 167V184H492V152Z" fill="#DBEAFE" stroke="#2563EB" strokeWidth="4" />
      <path d="M146 115H442" stroke="#DBEAFE" strokeWidth="8" strokeLinecap="round" />
      <path d="M146 139H378" stroke="#DBEAFE" strokeWidth="8" strokeLinecap="round" />
      <path d="M168 237H522" stroke="#0F172A" strokeWidth="8" strokeLinecap="round" />
      <circle cx="218" cy="249" r="32" fill="#0F172A" />
      <circle cx="218" cy="249" r="14" fill="white" />
      <circle cx="462" cy="249" r="32" fill="#0F172A" />
      <circle cx="462" cy="249" r="14" fill="white" />
      <rect x="162" y="116" width="72" height="42" rx="10" fill="#1E3A8A" />
      <path d="M176 139H219" stroke="white" strokeWidth="7" strokeLinecap="round" />
      <path d="M182 130H212" stroke="#FACC15" strokeWidth="6" strokeLinecap="round" />
      <rect x="316" y="112" width="82" height="52" rx="14" fill="#DBEAFE" stroke="#2563EB" strokeWidth="4" />
      <path d="M335 138H378" stroke="#2563EB" strokeWidth="7" strokeLinecap="round" />
      <path d="M357 120V156" stroke="#2563EB" strokeWidth="6" strokeLinecap="round" />
      <path d="M88 237H130" stroke="#1E3A8A" strokeWidth="6" strokeLinecap="round" />
      <path d="M90 207H122" stroke="#FACC15" strokeWidth="6" strokeLinecap="round" />
      <circle cx="84" cy="207" r="5" fill="#FACC15" />
    </svg>
  );
}

export function ArrowRightIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

export function MenuIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" {...props}>
      <path d="M4 7h16" />
      <path d="M4 12h16" />
      <path d="M4 17h16" />
    </svg>
  );
}

export function CloseIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" {...props}>
      <path d="M6 6l12 12" />
      <path d="M18 6L6 18" />
    </svg>
  );
}

export function CheckIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="m5 12 4 4L19 6" />
    </svg>
  );
}

export function IndustryIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M4 19V8l4 3V8l4 3V7h8v12H4Z" />
      <path d="M8 19v-4h3v4" />
      <path d="M15 11h2" />
      <path d="M15 15h2" />
    </svg>
  );
}

export function ShieldIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M12 3 5 6v5c0 4.5 2.8 8.4 7 10 4.2-1.6 7-5.5 7-10V6l-7-3Z" />
      <path d="m9 12 2 2 4-5" />
    </svg>
  );
}

export function SnowIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M12 3v18" />
      <path d="m6 6 12 12" />
      <path d="M6 18 18 6" />
      <path d="m8 3 4 4 4-4" />
      <path d="m8 21 4-4 4 4" />
    </svg>
  );
}

export function TrashIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M3 6h18" />
      <path d="M8 6V4h8v2" />
      <path d="M19 6l-1 14H6L5 6" />
      <path d="M10 11v5" />
      <path d="M14 11v5" />
    </svg>
  );
}

export function WhatsappIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12.04 2.2A9.74 9.74 0 0 0 3.6 16.8L2.2 21.8l5.15-1.35A9.75 9.75 0 1 0 12.04 2.2Zm0 1.85a7.9 7.9 0 0 1 6.72 12.07 7.9 7.9 0 0 1-9.93 2.74l-.36-.18-3.06.8.82-2.98-.2-.38a7.9 7.9 0 0 1 6.01-12.07Zm-3.4 3.97c-.18 0-.47.07-.72.35-.25.27-.95.93-.95 2.26s.98 2.62 1.12 2.8c.14.18 1.9 3.03 4.73 4.12 2.35.93 2.84.75 3.35.7.51-.05 1.65-.67 1.88-1.33.23-.65.23-1.21.16-1.33-.07-.11-.25-.18-.53-.32-.28-.14-1.65-.81-1.9-.9-.26-.1-.45-.14-.64.14-.18.28-.73.9-.9 1.08-.16.18-.33.2-.61.07-.28-.14-1.17-.43-2.23-1.38-.83-.74-1.38-1.65-1.54-1.93-.16-.28-.02-.43.12-.57.13-.13.28-.33.42-.49.14-.16.18-.28.28-.46.09-.18.05-.35-.03-.49-.07-.14-.63-1.54-.88-2.1-.23-.55-.47-.48-.65-.49h-.56Z" />
    </svg>
  );
}
