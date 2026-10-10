import { Reveal } from "@/components/animations/Reveal";
import { HeroOrb } from "@/components/sections/HeroOrb";
import { createFileRoute } from "@tanstack/react-router";
import { publicAsset } from "@/lib/public-asset";

type WorkProject = {
  slug: string;
  index: string;
  title: string;
  tagline: string;
  year: string;
  role: string;
  stack: string[];
  repo: string;
  image: string;
  kind: "production" | "ai" | "frontend" | "systems" | "quant";
  body: string[];
};

const placeholderImage = publicAsset("project-placeholder.svg");
const placeholderLink = "#project-link-placeholde";

const workProjects: WorkProject[] = [
  {
    slug: "lims-platform",
    index: "01",
    title: "Laboratory Information Management System",
    tagline: "Multi-tenant laboratory operations at production scale.",
    year: "2025 – Present",
    role: "Software Engineer · Jaldee Soft",
    stack: ["React", "TypeScript", "Angular", "Jenkins", "AWS CloudFront"],
    repo: "https://jaldee.com/business/lims",
    image: publicAsset("lims.png"),
    kind: "production",
    body: [
      "Architected and developed a multi-tenant LIMS supporting 750+ orders per day across 25 laboratories, covering test configuration, order processing, result workflows, and reporting.",
      "Built automated delivery with Jenkins CI/CD, CDN-backed tenant configuration, dynamic report templates, and rich-text and PDF rendering.",
    ],
  },
  {
    slug: "veterinary-telehealth",
    index: "02",
    title: "Veterinary Telehealth & Commerce",
    tagline: "Consultations, prescriptions, and commerce in one configurable product.",
    year: "2025 – Present",
    role: "Software Engineer · Jaldee Soft",
    stack: ["React", "TypeScript", "Twilio", "REST APIs", "CDN Configuration"],
    repo: "https://play.google.com/store/apps/details?id=com.jaldeeinc.jaldeevets",
    image: publicAsset("chotaboss.png"),
    kind: "production",
    body: [
      "Built a veterinary telehealth and pet-commerce experience supporting 150+ daily bookings across scheduling, video consultations, chat, prescriptions, and purchases.",
      "Designed a JSON and CDN configuration layer that enables tenant-specific interface and behavior changes without a new deployment.",
    ],
  },
  {
    slug: "gold-erp",
    index: "03",
    title: "Multi-branch Gold ERP",
    tagline: "Operational software for inventory, sales, and billing workflows.",
    year: "2025 – Present",
    role: "Software Engineer · Jaldee Soft",
    stack: ["React", "Angular", "TypeScript", "Micro Frontends", "REST APIs"],
    repo: "https://jaldee.com/business/golderp",
    image: publicAsset("golderp.png"),
    kind: "production",
    body: [
      "Developed sales, inventory, order, tagging, invoicing, and billing modules using a micro-frontend architecture for multi-branch operations.",
      "Integrated barcode and QR scanners, printers, and role-based business workflows into the application.",
    ],
  },
  {
    slug: "lead-collection-sdk",
    index: "04",
    title: "Lead Collection SDK",
    tagline: "An embeddable, client-configurable acquisition layer.",
    year: "2025",
    role: "Software Engineer · Jaldee Soft",
    stack: ["TypeScript", "JavaScript", "REST APIs", "Config-driven UI"],
    repo: "https://www.chotaboss.com",
    image: publicAsset("sdk.png"),
    kind: "production",
    body: [
      "Engineered an embeddable SDK with configurable forms, validation, styling, and API-driven submission workflows.",
      "Enabled site-specific client integrations without requiring changes to the core SDK or application.",
    ],
  },
  {
    slug: "multi-tenant-commerce",
    index: "05",
    title: "Multi-tenant Commerce Platform",
    tagline: "A reusable commerce foundation built for tenant-specific behavior.",
    year: "2025",
    role: "Software Engineer · Jaldee Soft",
    stack: ["React", "TypeScript", "Razorpay", "Caching", "REST APIs"],
    repo: "https://www.nutznfruitz.com/",
    image: publicAsset("carty.png"),
    kind: "production",
    body: [
      "Built a reusable commerce platform covering catalog, search, cart, checkout, payments, order tracking, offers, and store operations.",
      "Integrated Razorpay alongside caching, lazy loading, infinite scroll, dynamic pricing, coupons, and recommendations.",
    ],
  },
  // {
  //   slug: "forgelm",
  //   index: "06",
  //   title: "ForgeLM",
  //   tagline: "Reproducible LLM training and post-training from first principles.",
  //   year: "2026",
  //   role: "Personal Project · AI Engineering",
  //   stack: ["Python", "PyTorch", "Transformers", "TRL", "PEFT", "CUDA", "MLflow"],
  //   repo: placeholderLink,
  //   image: publicAsset("forge.png"),
  //   kind: "ai",
  //   body: [
  //     "Built an end-to-end platform around a decoder-only transformer implemented from first principles, spanning data and tokenizer versioning, pretraining, LoRA SFT, DPO, evaluation, and model registry workflows.",
  //     "Added mixed-precision CUDA training, checkpoint and resume, deterministic manifests, model lineage, experiment tracking, and promotion gates.",
  //   ],
  // },
  // {
  //   slug: "inferserve",
  //   index: "07",
  //   title: "InferServe",
  //   tagline: "A token-level, high-performance LLM inference engine.",
  //   year: "2026",
  //   role: "Personal Project · AI Engineering",
  //   stack: ["Python", "PyTorch", "CUDA", "FastAPI", "Prometheus", "Docker"],
  //   repo: placeholderLink,
  //   image: publicAsset("inferserve.png"),
  //   kind: "ai",
  //   body: [
  //     "Built iteration-level scheduling with continuous batching, chunked prefill, and paged KV-cache allocation for concurrent decoder-only generation.",
  //     "Implemented streaming, admission control, native Llama inference, cache reclamation, and metrics for latency, throughput, and cache utilization.",
  //   ],
  // },
  // {
  //   slug: "evallab",
  //   index: "08",
  //   title: "EvalLab",
  //   tagline: "Versioned evaluation and regression testing for models and agents.",
  //   year: "2026",
  //   role: "Personal Project · AI Engineering",
  //   stack: ["Python", "FastAPI", "PostgreSQL", "Docker", "React", "OpenTelemetry"],
  //   repo: placeholderLink,
  //   image: publicAsset("evallab.png"),
  //   kind: "ai",
  //   body: [
  //     "Built versioned evaluation scenarios with isolated tool environments, complete trajectory tracing, and deterministic, state-based, trajectory-based, and model-based evaluators.",
  //     "Added reliability analysis, paired-bootstrap confidence intervals, regression gates, trace replay, and CI-integrated quality reports.",
  //   ],
  // },
  // {
  //   slug: "printlab",
  //   index: "09",
  //   title: "PrintLab",
  //   tagline: "Deterministic visual regression for web and PDF rendering.",
  //   year: "2026",
  //   role: "Personal Project · Frontend Engineering",
  //   stack: ["TypeScript", "Playwright", "Chromium", "Web Workers", "BullMQ"],
  //   repo: placeholderLink,
  //   image: publicAsset("printlab.png"),
  //   kind: "frontend",
  //   body: [
  //     "Built pixel and perceptual comparison with DOM-based detection of clipping, collisions, overflow, and page-break errors.",
  //     "Engineered parallel rendering with BullMQ, worker threads, isolated Chromium contexts, baseline management, a React diff inspector, and GitHub Checks.",
  //   ],
  // },
{
  slug: "bugreplay",
  index: "10",
  title: "BugReplay",
  tagline: "Automatically capture frontend bugs, inspect their context, and replay browser interactions.",
  year: "2026",
  role: "Personal Project · Frontend Engineering",
  stack: [
    "TypeScript",
    "React",
    "Playwright",
    "Chrome Extension (MV3)",
    "IndexedDB",
    "Web Workers",
    "Node.js"
  ],
  repo: "https://github.com/Thejas-droid/bugreplay",
  image: publicAsset("bugreplay.png"),
  kind: "frontend",
  body: [
    "Engineered browser debugging toolkit with an embeddable TypeScript SDK, Manifest V3 extension, and React dashboard that automatically captures user interactions, runtime errors, network failures, sanitized DOM snapshots, and optional privacy-masked screenshots.",
    "Built compressed, versioned traces with IndexedDB-backed offline delivery and Web Worker decoding; implemented Playwright replay with confidence-ranked selector fallbacks, configurable timing, hybrid network mocking, generated regression-test scripts, and GitHub/Jira issue reporting.",
  ],
},
  // {
  //   slug: "design-system-compiler",
  //   index: "11",
  //   title: "Design-System Compiler",
  //   tagline: "From token graphs to typed, tested design-system artifacts.",
  //   year: "2026",
  //   role: "Personal Project · Frontend Engineering",
  //   stack: ["TypeScript", "Node.js", "Playwright", "AST Codemods", "Figma API"],
  //   repo: placeholderLink,
  //   image: publicAsset("design.png"),
  //   kind: "frontend",
  //   body: [
  //     "Built a compiler that resolves token dependency graphs, detects cyclic and type-invalid references, and generates CSS variables, typed APIs, themes, schemas, and documentation.",
  //     "Added a component registry, dependency-aware CLI, codemods, visual and accessibility tests, and Figma-to-code drift checks.",
  //   ],
  // },
 
{
  slug: "changelens",
  index: "12",
  title: "ChangeLens",
  tagline: "Visualize code dependencies and identify tests impacted by source changes.",
  year: "2026",
  role: "Personal Project · Systems & Full-Stack Engineering",
  stack: [
    "C++20",
    "React",
    "TypeScript",
    "React Flow",
    "Git",
    "OpenSSL",
    "Docker"
  ],
  repo: "https://github.com/Thejas-droid/changelens",
  image: publicAsset("changelens.png"),
  kind: "systems",
  body: [
    "Engineered a C++20 change-impact analysis engine supporting C++, TypeScript/JavaScript, and Python repositories, using dependency graphs, Tarjan strongly connected components, transitive traversal, and Git diff analysis to identify affected tests with explainable dependency paths.",
    "Built a React/TypeScript dashboard and authenticated C++ API for interactive dependency exploration, test discovery, change-impact analysis, and confidence-based full-suite fallbacks, packaged with a read-only Docker deployment.",
    "Implemented standalone DAG/LPT scheduling, dependency-aware SHA-256 cache fingerprints, flaky-test retries, cancellation handling, and optional PostgreSQL/Redis adapters to support future CI execution workflows."
  ],
},

  // {
  //   slug: "forgesearch",
  //   index: "13",
  //   title: "ForgeSearch",
  //   tagline: "A full-text and hybrid search engine built from scratch.",
  //   year: "2026",
  //   role: "Personal Project · Systems Engineering",
  //   stack: ["C++20", "RocksDB", "ONNX Runtime", "Drogon", "Docker"],
  //   repo: placeholderLink,
  //   image: publicAsset("forgesearch.png"),
  //   kind: "systems",
  //   body: [
  //     "Built a positional inverted index with compressed posting lists, BM25 ranking, Boolean and phrase queries, autocomplete, and typo correction.",
  //     "Implemented Block-Max WAND retrieval, sharded caching, hybrid ranking, incremental segments, atomic commits, background merging, and crash recovery.",
  //   ],
  // },

{
  slug: "imagedupe",
  index: "14",
  title: "ImageDupe",
  tagline: "Offline image similarity search with crash-safe indexing and exact Hamming ranking.",
  year: "2026",
  role: "Personal Project · Search & Systems Engineering",
  stack: [
    "Python",
    "NumPy",
    "FAISS",
    "HNSW",
    "NGT",
    "FastAPI",
    "SQLite",
    "PySide6",
    "Pillow"
  ],
  repo: "https://github.com/Thejas-droid/imagedupe",
  image: publicAsset("imagedupe.png"),
  kind: "systems",
  body: [
    "Developed a image similarity search application with a native Windows desktop interface, browser UI, REST API, and CLI. Implemented deterministic 64/256-bit perceptual hashing, Hamming-distance retrieval, image/hash queries, configurable similarity thresholds, and duplicate classification.",
    "Engineered multicore image fingerprinting, SHA-256 content-addressed caching, deduplicated fingerprint indexes, and immutable index generations with checksum validation, atomic promotion, incremental updates, and corruption recovery.",
    "Implemented pluggable FAISS BinaryFlat, BinaryHNSW, and NGT Hamming backends with exact candidate re-ranking and a NumPy fallback. Added offline Windows packaging, persistent SQLite collections, search benchmarking, and JSON/CSV result exports."
  ],
},

{
  slug: "orderbook",
  index: "15",
  title: "OrderBook",
  tagline: "A deterministic single-host limit-order matching engine with journaling and market-data publishing.",
  year: "2026",
  role: "Personal Project · Quant / Systems Engineering",
  stack: [
    "C++20",
    "Linux",
    "TCP",
    "epoll",
    "WebSocket",
    "Lock-free SPSC queues",
    "Write-ahead logging",
    "CMake"
  ],
  repo: "https://github.com/Thejas-droid/orderbook",
  image: publicAsset("orderbook.png"),
  kind: "quant",
  body: [
    "Built a C++20 electronic exchange backend supporting limit and market orders, strict price-time priority, indexed order lookup, intrusive FIFO price levels, partial fills, cancellation, and priority-aware modification rules.",
    "Designed a single-host pipeline with an authenticated TCP gateway, risk checks, a dedicated matching thread connected through cache-friendly SPSC queues, durable checksummed write-ahead journaling with crash recovery, and sequenced WebSocket market-data publishing plus HTTP readiness/metrics endpoints.",
    "Added randomized regression testing, concurrency and recovery validation, and a one-million-request in-memory benchmark to measure engine latency while clearly separating benchmark results from end-to-end service guarantees."
  ],
},
 {
  slug: "daybookdb",
  index: "16",
  title: "DaybookDB",
  tagline: "A single-node columnar tick database for high-volume market data research.",
  year: "2026",
  role: "Personal Project · Quant / Systems Engineering",
  stack: [
    "C++20",
    "Linux",
    "mmap",
    "Columnar Storage",
    "SIMD",
    "Zstd",
    "CMake"
  ],
  repo: "https://github.com/Thejas-droid/daybook",
  image: publicAsset("Daybook.png"),
  kind: "quant",
  body: [
    "Built a C++20 single-node columnar tick database for trades, quotes, and L2 book deltas using immutable append-only symbol/date partitions, fixed-point market values, blocked columnar storage, sparse timestamp indexes, and memory-mapped segment reads.",
    "Implemented specialized compression and storage primitives including delta, delta-of-delta, varint, zig-zag, bit packing, RLE, adaptive Zstd compression, CRC32C integrity checks, and atomic publish semantics for crash-consistent segment commits.",
    "Added copy-avoiding range queries, segment and block pruning, OHLCV / volume / VWAP aggregations, L2 order-book reconstruction from snapshots plus deltas, verifier and repair tooling, and runtime-dispatched SIMD-accelerated query paths."
  ],
},
  {
  slug: "marketledger",
  index: "17",
  title: "Market Ledger",
  tagline: "A deterministic trading simulator for order matching and cross-market spread analysis.",
  year: "2026",
  role: "Personal Project · Quant / Systems Engineering",
  stack: [
    "C++17",
    "CMake",
    "CSV Processing",
    "Priority Queues",
    "FIFO Order Books",
    "Python Reporting"
  ],
  repo: "https://github.com/Thejas-droid/marketledger",
  image: publicAsset("marketledger.png"),
  kind: "quant",
  body: [
    "Built a portable C++17 trading simulator and analysis toolkit that replays limit orders with deterministic price-time priority, FIFO queue matching, partial fills, inclusive expiry handling, self-trade prevention, and integer-cent cash accounting.",
    "Implemented canonical basket-instrument handling, fee-aware cross-market quote analysis, liquidity and quote-age constrained best-route selection, and structured JSON outputs for simulation and arbitrage workflows.",
    "Added randomized reference testing, CLI validation, and an interactive offline HTML report showing executions, traded value, broker cash movements, and potential spread opportunities without any runtime server dependency."
  ],
},
];

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Work — Thejas S" },
      {
        name: "description",
        content:
          "Selected production and personal projects across AI, frontend, systems, search, and quantitative engineering.",
      },
      { property: "og:title", content: "Work — Thejas S" },
      {
        property: "og:description",
        content:
          "Production software and independent engineering projects by Thejas S across multiple domains.",
      },
    ],
  }),
  component: WorkPage,
});

