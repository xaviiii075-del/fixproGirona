import { useEffect, useRef, useState, type FormEvent, type ReactNode } from "react";
import { createPortal } from "react-dom";
import { I18nContext, useI18n, type Lang, t as T, reviews as REVIEWS } from "@/lib/i18n";
import logo from "@/assets/fixpro-logo.png";
import hero from "@/assets/hero-technician.jpg";
import {
  Phone,
  MessageCircle,
  Wrench,
  Zap,
  Siren,
  Hammer,
  Bath,
  Flame,
  Shield,
  Clock,
  BadgeCheck,
  Tag,
  HeartHandshake,
  Star,
  MapPin,
  Globe,
  Menu,
  X,
  ArrowRight,
  CheckCircle2,
  ChevronRight,
} from "lucide-react";

const PHONE = "671 19 52 19";
const TEL = "tel:671195219";
const WHATSAPP_NUMBER = "34671195219";
const WA = `https://wa.me/${WHATSAPP_NUMBER}`;
const galleryImageModules = import.meta.glob(
  "../../photos/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}",
  {
    eager: true,
    query: "?url",
    import: "default",
  },
);
const galleryImages = Object.entries(galleryImageModules)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([path, src]) => ({
    src: src as string,
    alt: `FIXPRO GIRONA treball realitzat ${path.split("/").pop()?.split(".")[0] ?? ""}`.trim(),
  }));

type QuoteSource = "main" | "contact";
type QuoteStatus = "idle" | "sent";
type Translations = (typeof T)[Lang];

function buildQuoteWhatsAppUrl(form: FormData, lang: Lang, source: QuoteSource) {
  const name = String(form.get("name") ?? "").trim();
  const phone = String(form.get("phone") ?? "").trim();
  const serviceType = String(form.get("serviceType") ?? "").trim();
  const message = String(form.get("message") ?? "").trim();
  const emptyMessage = lang === "ca" ? "Sense missatge" : "Sin mensaje";
  const sourceLabel =
    source === "main"
      ? lang === "ca"
        ? "Formulari principal"
        : "Formulario principal"
      : lang === "ca"
        ? "Formulari de contacte"
        : "Formulario de contacto";

  const text =
    lang === "ca"
      ? [
          "Hola FIXPRO GIRONA, vull demanar un pressupost.",
          "",
          `Nom: ${name}`,
          `Telèfon: ${phone}`,
          `Servei: ${serviceType}`,
          `Missatge: ${message || emptyMessage}`,
          `Origen: ${sourceLabel}`,
        ].join("\n")
      : [
          "Hola FIXPRO GIRONA, quiero pedir un presupuesto.",
          "",
          `Nombre: ${name}`,
          `Teléfono: ${phone}`,
          `Servicio: ${serviceType}`,
          `Mensaje: ${message || emptyMessage}`,
          `Origen: ${sourceLabel}`,
        ].join("\n");

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

function useQuoteSubmit(source: QuoteSource) {
  const { lang } = useI18n();
  const [status, setStatus] = useState<QuoteStatus>("idle");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    window.open(buildQuoteWhatsAppUrl(new FormData(e.currentTarget), lang, source), "_blank");
    e.currentTarget.reset();
    setStatus("sent");
  }

  return { status, handleSubmit };
}

