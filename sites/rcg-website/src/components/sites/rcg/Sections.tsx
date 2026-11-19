import { ArrowRight } from "lucide-react";
import { CONTACT_EMAIL, approach, sectors, services } from "./config";

const eyebrow = "text-sm font-normal uppercase tracking-[0.18em] text-primary";
const contour =
  "bg-[repeating-radial-gradient(ellipse_at_18%_30%,transparent_0_34px,rgba(255,255,255,0.05)_35px_36px),repeating-radial-gradient(ellipse_at_85%_75%,transparent_0_46px,rgba(255,255,255,0.04)_47px_48px)]";
const pill =
  "inline-flex h-12 items-center gap-4 rounded-full bg-primary px-6 text-base font-normal text-black hover:brightness-110";
const h2 = "mt-6 font-light uppercase leading-[1.05] text-[min(11vw,3rem)] lg:text-7xl";

export function Hero() {
  return (
    <section id="top" className={`relative flex min-h-[100svh] flex-col justify-end overflow-hidden bg-[#0b1118] px-6 pb-[110px] text-white lg:min-h-[848px] lg:px-16 ${contour}`}>
      <div className="absolute inset-0 bg-gradient-to-b from-[#1a2533]/70 via-transparent to-black/60" />
      <h1 className="relative flex flex-col gap-2 text-[14vw] font-light leading-none lg:flex-row lg:items-center lg:gap-6 lg:text-[min(7vw,112px)]">
        <span>PREPARED</span>
        <span className="hidden h-px min-w-8 flex-1 bg-primary lg:block" aria-hidden />
        <span>ANYWHERE</span>
      </h1>
      <div className="relative mt-24 flex flex-col justify-between gap-8 lg:mt-40 lg:flex-row lg:items-end">
        <p className="max-w-xl text-2xl font-light leading-8">
          A boutique global risk and executive protection firm, based in Australia.
        </p>
        <a href="#services" className="flex items-center gap-3 text-lg font-light hover:text-primary">
          <span className="grid size-6 place-items-center rounded-full bg-primary text-black"><ArrowRight size={14} /></span>
          Explore our services
        </a>
      </div>
    </section>
  );
}

export function Intro() {
  return (
    <section className="bg-[#0e1116] px-6 py-24 text-white lg:px-16">
      <p className={eyebrow}>Who we are</p>
      <h2 className={`${h2} max-w-5xl`}>Intelligence-led protection for people who cannot afford surprises</h2>
      <p className="mt-8 max-w-2xl text-lg font-light text-white/80">
        Risk Consultancy Group works with multinational corporations, mining and resources operators, senior executives, high-net-worth families and national media. We keep the plan simple for the people who deliver it, however complex the work behind it.
      </p>
    </section>
  );
}

export function Services() {
  return (
    <section id="services" className="scroll-mt-4 bg-white px-6 py-24 text-[#11161d] lg:px-16">
      <p className={eyebrow}>Services</p>
      <h2 className={`${h2} max-w-4xl`}>What we do</h2>
      <ul className="mt-16 grid border-l border-t border-black/15 md:grid-cols-2 xl:grid-cols-3">
        {services.map((s, i) => (
          <li key={s.title} className="border-b border-r border-black/15 bg-white p-8">
            <p className="text-sm text-primary">0{i + 1}</p>
            <h3 className="mt-4 text-2xl font-medium leading-snug">{s.title}</h3>
            <p className="mt-4 text-base font-light leading-relaxed text-black/70">{s.body}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function Sectors() {
  return (
    <section id="sectors" className={`scroll-mt-4 bg-[#0b1118] px-6 py-24 text-white lg:px-16 ${contour}`}>
      <p className={eyebrow}>Sectors</p>
      <h2 className={`${h2} max-w-4xl`}>Who we protect</h2>
      <ul className="mt-16 divide-y divide-white/15 border-y border-white/15">
        {sectors.map((s) => (
          <li key={s} className="flex items-center justify-between py-6 text-2xl font-light uppercase lg:text-4xl">
            {s} <ArrowRight className="shrink-0 text-primary" aria-hidden />
          </li>
        ))}
      </ul>
    </section>
  );
}

export function Approach() {
  return (
    <section id="approach" className="scroll-mt-4 bg-[#f4f2ee] px-6 py-24 text-[#11161d] lg:px-16">
      <p className={eyebrow}>Our approach</p>
      <h2 className={`${h2} max-w-4xl`}>Consider every angle. Protect every move.</h2>
      <ol className="mt-16 grid gap-10 md:grid-cols-2 xl:grid-cols-4">
        {approach.map((a) => (
          <li key={a.step} className="border-t-2 border-primary pt-6">
            <p className="text-sm text-black/50">{a.step}</p>
            <h3 className="mt-3 text-2xl font-medium">{a.title}</h3>
            <p className="mt-4 text-base font-light leading-relaxed text-black/70">{a.body}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

export function Epg() {
  return (
    <section id="epg" className="scroll-mt-4 bg-[#0e1116] px-6 py-24 text-white lg:px-16">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div>
          <p className={eyebrow}>Executive Protection Global</p>
          <h2 className="mt-6 font-light uppercase leading-[1.05] text-[min(11vw,3rem)] lg:text-5xl xl:text-7xl">EPG: protection led by intelligence</h2>
          <p className="mt-8 max-w-xl text-lg font-light text-white/80">
            Executive Protection Global provides intelligence-led executive protection, travel security and risk management consulting, working alongside Risk Consultancy Group.
          </p>
          <a href="#contact" className={`${pill} mt-10`}><span className="size-1.5 rounded-full bg-black" />Speak to our team</a>
        </div>
        <div className={`aspect-[4/3] w-full border border-white/10 bg-[#0b1118] ${contour}`} role="img" aria-label="Decorative contour pattern" />
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-4 bg-primary px-6 py-24 text-black lg:px-16">
      <h2 className="max-w-4xl font-light uppercase leading-[1.05] text-[min(11vw,3rem)] lg:text-8xl">Risk is where the conversation begins</h2>
      {CONTACT_EMAIL ? (
        <a href={`mailto:${CONTACT_EMAIL}?subject=Enquiry`} className="mt-10 inline-flex h-12 items-center gap-4 rounded-full bg-black px-6 text-base font-normal text-white hover:bg-[#11161d]">
          <span className="size-1.5 rounded-full bg-primary" /> Make an enquiry
        </a>
      ) : (
        <p className="mt-10 max-w-xl text-lg font-light">
          Enquiries are handled directly. Contact details will be published here before launch.
        </p>
      )}
    </section>
  );
}
