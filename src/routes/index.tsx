import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  CalendarDays,
  Play,
  Check,
  Sparkles,
  UserRound,
  Heart,
  ShieldCheck,
  ArrowRight,
  ChevronRight,
  Star,
  MapPin,
  Phone,
  Mail,
  Navigation,
  MessageCircle,
  Instagram,
  Facebook,
} from "lucide-react";
import heroImg from "@/assets/hero-cabinet.jpg";
import receptionImg from "@/assets/reception.jpg";
import avantApresImg from "@/assets/avant-apres.jpg";
import logoLight from "@/assets/logo-light.png";
import logoDark from "@/assets/logo-dark.png";
import { Tilt3D } from "@/components/Tilt3D";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dr Oumnia El Ouassif — Cabinet Dentaire à Casablanca" },
      {
        name: "description",
        content:
          "Cabinet dentaire du Dr Oumnia El Ouassif à Casablanca : dentisterie esthétique, soins conservateurs, blanchiment et urgences dentaires.",
      },
      { property: "og:title", content: "Dr Oumnia El Ouassif — Cabinet Dentaire" },
      {
        property: "og:description",
        content: "Votre sourire, notre priorité. Des soins dentaires modernes et élégants.",
      },
    ],
  }),
  component: Index,
});

const NAV = ["Accueil", "Le cabinet", "Nos soins", "Technologies", "Avis", "Contact"];

const VALUES = [
  { icon: Sparkles, title: "Technologie de pointe", text: "Équipements modernes pour des soins précis et efficaces." },
  { icon: UserRound, title: "Soins personnalisés", text: "Chaque traitement est adapté à vos besoins et attentes." },
  { icon: Heart, title: "Confort & Bien-être", text: "Un cabinet calme et chaleureux pour une expérience sereine." },
  { icon: ShieldCheck, title: "Expertise", text: "Des soins réalisés avec précision et une approche bienveillante." },
];

const SOINS = [
  "Consultation",
  "Détartrage",
  "Blanchiment",
  "Facettes",
  "Couronnes",
  "Prothèses",
  "Orthodontie",
  "Urgences",
];

const AVIS = [
  { name: "Sofia R.", stars: 4, text: "Très beau cabinet, accueil chaleureux et soins de qualité. Je recommande vivement !" },
  { name: "Yasmine B.", stars: 5, text: "Docteur Oumnia est très professionnelle et attentive. Je suis ravie du résultat !" },
  { name: "Laila M.", stars: 5, text: "Équipe au top, cabinet magnifique et très propre. On se sent en confiance dès l'entrée." },
];

function ToothMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 40" className={className} fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M16 5c4-3 12-3 14 3 1.6 4.8-1 9-1.6 13.5-.6 4.6-1.2 12-3.8 15.5-2.2 3-4.4 1-5.2-3-.6-3-1-6-3.4-6s-2.8 3-3.4 6c-.8 4-3 6-5.2 3C4.8 33.5 4.2 26.1 3.6 21.5 3 17 .4 12.8 2 8c2-6 10-6 14-3Z" />
    </svg>
  );
}

function Logo({ variant = "light" }: { variant?: "light" | "dark" }) {
  const src = variant === "light" ? logoLight : logoDark;
  return (
    <img
      src={src}
      alt="Dr Oumnia El Ouassif — Cabinet Dentaire"
      className="h-24 w-auto object-contain"
    />
  );
}

function WhatsAppIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} fill="currentColor" aria-hidden="true">
      <path d="M16.004 2.667c-7.363 0-13.333 5.97-13.333 13.333 0 2.353.615 4.61 1.782 6.605L2.667 29.333l6.89-1.807a13.26 13.26 0 0 0 6.447 1.64h.006c7.363 0 13.333-5.97 13.333-13.333S23.367 2.667 16.004 2.667Zm0 24.4h-.005a11.05 11.05 0 0 1-5.633-1.542l-.404-.24-4.09 1.073 1.092-3.987-.263-.409a11.02 11.02 0 0 1-1.696-5.895c0-6.104 4.966-11.07 11.07-11.07 2.957 0 5.737 1.153 7.827 3.246a10.99 10.99 0 0 1 3.24 7.827c0 6.104-4.966 11-11.038 11Zm6.06-8.26c-.332-.166-1.96-.967-2.264-1.077-.304-.111-.526-.166-.747.166-.222.333-.858 1.078-1.052 1.3-.194.222-.388.25-.72.083-.332-.166-1.402-.517-2.671-1.65-.987-.881-1.654-1.969-1.848-2.302-.194-.333-.02-.513.146-.679.15-.15.332-.388.499-.583.166-.194.221-.333.332-.555.111-.222.055-.416-.028-.583-.083-.166-.747-1.803-1.024-2.469-.27-.648-.544-.56-.747-.57l-.636-.011c-.222 0-.583.083-.888.416-.305.333-1.163 1.136-1.163 2.773s1.19 3.216 1.356 3.439c.166.222 2.343 3.578 5.677 5.017.793.343 1.412.548 1.894.701.796.253 1.52.217 2.093.132.638-.095 1.96-.802 2.237-1.577.277-.775.277-1.439.194-1.577-.083-.138-.305-.222-.637-.388Z" />
    </svg>
  );
}

