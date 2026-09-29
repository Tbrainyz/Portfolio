import { Reveal } from "./ui/Reveal";
import { ContactInfo } from "./ContactInfo";
import { ContactForm } from "./ContactForm";

const socials = [
  { label: "GitHub", href: "https://github.com/Tbrainyz" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/gbadebo-wale-36ba151a1/" },
  { label: "X / Twitter", href: "#" },
];

export function Contact() {
  return (
    <section id="contact" className="relative z-[3] px-7 py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mb-14 text-center">
          <span className="mb-2.5 block font-mono text-xs tracking-wide text-brand-magenta">CONTACT</span>
          <h2 className="mb-4 font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
            Let's build something that has to work.
          </h2>
          <p className="mx-auto max-w-md text-dim">
            Open to full-time, contract, or freelance work — remote or on-site. Reach me however's easiest.
          </p>
        </Reveal>

        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal className="flex flex-col justify-between">
            <ContactInfo />
            <div className="mt-10 flex gap-5">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="font-mono text-[13px] text-dim transition hover:text-fg"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </Reveal>

          <Reveal>
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
