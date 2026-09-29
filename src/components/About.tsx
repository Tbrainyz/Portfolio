import { Reveal } from "./ui/Reveal";
import { ImageWithFallback } from "./ui/ImageWithFallback";

const facts = [
  { label: "LOCATION", value: "Lagos, Nigeria" },
  { label: "OPEN TO", value: "Full-time · Contract · Freelance" },
  { label: "STACK", value: "MERN + TypeScript" },
  { label: "TIMEZONE", value: "WAT (UTC+1)" },
];

export function About() {
  return (
    <section id="about" className="relative z-[3] px-7 py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[0.85fr_1.15fr]">
        <Reveal>
          <div className="aspect-[4/5] overflow-hidden rounded-[20px] border border-surface/10 bg-gradient-to-br from-brand-amber/15 to-brand-magenta/10">
            <ImageWithFallback src="/images/about-photo.jpg" alt="Gbadebo Wale" label="Add a photo of yourself" />
          </div>
        </Reveal>

        <Reveal>
          <span className="mb-2.5 block font-mono text-xs tracking-wide text-brand-magenta">ABOUT</span>
          <h2 className="mb-5 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Built for constraints most teams never see
          </h2>
          <p className="mb-4 text-base leading-8 text-dim">
            I'm a full-stack developer based in Lagos, building SaaS products end to end — from database schema
            to deploy pipeline. Most of my work has targeted the Nigerian market specifically:{" "}
            <strong className="font-semibold text-fg">
              Naira pricing, Paystack instead of Stripe, WhatsApp instead of email-first flows, Termii instead
              of Twilio.
            </strong>{" "}
            Designing for unreliable networks and real payment edge cases is a different discipline than
            shipping a tutorial project — and it's the one I want to bring to my next team.
          </p>
          <p className="mb-6 text-base leading-8 text-dim">
            Outside of engineering, I run creator campaigns for brands across TikTok, Instagram, and X — which
            keeps me close to how products actually get discovered, not just how they're built.
          </p>

          <div className="flex flex-wrap gap-2.5">
            {facts.map((fact) => (
              <div key={fact.label} className="rounded-lg border border-surface/10 bg-surface/5 px-3.5 py-2.5">
                <span className="block font-mono text-[10px] text-dim">{fact.label}</span>
                <span className="text-[13.5px] font-semibold">{fact.value}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
