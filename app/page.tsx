"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AnimatedSection } from "@/components/AnimatedSection";
import { BrandMark } from "@/components/BrandMark";
import { SmoothScroll } from "@/components/SmoothScroll";
import { buns, burgers, navLinks, orderLinks, pokeSteps, restaurantShots } from "@/data/site";

export default function Home() {
  const heroRef = useRef<HTMLElement>(null);
  const burgerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.86]);
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 130]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.78], [1, 0]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.to(".burger-showcase-card", {
        yPercent: -8,
        rotate: (index) => (index % 2 === 0 ? -2.5 : 2.5),
        scale: 1.035,
        stagger: 0.08,
        ease: "none",
        scrollTrigger: {
          trigger: burgerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 0.8,
        },
      });
      gsap.to(".liquid-transition", {
        backgroundPosition: "80% 50%",
        scrollTrigger: { trigger: ".liquid-transition", start: "top bottom", end: "bottom top", scrub: true },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <main id="top" className="overflow-hidden bg-[#050505] text-[#F8F3EA]">
      <SmoothScroll />
      <Header />
      <motion.section ref={heroRef} className="hero-shell" style={{ scale: heroScale, y: heroY, opacity: heroOpacity }}>
        <div className="hero-ambient" />
        <motion.div
          className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-5 text-center"
          initial={{ opacity: 0, filter: "blur(18px)", y: 24 }}
          animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          transition={{ duration: 1.35, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="eyebrow">Bordeaux · Burger premium · Poké frais</p>
          <BrandMark />
          <h1 className="mt-8 max-w-5xl font-impact text-[clamp(3.5rem,13vw,12rem)] uppercase leading-[0.82] tracking-[-0.08em]">
            Eat me if you Khaan
          </h1>
          <p className="mt-6 max-w-2xl text-base text-white/72 md:text-xl">
            Burger × Poké — deux univers, une marque food premium pensée comme une expérience visuelle.
          </p>
          <div className="mt-9 flex w-full flex-col justify-center gap-3 sm:w-auto sm:flex-row">
            <a className="btn btn-primary" href="#burger">Découvrir la carte</a>
            <a className="btn btn-ghost" href="#commander">Commander</a>
          </div>
        </motion.div>
        <div className="scroll-indicator">Scroll</div>
      </motion.section>

      <TwoWorlds />
      <BurgerUniverse burgerRef={burgerRef} />
      <BunsSection />
      <PokeTransition />
      <PokeUniverse />
      <CreatePoke />
      <Philosophy />
      <Restaurant />
      <Order />
      <Future />
      <Footer />
    </main>
  );
}

function Header() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-4 py-4">
      <nav className="mx-auto flex max-w-6xl items-center justify-between rounded-full border border-white/10 bg-[#050505]/45 px-4 py-3 shadow-2xl shadow-black/25 backdrop-blur-xl">
        <a href="#top" className="text-sm font-semibold tracking-[0.22em] text-[#D2B27C]">KHAAN</a>
        <div className="hidden items-center gap-6 text-xs uppercase tracking-[0.22em] text-white/70 md:flex">
          {navLinks.map((link) => <a key={link.href} className="transition hover:text-white" href={link.href}>{link.label}</a>)}
        </div>
        <a href="#commander" className="rounded-full bg-[#F8F3EA] px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#211B10]">Commander</a>
      </nav>
    </header>
  );
}

function TwoWorlds() {
  return (
    <AnimatedSection className="relative bg-[#080706] px-5 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <p className="eyebrow">Deux univers</p>
        <h2 className="section-title max-w-4xl">Un écran qui se sépare. Deux envies qui se répondent.</h2>
        <div className="split-card mt-12">
          <motion.div className="world-panel burger-panel" whileInView={{ clipPath: "inset(0 0 0 0)" }} initial={{ clipPath: "inset(0 45% 0 0)" }} transition={{ duration: 1.1 }}>
            <span>Burger</span><strong>Chaud. Dense. Gourmand.</strong><p>Buns signature, sauces profondes, recettes généreuses.</p>
          </motion.div>
          <motion.div className="world-panel poke-panel" whileInView={{ clipPath: "inset(0 0 0 0)" }} initial={{ clipPath: "inset(0 0 0 45%)" }} transition={{ duration: 1.1 }}>
            <span>Poké</span><strong>Frais. Coloré. Tropical.</strong><p>Bols lumineux, ingrédients nets, personnalisation fluide.</p>
          </motion.div>
          <div className="split-logo"><BrandMark compact /></div>
        </div>
      </div>
    </AnimatedSection>
  );
}

