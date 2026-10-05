import { Reveal } from "@/components/animations/Reveal";
import { useSplitReveal } from "@/hooks/useSplitReveal";

export function IntroStatement() {
  const textRef = useSplitReveal<HTMLParagraphElement>({
    splitType: "lines",
    mode: "lineSlide",
    stagger: 0.05,
  });

  return (
    <section className="relative border-y border-hair px-6 py-24 md:px-10 md:py-36">
      <div className="mx-auto grid max-w-[1440px] gap-16 md:grid-cols-12">
        <div className="md:col-span-3">
          <p className="font-mono-tag text-muted-foreground">§ 01 — Manifesto</p>
        </div>
        <Reveal className="md:col-span-9">
          <div
            ref={textRef}
            className="font-display text-balance-tight text-[clamp(2rem,4vw,4.2rem)]"
          >
            <div className="split-target">
              I like software where <em className="not-italic italic text-ember">every layer </em>
               &nbsp; matters 
            </div>
            <div className="split-target">
              the interface people touch, the services carrying the load, and the systems making
            </div>
            <div className="split-target">the hard decisions underneath. I build across them </div>
            <div className="split-target italic text-foreground/75">
              multi-tenant products, AI infrastructure, browser tooling, search engines, and
            </div>
            <div className="split-target italic text-foreground/75">
              low-latency software designed to perform.
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
