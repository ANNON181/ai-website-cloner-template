"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { nav } from "./config";

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="absolute inset-x-0 top-0 z-30 text-white">
      <div className="hidden h-11 items-center justify-end bg-black px-6 text-[11px] font-medium uppercase tracking-wide text-white/70 md:flex lg:px-16">
        Based in Australia. Operating globally.
      </div>
      <div className="flex h-20 items-center justify-between px-6 md:mt-3 lg:px-16">
        <a href="#top" aria-label="Risk Consultancy Group home"><Logo /></a>
        <nav className="hidden items-center gap-9 lg:flex" aria-label="Primary">
          {nav.map((n) => (
            <a key={n.href} href={n.href} className="py-3 text-base font-light hover:text-primary">{n.label}</a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a href="#contact" className="hidden h-12 items-center gap-4 rounded-full bg-primary px-6 text-base font-normal text-black hover:brightness-110 md:flex">
            <span className="size-1.5 rounded-full bg-black" /> Make an enquiry
          </a>
          <button
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
            className="grid size-12 place-items-center rounded-full bg-white/10 backdrop-blur hover:bg-white/20 lg:hidden"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
      {open && (
        <nav aria-label="Mobile" className="absolute inset-x-0 top-full bg-[#0e1116] px-6 py-8 lg:hidden">
          <ul className="space-y-5 text-3xl font-light">
            {nav.map((n) => (
              <li key={n.href}>
                <a href={n.href} onClick={() => setOpen(false)} className="hover:text-primary">{n.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