/* ============ Hooks ============ */
function useReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          el.classList.add("in-view");
          obs.disconnect();
        }
      },
      { threshold: 0.12 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

/* ============ Root ============ */
export default function Site() {
  const [lang, setLang] = useState<Lang>("ca");
  useEffect(() => {
    document.documentElement.lang = lang === "ca" ? "ca" : "es";
  }, [lang]);
  return (
    <I18nContext.Provider value={{ lang, setLang }}>
      <style>{`
        .reveal { opacity: 0; transform: translateY(24px); transition: opacity .8s cubic-bezier(.16,1,.3,1), transform .8s cubic-bezier(.16,1,.3,1); }
        .reveal.in-view { opacity: 1; transform: none; }
        .pulse-dot::before { content:""; position:absolute; inset:0; border-radius:9999px; box-shadow:0 0 0 0 rgb(74 222 128 / .7); animation: ringPulse 2s infinite; }
        @keyframes ringPulse { 0%{box-shadow:0 0 0 0 rgb(74 222 128 / .7);} 100%{box-shadow:0 0 0 14px rgb(74 222 128 / 0);} }
      `}</style>
      <div className="min-h-screen bg-background text-foreground">
        <Header />
        <main>
          <Hero />
          <Urgent />
          <QuoteForm id="pressupost" />
          <Services />
          <WhyUs />
          <Portfolio />
          <Reviews />
          <Process />
          <Contact />
        </main>
        <Footer />
        <MobileStickyBar />
      </div>
    </I18nContext.Provider>
  );
}

/* ============ Header ============ */
function Header() {
  const { lang, setLang } = useI18n();
  const tr = T[lang];
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const links = [
    { id: "inici", label: tr.nav.home },
    { id: "serveis", label: tr.nav.services },
    { id: "urgencies", label: tr.nav.urgent },
    { id: "treballs", label: tr.nav.works },
    { id: "opinions", label: tr.nav.reviews },
    { id: "contacte", label: tr.nav.contact },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all ${
        scrolled
          ? "bg-background/85 backdrop-blur-md shadow-[var(--shadow-soft)]"
          : "bg-background/60 backdrop-blur"
      } border-b border-border/60`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#inici" className="flex items-center gap-2">
          <img
            src={logo}
            alt="FIXPRO GIRONA"
            className="h-10 w-10 object-contain"
            width={40}
            height={40}
          />
          <span className="hidden sm:flex flex-col leading-none">
            <span className="font-display font-extrabold text-primary tracking-tight text-lg">
              FIXPRO
            </span>
            <span className="text-[10px] tracking-[0.25em] text-muted-foreground">GIRONA</span>
          </span>
        </a>
        <nav className="hidden lg:flex items-center gap-7">
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className="text-sm font-medium text-foreground/80 hover:text-accent transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <LangSwitch />
          <a
            href={TEL}
            aria-label={tr.cta.call}
            className="hidden sm:inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-primary hover:bg-secondary transition"
          >
            <Phone className="h-4 w-4" />
          </a>
          <a
            href="#pressupost"
            className="hidden md:inline-flex items-center gap-2 h-10 px-4 rounded-full bg-accent text-accent-foreground font-semibold text-sm shadow-[var(--shadow-glow)] hover:brightness-105 transition"
          >
            {tr.cta.quote}
          </a>
          <button
            onClick={() => setOpen(true)}
            className="lg:hidden h-10 w-10 grid place-items-center rounded-full border border-border"
            aria-label="Menu"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>

      <MobileMenu open={open} onClose={() => setOpen(false)} links={links} tr={tr} />
    </header>
  );
}

function MobileMenu({
  open,
  onClose,
  links,
  tr,
}: {
  open: boolean;
  onClose: () => void;
  links: { id: string; label: string }[];
  tr: Translations;
}) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  return createPortal(
    <div
      className={`fixed inset-0 z-[100] lg:hidden ${open ? "pointer-events-auto" : "pointer-events-none"}`}
    >
      <div
        className={`absolute inset-0 bg-primary/50 transition-opacity duration-300 ${open ? "opacity-100" : "opacity-0"}`}
        onClick={onClose}
      />
      <aside
        className={`absolute inset-y-0 right-0 w-full sm:w-[86%] sm:max-w-sm bg-background shadow-2xl border-l border-border overflow-y-auto transition-transform duration-300 ease-out ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex items-center justify-between p-4 border-b border-border bg-background">
          <span className="font-display font-bold text-primary">FIXPRO GIRONA</span>
          <button
            onClick={onClose}
            className="h-9 w-9 grid place-items-center rounded-full border border-border"
            aria-label="Close"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
        <nav className="p-4 flex flex-col bg-background">
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              onClick={onClose}
              className="flex items-center justify-between py-3 border-b border-border/60 text-foreground"
            >
              <span>{l.label}</span>
              <ChevronRight className="h-4 w-4 text-muted-foreground" />
            </a>
          ))}
          <div className="grid grid-cols-2 gap-2 mt-4">
            <a
              href={TEL}
              className="flex items-center justify-center gap-2 h-12 rounded-xl bg-primary text-primary-foreground font-semibold"
            >
              <Phone className="h-4 w-4" /> {tr.cta.callShort}
            </a>
            <a
              href={WA}
              className="flex items-center justify-center gap-2 h-12 rounded-xl bg-[#25D366] text-white font-semibold"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </a>
          </div>
          <a
            href="#pressupost"
            onClick={onClose}
            className="mt-3 h-12 rounded-xl bg-accent text-accent-foreground font-semibold grid place-items-center"
          >
            {tr.cta.quote}
          </a>
        </nav>
      </aside>
    </div>,
    document.body,
  );
}