function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/212612345678?text=Bonjour%2C%20je%20souhaite%20prendre%20rendez-vous"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactez-nous sur WhatsApp"
      className="group fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] shadow-[0_8px_24px_rgba(37,211,102,0.45)] transition-transform duration-500 hover:scale-110 animate-bounce-slow"
    >
      {/* Pulsing ring */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-60 animate-ping" />

      {/* 3D tilt wrapper */}
      <span className="relative z-10 flex h-full w-full items-center justify-center rounded-full transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(15deg)_rotateX(-10deg)]">
        <WhatsAppIcon className="h-8 w-8 text-white drop-shadow-md" />
      </span>
    </a>
  );
}

function Index() {
  const [slide, setSlide] = useState(0);
  const [reveal, setReveal] = useState(50);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="absolute inset-x-0 top-0 z-40">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-6">

          <Logo variant="dark" />
          <nav className="hidden items-center gap-8 lg:flex">
  {NAV.map((item, i) => (
    <a
      key={item}
      href="#"
      className={`text-[0.7rem] font-bold uppercase tracking-[0.18em] transition-colors hover:text-gold ${
        i === 0
          ? "border-b border-gold pb-1 text-foreground"
          : "text-foreground/70"
      }`}
    >
      {item}
    </a>
  ))}
</nav>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-olive px-6 py-3 text-[0.7rem] uppercase tracking-[0.18em] text-primary-foreground shadow-[var(--shadow-soft)] transition-colors hover:bg-olive-deep"
          >
            <CalendarDays className="h-4 w-4" /> Prendre rendez-vous
          </a>
        </div>
      </header>

      {/* Hero */}
     {/* Hero */}
<section className="relative min-h-[42rem] overflow-hidden bg-background">

  {/* Decorative blobs */}
  <span className="blob pointer-events-none absolute left-[-8rem] top-[-6rem] z-0 h-[26rem] w-[26rem] animate-drift bg-gold/40" />

  <span className="blob pointer-events-none absolute right-[-10rem] top-[10rem] z-0 h-[30rem] w-[30rem] animate-drift bg-olive/30 [animation-delay:-6s]" />

  {/* HERO IMAGE */}
  <div className="pointer-events-none absolute inset-y-0 right-0 z-0 hidden w-[65%] lg:block">

    <img
      src={heroImg}
      alt="Salle de soins du cabinet dentaire Dr Oumnia El Ouassif"
      width={1408}
      height={1104}
      className="h-full w-full object-cover"
    />

    {/* LEFT FADE */}
    <div className="absolute inset-0 bg-gradient-to-r from-background via-background/25 to-transparent" />

    {/* TOP FADE */}
    <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-background/40 to-transparent" />

  </div>

  {/* HERO CONTENT */}
  <div className="scene-3d relative z-10 mx-auto grid min-h-[42rem] max-w-7xl items-center gap-10 px-6 pb-16 pt-36 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:pt-40">

    <div className="animate-fade-in">

      <p className="text-[0.65rem] uppercase tracking-[0.28em] text-gold">
        Cabinet dentaire Dr Oumnia Elouassif
      </p>

      <h1 className="mt-6 font-display text-5xl leading-[1.05] text-foreground sm:text-6xl">
        Votre sourire,
        <br />
        <span className="italic text-olive">
          notre priorité.
        </span>
      </h1>

      <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted-foreground">
        Des soins dentaires modernes dans un environnement élégant et rassurant.
      </p>

      <ul className="mt-8 space-y-3">
        {[
          "Dentisterie esthétique",
          "Soins conservateurs",
          "Urgences dentaires",
          "Blanchiment"
        ].map((s) => (
          <li
            key={s}
            className="flex items-center gap-3 text-sm text-foreground/85"
          >
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-olive text-primary-foreground">
              <Check className="h-3 w-3" />
            </span>
            {s}
          </li>
        ))}
      </ul>

      <div className="mt-10 flex flex-wrap items-center gap-3 sm:flex-nowrap">

        <a
          href="#contact"
          className="inline-flex items-center gap-2 rounded-full bg-olive px-7 py-4 text-[0.7rem] uppercase tracking-[0.18em] text-primary-foreground transition-colors hover:bg-olive-deep"
        >
          <CalendarDays className="h-4 w-4" />
          Prendre rendez-vous
        </a>

        <a
          href="#cabinet"
          className="inline-flex items-center gap-3 rounded-full border border-gold/60 px-7 py-4 text-[0.7rem] uppercase tracking-[0.18em] text-foreground transition-colors hover:bg-gold/10"
        >
          Découvrir le cabinet

          <span className="flex h-6 w-6 items-center justify-center rounded-full border border-gold/60 text-gold">
            <Play className="h-2.5 w-2.5 fill-current" />
          </span>
        </a>

      </div>

      <div className="mt-10 flex items-center gap-6">
        {["01", "02", "03"].map((n, i) => (
          <button
            key={n}
            onClick={() => setSlide(i)}
            className={`pb-1 text-xs tracking-widest transition-colors ${
              slide === i
                ? "border-b-2 border-gold text-foreground"
                : "text-muted-foreground"
            }`}
          >
            {n}
          </button>
        ))}
      </div>

    </div>

  </div>

  {/* Values panel */}
  <div className="scene-3d relative z-20 mx-auto mt-8 max-w-6xl px-6 pb-20">
          <div className="grid divide-border rounded-2xl border border-border bg-card/85 px-4 py-10 shadow-[var(--shadow-soft)] backdrop-blur-xl sm:grid-cols-2 lg:grid-cols-4 lg:divide-x">

            {VALUES.map(({ icon: Icon, title, text }) => (
              <Tilt3D key={title} max={6} scale={1.03} className="px-6 py-6 text-center">
                <Icon className="mx-auto h-7 w-7 text-gold layer-3d [--z:35px]" strokeWidth={1.2} />
                <h3 className="mt-4 font-display text-xl text-foreground layer-3d [--z:22px]">{title}</h3>
                <p className="mx-auto mt-3 max-w-[15rem] text-xs leading-relaxed text-muted-foreground">{text}</p>
              </Tilt3D>
            ))}
          </div>
        </div>

</section>

      {/* Cabinet */}
      <section id="cabinet" className="scene-3d relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-8 lg:grid-cols-[0.8fr_1.2fr]">
        <span className="blob left-1/3 top-0 h-72 w-72 animate-drift bg-gold/25" />
        <div className="relative z-10">
          <p className="text-[0.75rem] font-bold uppercase tracking-[0.28em] text-gold">Notre cabinet</p>
          <h2 className="mt-5 font-display text-4xl leading-tight text-foreground">
            Un espace pensé
            <br />
            pour votre <span className="italic text-olive">bien-être.</span>
          </h2>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground">
            Alliant design contemporain, confort et technologie de pointe, notre cabinet a été conçu pour vous offrir
            une expérience dentaire unique et agréable.
          </p>
          <a
            href="#"
            className="mt-8 inline-flex items-center gap-3 rounded-full border border-gold/60 px-7 py-3.5 text-[0.7rem] uppercase tracking-[0.18em] text-foreground transition-colors hover:bg-gold/10"
          >
            Visite virtuelle <span className="font-display text-xs text-gold">360°</span>
          </a>
        </div>
        <Tilt3D className="relative z-10" max={6}>
          <img
            src={receptionImg}
            alt="Accueil du cabinet dentaire"
            loading="lazy"
            width={1200}
            height={720}
            className="h-[22rem] w-full rounded-2xl object-cover shadow-[var(--shadow-soft)]"
          />
        </Tilt3D>
      </section>

      {/* Soins */}
      <section id="soins" className="mx-auto max-w-7xl px-6 py-16">
  {/* Title */}
  <div className="flex items-center justify-center gap-4">
    <span className="h-px w-12 bg-gold/50" />

    <p className="text-[0.75rem] font-medium uppercase tracking-[0.32em] text-gold">
      Nos soins
    </p>

    <span className="h-px w-12 bg-gold/50" />
  </div>

  {/* 3D Cards */}
  <div className="scene-3d mt-10 grid grid-cols-2 gap-5 sm:grid-cols-4 lg:grid-cols-8 [perspective:1400px]">
    {SOINS.map((s, index) => (
      <Tilt3D
        key={s}
        max={10}
        scale={1.06}
        className="group relative"
      >
        {/* Floating glow */}
        <div
          className="pointer-events-none absolute -inset-3 rounded-2xl bg-gold/10 opacity-0 blur-2xl transition-opacity duration-700 group-hover:opacity-100"
          style={{
            animation: "goldPulse 4s ease-in-out infinite",
            animationDelay: `${index * 0.35}s`,
          }}
        />

        {/* Card */}
        <a
          href="#"
          className="soin-card relative block min-h-[170px] overflow-hidden rounded-2xl border border-gold/20 bg-white/55 px-4 py-7 text-center backdrop-blur-xl transition-all duration-700 hover:border-gold/60 hover:bg-white/75"
          style={{
            animationDelay: `${index * 0.35}s`,
          }}
        >
          {/* Light orbit */}
          <div className="soin-orbit pointer-events-none absolute left-1/2 top-[42px] h-[65px] w-[95px] -translate-x-1/2 rounded-[50%] border border-gold/20" />

          {/* Small floating particles */}
          <span
            className="soin-particle absolute left-[20%] top-[25%] h-1 w-1 rounded-full bg-gold"
            style={{ animationDelay: `${index * 0.2}s` }}
          />

          <span
            className="soin-particle absolute right-[18%] top-[35%] h-1.5 w-1.5 rounded-full bg-gold/70"
            style={{ animationDelay: `${index * 0.45}s` }}
          />

          {/* Tooth */}
          <div className="relative z-10 flex justify-center [transform-style:preserve-3d]">
            <ToothMark
              className="soin-tooth h-9 w-8 text-gold drop-shadow-[0_8px_12px_rgba(180,140,50,0.25)] layer-3d [--z:50px]"
            />
          </div>

          {/* Text */}
          <p className="relative z-10 mt-6 text-xs font-medium uppercase tracking-[0.12em] text-foreground layer-3d [--z:25px] transition-all duration-500 group-hover:-translate-y-1 group-hover:text-olive">
            {s}
          </p>

          {/* Arrow */}
          <div className="relative z-10 mx-auto mt-4 flex h-7 w-7 items-center justify-center rounded-full border border-gold/50 text-gold transition-all duration-500 group-hover:scale-110 group-hover:bg-gold group-hover:text-white">
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-500 group-hover:translate-x-0.5" />
          </div>

          {/* Bottom reflection */}
          <div className="pointer-events-none absolute bottom-0 left-1/2 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-gold/70 to-transparent opacity-50" />
        </a>
      </Tilt3D>
    ))}
  </div>
</section>

      {/* Avant/Après + Avis */}
      <section id="avis" className="mx-auto grid max-w-7xl gap-6 px-6 pb-16 lg:grid-cols-[0.9fr_1.6fr]">
        <div className="rounded-2xl border border-border bg-card p-4">
          <p className="text-center text-[0.6rem] uppercase tracking-[0.28em] text-gold">Avant / Après</p>
          <div className="relative mt-3 overflow-hidden rounded-xl">
            <img
              src={avantApresImg}
              alt="Résultat avant et après un blanchiment dentaire"
              loading="lazy"
              width={1000}
              height={560}
              className="h-44 w-full object-cover"
            />
            <div className="absolute inset-y-0" style={{ left: `${reveal}%` }}>
              <span className="absolute inset-y-0 -left-px w-0.5 bg-cream/90" />
              <span className="absolute top-1/2 flex h-8 w-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-cream text-olive shadow">
                <ChevronRight className="h-4 w-4" />
              </span>
            </div>
            <input
              type="range"
              min={5}
              max={95}
              value={reveal}
              aria-label="Comparer avant et après"
              onChange={(e) => setReveal(Number(e.target.value))}
              className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
            />
          </div>
          <div className="mt-3 flex justify-between px-2 text-[0.6rem] uppercase tracking-[0.2em] text-muted-foreground">
            <span>Avant</span>
            <span>Après</span>
          </div>
          <a
            href="#"
            className="mt-4 flex items-center justify-center gap-2 text-[0.65rem] uppercase tracking-[0.2em] text-foreground/80 hover:text-gold"
          >
            Voir plus de cas <ArrowRight className="h-3 w-3 text-gold" />
          </a>
        </div>

        <div>
          <div className="flex items-center justify-center gap-4">
            <span className="h-px w-8 bg-gold/50" />
            <p className="text-[0.6rem] uppercase tracking-[0.28em] text-gold">Témoignages</p>
            <span className="h-px w-8 bg-gold/50" />
          </div>
          <div className="scene-3d relative mt-4 grid gap-4 sm:grid-cols-3">
            {AVIS.map((a) => (
              <Tilt3D key={a.name} max={7} className="rounded-2xl glass p-6">
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`h-3.5 w-3.5 ${i < a.stars ? "fill-gold text-gold" : "text-gold/30"}`}
                    />
                  ))}
                </div>
                <p className="mt-4 text-xs leading-relaxed text-muted-foreground">{a.text}</p>
                <div className="mt-6 flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary text-olive">
                    <UserRound className="h-4 w-4" />
                  </span>
                  <span className="text-xs text-foreground">{a.name}</span>
                </div>
              </Tilt3D>
            ))}
            <button
              aria-label="Avis suivant"
              className="absolute -right-3 top-1/2 hidden h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-card text-olive shadow lg:flex"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="mx-auto max-w-7xl px-6 pb-16">
        <div className="relative flex flex-wrap items-center justify-between gap-6 overflow-hidden rounded-3xl bg-olive px-8 py-10 text-primary-foreground shadow-[var(--shadow-soft)]">
          <span className="blob -left-10 -top-16 h-64 w-64 animate-drift bg-gold/40" />
          <span className="blob -bottom-20 right-10 h-64 w-64 animate-drift bg-cream/25 [animation-delay:-8s]" />
          <div className="relative z-10 flex items-center gap-6">
            <span className="flex h-14 w-14 items-center justify-center rounded-full border border-primary-foreground/40">
              <CalendarDays className="h-6 w-6" />
            </span>
            <div>
              <h2 className="font-display text-3xl">Prenez rendez-vous dès aujourd'hui.</h2>
              <p className="mt-2 text-xs text-primary-foreground/80">
                Nous sommes là pour prendre soin de votre sourire.
              </p>
            </div>
          </div>
          <a
            href="tel:+212612345678"
            className="relative z-10 inline-flex items-center gap-3 rounded-full border border-gold-soft bg-transparent px-8 py-4 text-[0.7rem] uppercase tracking-[0.18em] text-gold-soft transition-colors hover:bg-gold-soft/10"
          >
            Prendre rendez-vous <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-12 md:grid-cols-4">
          <div>
            <Logo variant="dark" />
            <p className="mt-16 text-xs text-muted-foreground">Votre sourire, notre priorité.</p>
          </div>
          <div>
            <p className="text-[0.6rem] uppercase tracking-[0.28em] text-gold">Adresse</p>
            <div className="mt-4 flex gap-3 text-xs leading-relaxed text-muted-foreground">
              <MapPin className="h-4 w-4 shrink-0 text-olive" />
              <span>
                123, Rue des Fleurs
                <br />
                Quartier Maârif
                <br />
                Casablanca, Maroc
              </span>
            </div>
          </div>
          <div>
            <p className="text-[0.6rem] uppercase tracking-[0.28em] text-gold">Téléphone</p>
            <div className="mt-4 flex gap-3 text-xs leading-relaxed text-muted-foreground">
              <Phone className="h-4 w-4 shrink-0 text-olive" />
              <span>
                +212 6 12 34 56 78
                <br />
                +212 5 22 34 56 78
              </span>
            </div>
          </div>
          <div>
            <p className="text-[0.6rem] uppercase tracking-[0.28em] text-gold">Email</p>
            <div className="mt-4 flex gap-3 text-xs text-muted-foreground">
              <Mail className="h-4 w-4 shrink-0 text-olive" />
              contact@droumniaelouassif.ma
            </div>
            <p className="mt-6 text-[0.6rem] uppercase tracking-[0.28em] text-gold">Suivez-nous</p>
            <div className="mt-3 flex gap-3">
              {[Instagram, Facebook, MessageCircle].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-border text-olive transition-colors hover:border-gold hover:text-gold"
                >
                  <Icon className="h-3.5 w-3.5" />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-border">
          <div className="mx-auto flex max-w-7xl flex-wrap justify-between gap-3 px-6 py-5 text-[0.65rem] text-muted-foreground">
            <p>© 2026 Cabinet Dentaire Dr Oumnia El Ouassif. Tous droits réservés.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-gold">Mentions légales</a>
              <a href="#" className="hover:text-gold">Politique de confidentialité</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <FloatingWhatsApp />
    </div>
  );
}