export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-3 ${className}`} aria-label="Risk Consultancy Group">
      <span className="grid size-12 place-items-center rounded-full border-2 border-white text-lg font-semibold tracking-tight text-white">
        RC<span className="text-primary">G</span>
      </span>
      <span className="hidden text-xs font-light uppercase leading-tight tracking-[0.18em] text-white sm:block">
        Risk Consultancy<br />Group
      </span>
    </span>
  );
}