function LangSwitch() {
  const { lang, setLang } = useI18n();
  return (
    <div className="inline-flex items-center rounded-full border border-border bg-background/70 p-0.5 text-xs font-semibold">
      <button
        onClick={() => setLang("ca")}
        className={`px-2.5 py-1 rounded-full transition ${lang === "ca" ? "bg-primary text-primary-foreground" : "text-muted-foreground"}`}
      >
        CAT
      </button>
      <button
        onClick={() => setLang("es")}
        className={`px-2.5 py-1 rounded-full transition ${lang === "es" ? "bg-primary text-primary-foreground" : "text-muted-foreground"}`}
      >
        ES
      </button>
    </div>
  );
}

/* ============ Hero ============ */
function Hero() {
  const { lang } = useI18n();
  const tr = T[lang];
  return (
    <section id="inici" className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_70%_30%,oklch(0.7_0.19_50_/_0.12),transparent_60%)]" />
        <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-12 pb-16 lg:pt-20 lg:pb-24 grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-6">
          <div className="inline-flex items-center gap-2 rounded-full bg-success/10 text-success-foreground px-3 py-1.5 text-xs font-semibold ring-1 ring-success/30">
            <span className="relative inline-flex h-2 w-2 rounded-full bg-success pulse-dot" />
            <span className="text-success">{tr.hero.badge}</span>
          </div>
          <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-primary leading-[1.05]">
            {tr.hero.title1}{" "}
            <span className="relative inline-block">
              <span className="relative z-10 bg-[var(--gradient-accent)] bg-clip-text text-transparent">
                {tr.hero.title2}
              </span>
              <svg
                className="absolute -bottom-2 left-0 w-full"
                height="10"
                viewBox="0 0 200 10"
                preserveAspectRatio="none"
              >
                <path
                  d="M2 7 Q 100 -2 198 7"
                  stroke="oklch(0.7 0.19 50)"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h1>
          <p className="mt-5 text-lg text-muted-foreground max-w-xl">{tr.hero.subtitle}</p>

          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href="#pressupost"
              className="inline-flex items-center gap-2 h-12 px-6 rounded-full bg-accent text-accent-foreground font-semibold shadow-[var(--shadow-glow)] hover:translate-y-[-1px] transition"
            >
              {tr.cta.quote} <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href={TEL}
              className="inline-flex items-center gap-2 h-12 px-6 rounded-full bg-primary text-primary-foreground font-semibold hover:brightness-110 transition"
            >
              <Phone className="h-4 w-4" /> {tr.cta.call}
            </a>
          </div>

          <ul className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-sm">
            {tr.hero.trust.map((x, i) => (
              <li key={i} className="inline-flex items-center gap-1.5 text-foreground/80">
                <CheckCircle2 className="h-4 w-4 text-success" /> {x}
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-6 relative">
          <div className="relative rounded-[2rem] overflow-hidden shadow-[var(--shadow-lift)] ring-1 ring-border">
            <img
              src={hero}
              alt="FIXPRO GIRONA technician"
              width={1536}
              height={1152}
              className="w-full h-[460px] lg:h-[540px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/40 via-transparent to-transparent" />
          </div>
          {/* floating cards */}
          <div className="absolute -bottom-5 -left-3 sm:-left-6 bg-card rounded-2xl shadow-[var(--shadow-lift)] p-4 flex items-center gap-3 ring-1 ring-border">
            <div className="h-11 w-11 rounded-xl bg-accent/15 text-accent grid place-items-center">
              <Star className="h-5 w-5 fill-accent" />
            </div>
            <div>
              <div className="font-bold text-primary">5.0 / 5</div>
              <div className="text-xs text-muted-foreground">
                65 {lang === "ca" ? "valoracions" : "reseñas"}
              </div>
            </div>
          </div>
          <div className="absolute -top-4 -right-3 sm:-right-6 bg-card rounded-2xl shadow-[var(--shadow-lift)] p-4 flex items-center gap-3 ring-1 ring-border">
            <div className="h-11 w-11 rounded-xl bg-success/15 text-success grid place-items-center">
              <Clock className="h-5 w-5" />
            </div>
            <div>
              <div className="font-bold text-primary">24 h</div>
              <div className="text-xs text-muted-foreground">
                {lang === "ca" ? "Servei continuat" : "Servicio continuo"}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============ Urgent ============ */
function Urgent() {
  const { lang } = useI18n();
  const tr = T[lang];
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="urgencies" className="px-4 sm:px-6 lg:px-8">
      <div
        ref={ref}
        className="reveal mx-auto max-w-7xl rounded-3xl bg-[var(--gradient-hero)] text-primary-foreground p-6 sm:p-10 lg:p-12 relative overflow-hidden ring-1 ring-primary/40 shadow-[var(--shadow-lift)]"
      >
        <div className="absolute -right-16 -top-16 h-72 w-72 rounded-full bg-accent/30 blur-3xl" />
        <div className="absolute -left-10 -bottom-20 h-72 w-72 rounded-full bg-accent/20 blur-3xl" />
        <div className="relative grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8">
            <div className="inline-flex items-center gap-2 rounded-full bg-accent text-accent-foreground px-3 py-1.5 text-xs font-bold">
              <Siren className="h-3.5 w-3.5" /> {tr.urgent.tag.toUpperCase()}
            </div>
            <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold leading-tight text-slate-900">
              {tr.urgent.title}
            </h2>
            <p className="mt-3 max-w-2xl text-slate-900/90">{tr.urgent.text}</p>
          </div>
          <div className="lg:col-span-4 flex flex-col gap-3">
            <a
              href={TEL}
              className="inline-flex items-center justify-center gap-2 h-13 px-5 py-3 rounded-2xl bg-accent text-accent-foreground font-bold shadow-[var(--shadow-glow)] hover:brightness-105 transition"
            >
              <Phone className="h-5 w-5" /> {tr.cta.call}
            </a>
            <a
              href={WA}
              className="inline-flex items-center justify-center gap-2 h-13 px-5 py-3 rounded-2xl bg-[#25D366] text-white font-bold hover:brightness-110 transition"
            >
              <MessageCircle className="h-5 w-5" /> {tr.cta.whatsapp}
            </a>
            <p className="text-center text-primary-foreground/70 text-sm">{PHONE} · 24h</p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============ Quote Form ============ */
function QuoteForm({ id = "pressupost" }: { id?: string }) {
  const { lang } = useI18n();
  const tr = T[lang];
  const { status, handleSubmit } = useQuoteSubmit("main");
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id={id} className="py-20 px-4 sm:px-6 lg:px-8">
      <div ref={ref} className="reveal mx-auto max-w-6xl grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-5">
          <span className="text-xs font-bold tracking-[0.2em] text-accent uppercase">
            {lang === "ca" ? "Pressupost gratuït" : "Presupuesto gratis"}
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-primary">{tr.form.title}</h2>
          <p className="mt-3 text-muted-foreground">{tr.form.subtitle}</p>
          <ul className="mt-6 space-y-3 text-sm">
            {[tr.hero.trust[1], tr.hero.trust[3], tr.hero.trust[4]].map((x) => (
              <li key={x} className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-success" /> {x}
              </li>
            ))}
          </ul>
          <div className="mt-7 flex flex-wrap gap-3">
            <a href={TEL} className="inline-flex items-center gap-2 text-primary font-semibold">
              <Phone className="h-4 w-4 text-accent" /> {PHONE}
            </a>
            <a href={WA} className="inline-flex items-center gap-2 text-primary font-semibold">
              <MessageCircle className="h-4 w-4 text-[#25D366]" /> WhatsApp
            </a>
          </div>
        </div>
        <div className="lg:col-span-7">
          <form
            onSubmit={handleSubmit}
            className="bg-card rounded-3xl p-6 sm:p-8 shadow-[var(--shadow-lift)] ring-1 ring-border"
          >
            {status === "sent" ? (
              <div className="py-12 text-center">
                <div className="mx-auto h-14 w-14 rounded-full bg-success/15 text-success grid place-items-center">
                  <CheckCircle2 className="h-7 w-7" />
                </div>
                <p className="mt-4 text-lg font-semibold text-primary">{tr.form.success}</p>
              </div>
            ) : (
              <div className="grid sm:grid-cols-2 gap-4">
                <Field label={tr.form.name}>
                  <input
                    required
                    name="name"
                    placeholder={tr.form.placeholder.name}
                    className="form-input"
                  />
                </Field>
                <Field label={tr.form.phone}>
                  <input
                    required
                    name="phone"
                    type="tel"
                    placeholder={tr.form.placeholder.phone}
                    className="form-input"
                  />
                </Field>
                <Field label={tr.form.type} className="sm:col-span-2">
                  <select required name="serviceType" defaultValue="" className="form-input">
                    <option value="" disabled>
                      {tr.form.selectType}
                    </option>
                    {tr.form.types.map((x) => (
                      <option key={x}>{x}</option>
                    ))}
                  </select>
                </Field>
                <Field label={tr.form.message} className="sm:col-span-2">
                  <textarea
                    name="message"
                    rows={4}
                    placeholder={tr.form.placeholder.message}
                    className="form-input resize-none"
                  />
                </Field>
                <button className="sm:col-span-2 mt-2 h-12 rounded-xl bg-accent text-accent-foreground font-bold shadow-[var(--shadow-glow)] hover:brightness-105 transition inline-flex items-center justify-center gap-2">
                  {tr.form.whatsappButton} <MessageCircle className="h-4 w-4" />
                </button>
              </div>
            )}
          </form>
          <style>{`
            .form-input { width:100%; height:48px; padding:0 14px; border-radius:12px; border:1px solid var(--color-border); background:var(--color-background); outline:none; transition: border-color .15s, box-shadow .15s; font-size:14px; }
            textarea.form-input { height:auto; padding:12px 14px; }
            .form-input:focus { border-color: var(--color-accent); box-shadow: 0 0 0 4px oklch(0.7 0.19 50 / 0.18); }
          `}</style>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  children,
  className = "",
}: {
  label: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <label className={`block ${className}`}>
      <span className="block text-xs font-semibold text-foreground/70 mb-1.5">{label}</span>
      {children}
    </label>
  );
}

/* ============ Services ============ */
function Services() {
  const { lang } = useI18n();
  const tr = T[lang];
  const icons = [Wrench, Zap, Siren, Hammer, Bath, Flame, Shield];
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="serveis" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/60">
      <div ref={ref} className="reveal mx-auto max-w-7xl">
        <SectionHeader
          eyebrow={lang === "ca" ? "Què fem" : "Qué hacemos"}
          title={tr.services.title}
          text={tr.services.intro}
        />
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {tr.services.items.map((s, i) => {
            const Icon = icons[i] ?? Wrench;
            return (
              <div
                key={s.t}
                className="group relative bg-card rounded-2xl p-6 ring-1 ring-border hover:ring-accent/40 hover:shadow-[var(--shadow-lift)] hover:-translate-y-1 transition-all"
              >
                <div className="h-12 w-12 rounded-xl bg-[var(--gradient-accent)] grid place-items-center text-accent-foreground shadow-[var(--shadow-glow)]">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-bold text-primary text-lg">{s.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.d}</p>
                <a
                  href="#pressupost"
                  className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-accent group-hover:gap-2 transition-all"
                >
                  {lang === "ca" ? "Sol·licitar" : "Solicitar"} <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function SectionHeader({
  eyebrow,
  title,
  text,
}: {
  eyebrow?: string;
  title: string;
  text?: string;
}) {
  return (
    <div className="max-w-3xl">
      {eyebrow && (
        <span className="text-xs font-bold tracking-[0.2em] text-accent uppercase">{eyebrow}</span>
      )}
      <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-primary leading-tight">
        {title}
      </h2>
      {text && <p className="mt-4 text-muted-foreground text-lg">{text}</p>}
    </div>
  );
}

/* ============ Why us ============ */
function WhyUs() {
  const { lang } = useI18n();
  const tr = T[lang];
  const icons = [Clock, BadgeCheck, Tag, HeartHandshake, Star];
  const ref = useReveal<HTMLDivElement>();
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div ref={ref} className="reveal mx-auto max-w-7xl">
        <SectionHeader
          eyebrow={lang === "ca" ? "Confiança local" : "Confianza local"}
          title={tr.why.title}
        />
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {tr.why.items.map((w, i) => {
            const Icon = icons[i] ?? CheckCircle2;
            return (
              <div
                key={w.t}
                className="bg-card rounded-2xl p-5 ring-1 ring-border hover:ring-accent/40 transition"
              >
                <div className="h-10 w-10 rounded-lg bg-primary/5 text-primary grid place-items-center">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-bold text-primary">{w.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{w.d}</p>
              </div>
            );
          })}
        </div>
        <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary/80">
          <MapPin className="h-4 w-4 text-accent" /> {tr.why.local}
        </div>
      </div>
    </section>
  );
}

/* ============ Portfolio ============ */
function Portfolio() {
  const { lang } = useI18n();
  const tr = T[lang];
  const [lightbox, setLightbox] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);
  const ref = useReveal<HTMLDivElement>();
  const visibleImages = showAll ? galleryImages : galleryImages.slice(0, 6);

  return (
    <section id="treballs" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/60">
      <div ref={ref} className="reveal mx-auto max-w-7xl">
        <SectionHeader
          eyebrow={lang === "ca" ? "Galeria" : "Galería"}
          title={tr.portfolio.title}
          text={tr.portfolio.intro}
        />
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {visibleImages.map((image, idx) => (
            <button
              key={idx}
              onClick={() => setLightbox(idx)}
              className="group relative overflow-hidden rounded-2xl ring-1 ring-border bg-card aspect-[4/3] text-left"
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/85 via-primary/20 to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-primary-foreground">
                <div className="font-semibold">
                  {tr.portfolio.photoLabel} {}
                </div>
              </div>
            </button>
          ))}
        </div>
        {galleryImages.length > 6 && (
          <div className="mt-8 flex justify-center">
            <button
              onClick={() => setShowAll((value) => !value)}
              className="inline-flex h-11 items-center justify-center rounded-full bg-primary px-5 text-sm font-bold text-primary-foreground hover:brightness-110 transition"
            >
              {showAll ? tr.portfolio.showLess : tr.portfolio.showMore}
            </button>
          </div>
        )}
      </div>

      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[80] bg-primary/90 backdrop-blur-sm grid place-items-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-4 right-4 h-10 w-10 grid place-items-center rounded-full bg-background/20 text-white"
          >
            <X className="h-5 w-5" />
          </button>
          <img
            src={galleryImages[lightbox].src}
            alt={galleryImages[lightbox].alt}
            className="max-h-[88vh] max-w-[92vw] rounded-2xl shadow-2xl"
          />
        </div>
      )}
    </section>
  );
}

/* ============ Reviews ============ */
function Reviews() {
  const { lang } = useI18n();
  const tr = T[lang];
  const data = REVIEWS[lang];
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="opinions" className="py-20 px-4 sm:px-6 lg:px-8">
      <div ref={ref} className="reveal mx-auto max-w-7xl">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeader
            eyebrow={lang === "ca" ? "Opinions reals" : "Opiniones reales"}
            title={tr.reviewsSection.title}
          />
          <div className="flex items-center gap-3 bg-card ring-1 ring-border rounded-2xl px-4 py-3">
            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-accent text-accent" />
              ))}
            </div>
            <div className="text-sm font-semibold text-primary">{tr.reviewsSection.avg}</div>
          </div>
        </div>
        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {data.map((r) => (
            <ReviewCard
              key={r.name}
              name={r.name}
              text={r.text}
              more={tr.reviewsSection.more}
              less={tr.reviewsSection.less}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
function ReviewCard({
  name,
  text,
  more,
  less,
}: {
  name: string;
  text: string;
  more: string;
  less: string;
}) {
  const [open, setOpen] = useState(false);
  const long = text.length > 160;
  const shown = !long || open ? text : text.slice(0, 160).trimEnd() + "…";
  return (
    <article className="bg-card rounded-2xl p-6 ring-1 ring-border hover:shadow-[var(--shadow-lift)] hover:-translate-y-1 transition">
      <div className="flex items-center gap-1 text-accent">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-accent" />
        ))}
      </div>
      <p className="mt-3 text-foreground/90 leading-relaxed">"{shown}"</p>
      {long && (
        <button onClick={() => setOpen(!open)} className="mt-2 text-sm font-semibold text-accent">
          {open ? less : more}
        </button>
      )}
      <div className="mt-5 flex items-center gap-3">
        <div className="h-10 w-10 rounded-full bg-[var(--gradient-accent)] text-accent-foreground grid place-items-center font-bold">
          {name.charAt(0)}
        </div>
        <div>
          <div className="font-semibold text-primary text-sm">{name}</div>
          <div className="text-xs text-muted-foreground">Google Review</div>
        </div>
      </div>
    </article>
  );
}

/* ============ Process ============ */
function Process() {
  const { lang } = useI18n();
  const tr = T[lang];
  const ref = useReveal<HTMLDivElement>();
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/60">
      <div ref={ref} className="reveal mx-auto max-w-7xl">
        <SectionHeader eyebrow={lang === "ca" ? "Mètode" : "Método"} title={tr.process.title} />
        <ol className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {tr.process.steps.map((s, i) => (
            <li key={s.t} className="relative bg-card rounded-2xl p-6 ring-1 ring-border">
              <div className="absolute -top-4 left-6 h-10 w-10 rounded-xl bg-[var(--gradient-accent)] text-accent-foreground font-extrabold grid place-items-center shadow-[var(--shadow-glow)]">
                {i + 1}
              </div>
              <h3 className="mt-4 font-bold text-primary">{s.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ============ Contact ============ */
function Contact() {
  const { lang } = useI18n();
  const tr = T[lang];
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="contacte" className="py-20 px-4 sm:px-6 lg:px-8">
      <div ref={ref} className="reveal mx-auto max-w-7xl grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-5">
          <SectionHeader
            eyebrow={lang === "ca" ? "Parlem" : "Hablemos"}
            title={tr.contact.title}
            text={tr.contact.text}
          />
          <ul className="mt-8 space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <Phone className="h-5 w-5 text-accent mt-0.5" />
              <a href={TEL} className="font-semibold text-primary hover:text-accent">
                {PHONE}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <MessageCircle className="h-5 w-5 text-[#25D366] mt-0.5" />
              <a href={WA} className="font-semibold text-primary hover:text-accent">
                WhatsApp +34 {PHONE}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Globe className="h-5 w-5 text-accent mt-0.5" />
              <span className="font-semibold text-primary">fixprogirona.com</span>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="h-5 w-5 text-accent mt-0.5" />
              <span className="font-semibold text-primary">{tr.contact.area}</span>
            </li>
            <li className="flex items-start gap-3">
              <Clock className="h-5 w-5 text-success mt-0.5" />
              <span className="font-semibold text-primary">{tr.contact.hours}</span>
            </li>
          </ul>
          <div className="mt-6 rounded-2xl overflow-hidden ring-1 ring-border aspect-[16/10]">
            <iframe
              title="Girona map"
              src="https://www.google.com/maps?q=Girona%2017004&output=embed"
              className="w-full h-full"
              loading="lazy"
            />
          </div>
        </div>
        <div className="lg:col-span-7">
          <QuoteInline />
        </div>
      </div>
    </section>
  );
}
function QuoteInline() {
  const { lang } = useI18n();
  const tr = T[lang];
  const { status, handleSubmit } = useQuoteSubmit("contact");
  return (
    <form
      onSubmit={handleSubmit}
      className="bg-card rounded-3xl p-6 sm:p-8 shadow-[var(--shadow-lift)] ring-1 ring-border"
    >
      {status === "sent" ? (
        <div className="py-12 text-center">
          <div className="mx-auto h-14 w-14 rounded-full bg-success/15 text-success grid place-items-center">
            <CheckCircle2 className="h-7 w-7" />
          </div>
          <p className="mt-4 text-lg font-semibold text-primary">{tr.form.success}</p>
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 gap-4">
          <Field label={tr.form.name}>
            <input
              required
              name="name"
              placeholder={tr.form.placeholder.name}
              className="form-input"
            />
          </Field>
          <Field label={tr.form.phone}>
            <input
              required
              name="phone"
              type="tel"
              placeholder={tr.form.placeholder.phone}
              className="form-input"
            />
          </Field>
          <Field label={tr.form.type} className="sm:col-span-2">
            <select required name="serviceType" defaultValue="" className="form-input">
              <option value="" disabled>
                {tr.form.selectType}
              </option>
              {tr.form.types.map((x) => (
                <option key={x}>{x}</option>
              ))}
            </select>
          </Field>
          <Field label={tr.form.message} className="sm:col-span-2">
            <textarea
              name="message"
              rows={4}
              placeholder={tr.form.placeholder.message}
              className="form-input resize-none"
            />
          </Field>
          <button className="sm:col-span-2 mt-2 h-12 rounded-xl bg-accent text-accent-foreground font-bold shadow-[var(--shadow-glow)] hover:brightness-105 transition inline-flex items-center justify-center gap-2">
            {tr.form.whatsappButton} <MessageCircle className="h-4 w-4" />
          </button>
        </div>
      )}
    </form>
  );
}

/* ============ Footer ============ */
function Footer() {
  const { lang } = useI18n();
  const tr = T[lang];
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <img src={logo} alt="" className="h-10 w-10 bg-white/95 rounded-lg p-0.5" />
            <span className="font-display font-extrabold text-xl">FIXPRO GIRONA</span>
          </div>
          <p className="mt-4 text-primary-foreground/75 max-w-md">{tr.footer.desc}</p>
          <div className="mt-5 flex gap-2">
            <a
              href={TEL}
              className="inline-flex items-center gap-2 px-4 h-11 rounded-full bg-accent text-accent-foreground font-semibold"
            >
              <Phone className="h-4 w-4" /> {PHONE}
            </a>
            <a
              href={WA}
              className="inline-flex items-center gap-2 px-4 h-11 rounded-full bg-[#25D366] text-white font-semibold"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </a>
          </div>
        </div>
        <div>
          <h4 className="text-sm font-bold tracking-widest uppercase text-accent">
            {lang === "ca" ? "Navegació" : "Navegación"}
          </h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a href="#serveis" className="text-primary-foreground/80 hover:text-accent">
                {tr.nav.services}
              </a>
            </li>
            <li>
              <a href="#treballs" className="text-primary-foreground/80 hover:text-accent">
                {tr.nav.works}
              </a>
            </li>
            <li>
              <a href="#opinions" className="text-primary-foreground/80 hover:text-accent">
                {tr.nav.reviews}
              </a>
            </li>
            <li>
              <a href="#contacte" className="text-primary-foreground/80 hover:text-accent">
                {tr.nav.contact}
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-bold tracking-widest uppercase text-accent">
            {lang === "ca" ? "Contacte" : "Contacto"}
          </h4>
          <ul className="mt-4 space-y-2 text-sm text-primary-foreground/80">
            <li>{tr.contact.area}</li>
            <li>{tr.contact.hours}</li>
            <li>fixprogirona.com</li>
          </ul>
          <div className="mt-4">
            <LangSwitch />
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-5 text-xs text-primary-foreground/60 text-center">
          {tr.footer.rights}
        </div>
      </div>
    </footer>
  );
}

/* ============ Mobile bar ============ */
function MobileStickyBar() {
  const { lang } = useI18n();
  const tr = T[lang];
  return (
    <div className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-background/95 backdrop-blur border-t border-border p-2 grid grid-cols-2 gap-2">
      <a
        href={TEL}
        className="h-12 rounded-xl bg-primary text-primary-foreground font-semibold inline-flex items-center justify-center gap-2"
      >
        <Phone className="h-4 w-4" /> {tr.cta.callShort}
      </a>
      <a
        href={WA}
        className="h-12 rounded-xl bg-[#25D366] text-white font-semibold inline-flex items-center justify-center gap-2"
      >
        <MessageCircle className="h-4 w-4" /> WhatsApp
      </a>
    </div>
  );
}
