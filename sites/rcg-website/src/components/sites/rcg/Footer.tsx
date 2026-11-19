import { Logo } from "./Logo";
import { nav } from "./config";

export function Footer() {
  return (
    <footer className="bg-black px-6 py-16 text-white lg:px-16">
      <div className="grid gap-12 lg:grid-cols-[1fr_2fr]">
        <Logo />
        <nav aria-label="Footer" className="grid gap-3 text-sm font-light sm:grid-cols-3">
          {nav.map((n) => (
            <a key={n.href} href={n.href} className="hover:text-primary">{n.label}</a>
          ))}
        </nav>
      </div>
      <p className="mt-16 text-xs font-light leading-relaxed text-white/50">
        Risk Consultancy Group Pty Ltd and Executive Protection Global Pty Ltd. © {new Date().getFullYear()}. All rights reserved.
      </p>
    </footer>
  );
}
