import { site } from "@/lib/site";

export function PreviewBanner() {
  return (
    <p className="relative z-[60] border-b border-gold/20 bg-navy-950 px-4 py-2 text-center font-mono text-[10px] leading-relaxed tracking-[0.12em] text-gold/80 uppercase sm:text-[11px]">
      <span className="sm:hidden">Private design concept — not an official website.</span>
      <span className="hidden sm:inline">{site.preview}</span>
    </p>
  );
}