function WorkPage() {
  return (
    <>
      <section className="relative overflow-hidden px-6 pb-16 pt-40 md:px-10 md:pb-32 md:pt-56">
        <HeroOrb />
        <div className="relative z-10 mx-auto flex max-w-[1440px] flex-col items-center text-center">
          <p className="font-mono-tag text-muted-foreground">Index · Work</p>
          <h1 className="font-display text-balance-tight mt-6 text-[clamp(3rem,9vw,9rem)]">
            Things I've
            <br />
            <span className="italic text-ember">actually shipped.</span>
          </h1>
          <p className="mt-8 max-w-xl text-lg text-muted-foreground">
            Production software and personal projects across healthcare, commerce, AI, frontend
            infrastructure, search, systems, and quantitative engineering.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-[1440px]">
        <ProjectCategory title="Production Work" kind="production" />
        {/* <ProjectCategory title="AI & ML Systems" kind="ai" /> */}
        <ProjectCategory title="Frontend & Web Platform" kind="frontend" />
        <ProjectCategory title="Systems, Search & Infrastructure" kind="systems" />
        <ProjectCategory title="Quantitative & Trading Systems" kind="quant" />
      </div>
    </>
  );
}

function ProjectCategory({ title, kind }: { title: string; kind: WorkProject["kind"] }) {
  const categoryProjects = workProjects.filter((project) => project.kind === kind);

  if (categoryProjects.length === 0) return null;

  return (
    <section className="border-t border-hair px-6 py-16 md:px-10 md:py-24">
      <div className="mb-16">
        <h2 className="font-display text-[clamp(2rem,4vw,4rem)] text-foreground/90">{title}</h2>
      </div>
      <div className="space-y-24 md:space-y-40">
        {categoryProjects.map((project, index) => (
          <Reveal key={project.slug}>
            <article className="grid grid-cols-1 gap-8 md:grid-cols-12">
              <div className="md:col-span-3">
                <p className="font-mono-tag text-muted-foreground">
                  {project.index} / {String(workProjects.length).padStart(2, "0")}
                </p>
                <p className="font-mono-tag mt-6 text-muted-foreground">{project.year}</p>
                <p className="font-mono-tag mt-1 text-muted-foreground">{project.role}</p>
              </div>
              <div className="md:col-span-9">
                <h3 className="font-display text-[clamp(2.25rem,5.5vw,5.5rem)] leading-none">
                  {project.title}
                </h3>
                <p className="font-display mt-4 text-2xl italic text-muted-foreground md:text-3xl">
                  {project.tagline}
                </p>

                <div className="group relative mt-12 aspect-[16/9] w-full overflow-hidden rounded-xl border border-hair bg-paper shadow-2xl">
                  <img
                    src={project.image}
                    alt={`${project.title} placeholder`}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                <div className="mt-12 grid gap-6 md:grid-cols-2">
                  {project.body.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="text-base leading-relaxed text-muted-foreground"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
                <div className="mt-8 flex flex-wrap items-center gap-2">
                  {project.stack.map((technology) => (
                    <span
                      key={technology}
                      className="font-mono-tag rounded-full border border-hair px-3 py-1 text-muted-foreground"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
                <div className="mt-8 flex items-center gap-6">
                  <a
                    href={project.repo}
                    className="story-link font-mono-tag text-muted-foreground"
                  >
                    Project Link ↗
                  </a>
                </div>
              </div>
            </article>
            {index < categoryProjects.length - 1 && (
              <div className="mt-24 h-px w-full bg-hair md:mt-40" />
            )}
          </Reveal>
        ))}
      </div>
    </section>
  );
}
