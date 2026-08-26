import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Reveal } from "@/components/animations/Reveal";
import { Magnetic } from "@/components/animations/Magnetic";

const beats = [
  {
    year: "2019 — 2022",
    label: "Computer Hardware Engineering",
    note: "Completed a Diploma in Computer Hardware Engineering at Government Polytechnic College, Cherthala, building the hardware and systems foundation behind my software work.",
    lesson: "Understand the machine beneath the code.",
    image: "/poly.png",
  },
  {
    year: "2022 — 2025",
    label: "B.Tech in Computer Science and Engineering",
    note: "Studied Computer Science and Engineering at APJ Abdul Kalam Technological University and developed a deeper grounding in algorithms, operating systems, databases, and networks.",
    lesson: "Foundations make ambitious systems possible.",
    image: "/btech.png",
  },
  {
    year: "Aug — Oct 2025",
    label: "Software Engineering Intern",
    note: "Joined Jaldee Soft and built an embeddable lead-collection SDK plus a reusable multi-tenant commerce platform with payments and configurable client behavior.",
    lesson: "Reusable foundations multiply delivery speed.",
    image: "/jaldee.png",
  },
  {
    year: "Nov 2025 — Present",
    label: "Software Engineer at Jaldee Soft",
    note: "Building production healthcare, commerce, and enterprise products, including a LIMS serving 25 laboratories and 750+ daily orders, veterinary telehealth, and a multi-branch ERP.",
    lesson: "Production software is measured by real use.",
    image: "/jaldee.png",
  },
  {
    year: "2026",
    label: "Independent Systems Work",
    note: "Going deeper across LLM training and inference, browser infrastructure, search engines, CI intelligence, market data, and low-latency trading systems.",
    lesson: "Build the system to understand the system.",
    image: "/self.png",
  },
];

export function JourneyStrip() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 75%", "end 85%"],
  });

  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="relative overflow-hidden border-t border-hair bg-paper-warm px-6 py-24 md:px-10 md:py-36">
      <div className="mx-auto max-w-5xl">
        <header className="mb-24 text-center">
          <p className="font-mono-tag text-muted-foreground">§ 03 — Trajectory</p>
          <h2 className="font-display mt-5 text-[clamp(3.5rem,8vw,7rem)] leading-none">
            Journey map.
            <br />
            <span className="italic text-ember">Not dates.</span>
          </h2>
          <p className="mx-auto mt-8 max-w-md text-base leading-relaxed text-muted-foreground">
            Hardware fundamentals led to computer science, then reusable product foundations and
            production systems serving real businesses every day.
          </p>
        </header>

        <div ref={containerRef} className="relative pb-10">
          <div className="absolute left-[27px] top-0 bottom-0 w-[2px] bg-hair md:left-[39px]" />

          <motion.div
            style={{ height }}
            className="absolute left-[27px] top-0 w-[2px] bg-ember md:left-[39px]"
          />

          <motion.div
            style={{ top: height }}
            className="absolute left-[14px] -mt-3.5 flex h-7 w-7 items-center justify-center md:left-[26px] z-10"
          >
            <motion.div
              animate={{
                rotate: [0, 360],
                borderRadius: [
                  "60% 40% 50% 50% / 40% 50% 50% 60%",
                  "40% 60% 70% 30% / 50% 40% 60% 50%",
                  "70% 30% 40% 60% / 60% 70% 30% 40%",
                  "30% 70% 60% 40% / 40% 30% 70% 60%",
                  "50% 50% 30% 70% / 70% 60% 40% 30%",
                  "60% 40% 50% 50% / 40% 50% 50% 60%",
                ],
              }}
              transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
              className="h-full w-full bg-ember shadow-[0_0_20px_rgba(255,80,0,0.4)]"
            />
          </motion.div>

          <div className="flex flex-col gap-24">
            {beats.map((b, i) => (
              <Reveal key={b.year} delay={0.1}>
                <div className="pl-20 md:pl-32 flex flex-col md:flex-row md:items-center gap-12 justify-between">
                  <div className="flex-1 max-w-xl">
                    <div className="flex items-center gap-6">
                      <p className="font-mono-tag text-ember">{b.year}</p>
                      <div className="h-px flex-1 bg-hair" />
                    </div>
                    <h3 className="font-display mt-6 text-4xl leading-tight md:text-5xl">
                      {b.label}
                    </h3>
                    <p className="mt-5 text-lg leading-relaxed text-muted-foreground">{b.note}</p>
                    <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-hair bg-paper/50 px-5 py-2.5">
                      <span className="font-mono-tag text-sm">{b.lesson}</span>
                    </div>
                  </div>

                  <Magnetic strength={0.2}>
                    <div className="w-32 h-32 md:w-48 md:h-48 lg:w-[18rem] lg:h-[18rem] shrink-0 self-start md:self-auto">
                      <motion.div
                        animate={{
                          rotate: [0, 360],
                          borderRadius: [
                            "60% 40% 50% 50% / 40% 50% 50% 60%",
                            "40% 60% 70% 30% / 50% 40% 60% 50%",
                            "70% 30% 40% 60% / 60% 70% 30% 40%",
                            "30% 70% 60% 40% / 40% 30% 70% 60%",
                            "50% 50% 30% 70% / 70% 60% 40% 30%",
                            "60% 40% 50% 50% / 40% 50% 50% 60%",
                          ],
                        }}
                        transition={{ repeat: Infinity, duration: 18 + i * 2, ease: "linear" }}
                        className="w-full h-full overflow-hidden shadow-xl md:shadow-2xl relative cursor-pointer"
                      >
                        <motion.img
                          animate={{ rotate: [360, 0] }}
                          transition={{ repeat: Infinity, duration: 18 + i * 2, ease: "linear" }}
                          src={b.image}
                          alt={b.label}
                          className="absolute inset-0 w-full h-full object-contain p-4 md:p-6 lg:p-8"
                        />
                      </motion.div>
                    </div>
                  </Magnetic>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
