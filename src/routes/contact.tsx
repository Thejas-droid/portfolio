import { createFileRoute } from "@tanstack/react-router";
import { HeroOrb } from "@/components/sections/HeroOrb";
import { Magnetic } from "@/components/animations/Magnetic";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Thejas S" },
      {
        name: "description",
        content:
          "Get in touch with Thejas S — Software Engineer working across frontend, AI, systems, and quantitative engineering.",
      },
      { property: "og:title", content: "Contact — Thejas S" },
      {
        property: "og:description",
        content: "Three channels. One good problem away from a conversation.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [activeLink, setActiveLink] = useState<string | null>(null);
  const channels = [
    { label: "Email", value: "thejass274@gmail.com", href: "mailto:thejass274@gmail.com" },
    { label: "GitHub", value: "github.com/thejas-droid", href: "https://github.com/thejas-droid" },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/thejass274",
      href: "https://www.linkedin.com/in/thejass274",
    },
  ];

  return (
    <section className="relative overflow-hidden px-6 pb-32 pt-40 md:px-10 md:pb-48 md:pt-56">
      <HeroOrb />
      <div className="relative z-10 mx-auto max-w-[1440px]">
        <div className="flex flex-col items-center text-center">
          <p className="font-mono-tag text-muted-foreground">Home · Contact</p>
          <h1 className="font-display text-balance-tight mt-6 text-[clamp(2.5rem,10vw,9rem)]">
            Bring the problem.
            <br />
            <span className="italic text-ember">Let's trace the signal.</span>
          </h1>
        </div>

        <div className="mt-20 grid gap-16 md:grid-cols-12">
          <div className="space-y-6 md:col-span-6">
            <p className="text-lg leading-relaxed text-muted-foreground md:text-xl">
              Frontend architecture, AI infrastructure, low-latency C++, system design, or an idea
              still too strange for a roadmap—I am always interested in the problems hiding one
              layer deeper. Bring the rough sketch, the stubborn bug, or the ambitious build. We
              can find the shape of it together.
            </p>
            <Magnetic className="inline-block">
              <a
                href="mailto:thejass274@gmail.com"
                className="inline-flex items-center gap-3 rounded-full bg-foreground px-8 py-4 text-background transition-colors hover:bg-ember"
                data-cursor="hover"
              >
                <span className="font-mono-tag">Send the first signal</span>
                <span aria-hidden>→</span>
              </a>
            </Magnetic>
          </div>

          <ul
            className={`border-t md:col-span-5 md:col-start-8 transition-colors duration-300 ${activeLink ? "border-transparent" : "border-hair"}`}
            onMouseLeave={() => setActiveLink(null)}
          >
            {channels.map((c) => (
              <li
                key={c.label}
                className={`border-b last:border-b-0 transition-colors duration-300 ${activeLink ? "border-transparent" : "border-hair"}`}
              >
                <a
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  onMouseEnter={() => setActiveLink(c.label)}
                  onFocus={() => setActiveLink(c.label)}
                  className={`project-row group flex items-center justify-between gap-4 px-0 py-6 outline-none transition-opacity duration-300 md:px-6 ${activeLink === null || activeLink === c.label ? "opacity-100" : "opacity-40"}`}
                  data-cursor="hover"
                >
                  <div>
                    <p className="font-mono-tag text-muted-foreground mb-2 transition-colors group-hover:text-foreground">
                      {c.label}
                    </p>
                    <span className="font-display inline-block text-2xl md:text-3xl transition-transform duration-500 group-hover:translate-x-3">
                      {c.value}
                    </span>
                  </div>
                  <div className="flex shrink-0 justify-end">
                    <Magnetic strength={0.22}>
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-hair bg-paper transition-colors group-hover:border-ember group-hover:bg-ember group-hover:text-paper">
                        <ArrowUpRight size={20} aria-hidden />
                      </span>
                    </Magnetic>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