function BurgerUniverse({ burgerRef }: { burgerRef: React.RefObject<HTMLDivElement | null> }) {
  return (
    <section id="burger" className="relative bg-burger px-5 py-24 md:py-36">
      <div className="mx-auto max-w-6xl">
        <p className="eyebrow text-[#F7B733]">Univers burger</p>
        <h2 className="section-title max-w-4xl">Des burgers traités comme des objets de désir.</h2>
        <p className="mt-5 max-w-2xl text-white/62">La V1 utilise des placeholders SVG propres. Remplacez simplement les fichiers dans <code>/public/images</code> par les vraies photos détourées.</p>
        <div ref={burgerRef} className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {burgers.map((burger, index) => (
            <motion.article
              className="burger-showcase-card product-card"
              key={burger.name}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06, duration: 0.75 }}
            >
              <div className="product-orbit" style={{ borderColor: burger.tone }} />
              <Image src={burger.image} alt={`Placeholder burger ${burger.name}`} width={520} height={360} className="relative z-10 h-56 w-full object-contain" />
              <div className="relative z-10 mt-5 flex items-end justify-between gap-4">
                <div><h3 className="font-serif text-4xl text-[#F8F3EA]">{burger.name}</h3><p className="mt-2 text-sm text-white/58">{burger.detail}</p></div>
                <span className="rounded-full border border-white/12 px-3 py-1 text-xs uppercase tracking-[0.2em] text-[#D2B27C]">Grand</span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function BunsSection() {
  return (
    <AnimatedSection className="bg-[#0A0806] px-5 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div><p className="eyebrow text-[#D2B27C]">Signature</p><h2 className="section-title">Buns colorés, attitude premium.</h2></div>
          <p className="max-w-md text-white/58">Une signature visuelle forte, élégante, jamais enfantine.</p>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {buns.map((bun, index) => <motion.div key={bun.name} className="bun-card" animate={{ y: [0, -12, 0] }} transition={{ repeat: Infinity, duration: 4 + index * 0.45, ease: "easeInOut" }}><div className="bun-visual" style={{ background: bun.color }} /><h3>{bun.name}</h3><p>{bun.note}</p></motion.div>)}
        </div>
      </div>
    </AnimatedSection>
  );
}

function PokeTransition() {
  return <section className="liquid-transition"><div className="mx-auto max-w-4xl px-5 py-28 text-center"><p className="eyebrow">Transition poké</p><h2 className="font-serif text-[clamp(3rem,10vw,8rem)] leading-none">Le brun fond. Le lagon arrive.</h2></div></section>;
}

function PokeUniverse() {
  const ingredients = ["Avocat", "Saumon", "Mangue", "Edamame", "Radis", "Sésame"];
  return (
    <section id="poke" className="relative bg-poke px-5 py-24 text-[#022B3A] md:py-36">
      <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1fr_1.05fr]">
        <AnimatedSection className=""><p className="eyebrow text-[#007A73]">Univers poké</p><h2 className="section-title text-[#022B3A]">Fraîcheur graphique, couleurs nettes, bol central.</h2><p className="mt-5 max-w-xl text-[#022B3A]/70">Un univers lumineux qui valorise l’équilibre, la personnalisation et la précision des ingrédients.</p></AnimatedSection>
        <div className="relative min-h-[520px]">
          <motion.div className="poke-bowl" initial={{ scale: 0.86, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} transition={{ duration: 0.9 }}>
            <Image src="/images/poke-large.svg" alt="Placeholder poké large" width={560} height={420} className="h-full w-full object-contain" />
          </motion.div>
          {ingredients.map((item, index) => <motion.span key={item} className="ingredient-chip" style={{ left: `${index % 2 ? 66 : 4}%`, top: `${12 + index * 13}%` }} initial={{ opacity: 0, scale: 0.4, y: 30 }} whileInView={{ opacity: 1, scale: 1, y: 0 }} transition={{ delay: index * 0.12, duration: 0.55 }}>{item}</motion.span>)}
        </div>
      </div>
    </section>
  );
}

function CreatePoke() {
  return (
    <AnimatedSection id="create" className="bg-[#F8F3EA] px-5 py-24 text-[#022B3A]">
      <div className="mx-auto max-w-6xl"><p className="eyebrow text-[#00A99D]">Crée ton poké</p><h2 className="section-title text-[#022B3A]">Six gestes simples. Un bol à ton image.</h2><div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">{pokeSteps.map((step, index) => <motion.div className="step-card" key={step} whileHover={{ y: -8, scale: 1.02 }}><span>{index + 1}</span><h3>{step}</h3><p>Interface prête à connecter à une carte réelle ou à un module de commande.</p></motion.div>)}</div></div>
    </AnimatedSection>
  );
}

function Philosophy() {
  const points = ["Préparation à la commande", "Produits sélectionnés", "Recettes originales", "Double univers burger et poké"];
  return <AnimatedSection className="bg-[#211B10] px-5 py-24"><div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[1.1fr_0.9fr]"><div><p className="eyebrow">Philosophie Khaan</p><h2 className="section-title">Frais. Gourmand. Équilibré.</h2><p className="mt-6 max-w-2xl text-lg text-white/68">Khaan Burger × Poké réunit deux univers dans une seule marque : des burgers généreux et des pokés frais, pensés pour ceux qui veulent manger vite, bien et avec plaisir.</p></div><div className="grid gap-3">{points.map((point) => <div className="proof-row" key={point}>{point}</div>)}</div></div></AnimatedSection>;
}

function Restaurant() {
  return <section className="bg-[#050505] px-5 py-24"><div className="mx-auto max-w-6xl"><p className="eyebrow text-[#D2B27C]">Restaurant</p><h2 className="section-title max-w-4xl">Une adresse à Bordeaux, pensée comme un lieu de marque.</h2><div className="restaurant-grid mt-12">{restaurantShots.map((shot, index) => <figure className={`restaurant-shot shot-${index}`} key={shot.label}><Image src={shot.src} alt={`Placeholder ${shot.label}`} width={720} height={520} className="h-full w-full object-cover" /><figcaption>{shot.label}</figcaption></figure>)}</div></div></section>;
}

function Order() {
  return <section id="commander" className="bg-[#F8F3EA] px-5 py-24 text-[#211B10]"><div className="mx-auto max-w-6xl"><div className="rounded-[2rem] bg-[#211B10] p-6 text-[#F8F3EA] md:p-10"><p className="eyebrow text-[#D2B27C]">Commander</p><h2 className="section-title">Burger ou Poké ? Choisis ton mood.</h2><div className="mt-8 grid gap-4 md:grid-cols-2"><a className="order-card burger-order" href={orderLinks.burger}><span>Commander Burger</span><strong>Noir, cheddar, sauce.</strong></a><a className="order-card poke-order" href={orderLinks.poke}><span>Commander Poké</span><strong>Lagon, fraîcheur, couleurs.</strong></a></div><div className="mt-8 grid gap-4 text-sm text-white/68 md:grid-cols-4"><a href={orderLinks.uberEats}>Uber Eats</a><a href={orderLinks.clickCollect}>Click & Collect</a><p>Adresse : Bordeaux — à compléter</p><p>Horaires : 11h30–22h30 — à confirmer</p></div></div></div></section>;
}

function Future() {
  return <AnimatedSection className="bg-[#050505] px-5 py-28 text-center"><p className="eyebrow text-[#D2B27C]">Futur Khaan</p><h2 className="font-serif text-[clamp(3rem,9vw,8rem)] leading-none">Aujourd’hui à Bordeaux. Demain ailleurs.</h2></AnimatedSection>;
}

function Footer() {
  const links = ["Burger", "Poké", "Commander", "Contact", "Franchise", "Mentions légales"];
  return <footer className="border-t border-white/10 bg-[#050505] px-5 py-12"><div className="mx-auto flex max-w-6xl flex-col gap-8 md:flex-row md:items-end md:justify-between"><div><BrandMark compact /><p className="mt-4 font-serif text-2xl italic text-white/80">Eat me if you Khaan</p></div><div className="flex flex-wrap gap-4 text-sm text-white/58">{links.map((link) => <a href="#" key={link}>{link}</a>)}<a href={orderLinks.instagram}>Instagram</a><a href={orderLinks.facebook}>Facebook</a></div></div></footer>;
}
