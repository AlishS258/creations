"use client";

import { useState } from "react";

const visionYears = [
  {
    year: "2026",
    title: "THE FOUNDATION",
    description:
      "Learn deeply. Build discipline. Understand how intelligence, technology and ideas become real systems.",
    label: "LEARN",
  },
  {
    year: "2027",
    title: "THE BUILDER",
    description:
      "Transform knowledge into intelligent applications, automations and systems that solve real problems.",
    label: "BUILD",
  },
  {
    year: "2028",
    title: "THE CREATOR",
    description:
      "Turn ideas into products, experiments and opportunities that create real value.",
    label: "CREATE",
  },
  {
    year: "2029",
    title: "THE MULTIPLIER",
    description:
      "Use AI, systems and technology to multiply time, knowledge and execution.",
    label: "SCALE",
  },
  {
    year: "2031",
    title: "THE INDEPENDENT",
    description:
      "Build a life powered by intelligence, discipline, creativity and the freedom to choose my own direction.",
    label: "FREEDOM",
  },
];

const principles = [
  {
    number: "01",
    title: "DO THE WORK",
    description: "Discipline before motivation.",
  },
  {
    number: "02",
    title: "LEARN DEEPLY",
    description: "Depth creates confidence.",
  },
  {
    number: "03",
    title: "BUILD BEFORE READY",
    description: "Action creates clarity.",
  },
  {
    number: "04",
    title: "USE AI AS LEVERAGE",
    description: "Technology should multiply capability.",
  },
  {
    number: "05",
    title: "THINK LONG-TERM",
    description: "Small progress compounds.",
  },
  {
    number: "06",
    title: "BECOME INDEPENDENT",
    description: "Freedom is built intentionally.",
  },
];

const buildCards = [
  {
    number: "01",
    title: "AI INTELLIGENCE",
    description:
      "Understanding how intelligent systems think, learn, reason and interact with the world.",
  },
  {
    number: "02",
    title: "AUTOMATION",
    description:
      "Turning repetitive work into intelligent systems that create more time for meaningful work.",
  },
  {
    number: "03",
    title: "DIGITAL PRODUCTS",
    description:
      "Transforming ideas into useful products that solve real problems.",
  },
  {
    number: "04",
    title: "ENTREPRENEURSHIP",
    description:
      "Learning to identify opportunities, create value and build something of my own.",
  },
];

export default function Page() {
  const [activeYear, setActiveYear] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  const selectedVision = visionYears[activeYear];

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });

    setMenuOpen(false);
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[#17121F] text-[#FFF8F0]">

      {/* GLOBAL BACKGROUND */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">

        <div className="absolute -left-40 -top-40 h-[550px] w-[550px] rounded-full bg-[#6D435A]/20 blur-[160px]" />

        <div className="absolute right-[-180px] top-[20%] h-[650px] w-[650px] rounded-full bg-[#A9784D]/10 blur-[180px]" />

        <div className="absolute bottom-[-250px] left-[30%] h-[600px] w-[600px] rounded-full bg-[#8E5262]/10 blur-[180px]" />

        <div className="absolute inset-0 opacity-[0.025] [background-image:linear-gradient(#FFF8F0_1px,transparent_1px),linear-gradient(90deg,#FFF8F0_1px,transparent_1px)] [background-size:80px_80px]" />

      </div>

      {/* NAVBAR */}
      <nav className="relative z-50 border-b border-[#F4D9B4]/10">

        <div className="mx-auto flex max-w-[1500px] items-center justify-between px-6 py-6 lg:px-12">

          <button
            onClick={() => scrollToSection("home")}
            className="group flex items-center gap-4"
          >

            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#D6A85F]/50 text-xl text-[#D6A85F] transition group-hover:rotate-45">
              ✦
            </div>

            <div className="text-left">

              <p className="text-sm font-semibold tracking-[0.18em]">
                ALISHBA AZHAR
              </p>

              <p className="mt-1 text-[8px] tracking-[0.35em] text-[#B8AEBB]">
                FUTURE IN PROGRESS
              </p>

            </div>

          </button>

          <div className="hidden items-center gap-8 text-[9px] uppercase tracking-[0.2em] text-[#B8AEBB] lg:flex">

            <button
              onClick={() => scrollToSection("vision")}
              className="transition hover:text-[#D6A85F]"
            >
              Vision
            </button>

            <button
              onClick={() => scrollToSection("leverage")}
              className="transition hover:text-[#D6A85F]"
            >
              AI Leverage
            </button>

            <button
              onClick={() => scrollToSection("building")}
              className="transition hover:text-[#D6A85F]"
            >
              Building
            </button>

            <button
              onClick={() => scrollToSection("principles")}
              className="transition hover:text-[#D6A85F]"
            >
              Principles
            </button>

            <button
              onClick={() => scrollToSection("contact")}
              className="transition hover:text-[#D6A85F]"
            >
              Contact
            </button>

          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-full border border-[#F4D9B4]/20 px-4 py-2 text-sm text-[#D6A85F] lg:hidden"
          >
            {menuOpen ? "×" : "☰"}
          </button>

        </div>

        {menuOpen && (
          <div className="border-t border-[#F4D9B4]/10 bg-[#17121F]/95 px-6 py-7 lg:hidden">

            <div className="flex flex-col gap-6 text-[10px] uppercase tracking-[0.2em] text-[#B8AEBB]">

              <button onClick={() => scrollToSection("vision")}>
                Vision
              </button>

              <button onClick={() => scrollToSection("leverage")}>
                AI Leverage
              </button>

              <button onClick={() => scrollToSection("building")}>
                Building
              </button>

              <button onClick={() => scrollToSection("principles")}>
                Principles
              </button>

              <button onClick={() => scrollToSection("contact")}>
                Contact
              </button>

            </div>

          </div>
        )}

      </nav>

      {/* HERO */}
      <section
        id="home"
        className="relative z-10 mx-auto max-w-[1500px] px-6 py-20 lg:px-12 lg:py-28"
      >

        <div className="grid items-center gap-16 lg:grid-cols-[1fr_0.85fr]">

          {/* HERO TEXT */}
          <div>

            <p className="mb-8 text-[10px] uppercase tracking-[0.35em] text-[#D6A85F]">
              A personal vision in progress
            </p>

            <h1 className="max-w-4xl text-6xl font-semibold leading-[0.92] tracking-[-0.065em] sm:text-7xl lg:text-[100px]">

              I am building

              <span className="block text-[#F4D9B4]">
                a future
              </span>

              <span className="block italic text-[#D6A85F]">
                of my own.
              </span>

            </h1>

            <p className="mt-10 max-w-xl text-base leading-8 text-[#B8AEBB]">

              A long-term experiment in intelligence, discipline,
              entrepreneurship and the use of AI to create more freedom,
              possibility and impact.

            </p>

            <div className="mt-10 flex flex-wrap gap-4">

              <button
                onClick={() => scrollToSection("vision")}
                className="rounded-full bg-[#D6A85F] px-7 py-4 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#17121F] transition hover:bg-[#F4D9B4] hover:shadow-[0_0_35px_rgba(214,168,95,0.25)]"
              >
                Explore The Vision →
              </button>

              <button
                onClick={() => scrollToSection("principles")}
                className="rounded-full border border-[#D6A85F]/40 px-7 py-4 text-[10px] uppercase tracking-[0.18em] text-[#F4D9B4] transition hover:border-[#D6A85F] hover:bg-[#D6A85F]/10"
              >
                Read The Rules
              </button>

            </div>

            <div className="mt-16 flex items-center gap-8">

              <div>
                <p className="text-3xl font-semibold text-[#F4D9B4]">
                  2026
                </p>

                <p className="mt-2 text-[8px] uppercase tracking-[0.2em] text-[#B8AEBB]">
                  Starting point
                </p>
              </div>

              <div className="h-12 w-px bg-[#F4D9B4]/20" />

              <div>
                <p className="text-3xl font-semibold text-[#D6A85F]">
                  2031
                </p>

                <p className="mt-2 text-[8px] uppercase tracking-[0.2em] text-[#B8AEBB]">
                  The direction
                </p>
              </div>

            </div>

          </div>

          {/* HERO IMAGE */}
          <div className="relative mx-auto w-full max-w-[570px]">

            <div className="absolute -inset-8 rounded-full bg-[#A9784D]/15 blur-[100px]" />

            <div className="relative overflow-hidden rounded-[2rem] border border-[#D6A85F]/30 bg-[#261C2A] shadow-[0_25px_100px_rgba(0,0,0,0.4)]">

              <img
                src="1st.png"
                alt="Alishba - Future AI Entrepreneur"
                className="h-[650px] w-full object-cover object-top"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#17121F] via-transparent to-transparent" />

              <div className="absolute bottom-7 left-7">

                <p className="text-[9px] uppercase tracking-[0.3em] text-[#D6A85F]">
                  Building intentionally
                </p>

                <p className="mt-2 text-2xl font-semibold">
                  Alishba Azhar
                </p>

              </div>

              <div className="absolute right-5 top-5 rounded-full border border-[#F4D9B4]/20 bg-[#17121F]/60 px-4 py-2 backdrop-blur-md">

                <span className="mr-2 inline-block h-2 w-2 animate-pulse rounded-full bg-[#D6A85F]" />

                <span className="text-[8px] uppercase tracking-[0.2em] text-[#F4D9B4]">
                  In progress
                </span>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* MANIFESTO */}
      <section className="relative z-10 mx-auto max-w-[1500px] px-6 py-20 lg:px-12">

        <div className="border-y border-[#F4D9B4]/10 py-16">

          <p className="text-[10px] uppercase tracking-[0.35em] text-[#D6A85F]">
            The Manifesto
          </p>

          <h2 className="mt-8 max-w-5xl text-4xl font-semibold leading-tight tracking-[-0.04em] md:text-6xl">

            I don&apos;t want to simply

            <span className="text-[#B8AEBB]">
              {" "}consume the future.
            </span>

            <span className="block mt-2 text-[#D6A85F]">
              I want to understand it.
            </span>

            <span className="block text-[#F4D9B4]">
              Build it. Shape it.
            </span>

          </h2>

        </div>

      </section>

      {/* VISION */}
      <section
        id="vision"
        className="relative z-10 mx-auto max-w-[1500px] px-6 py-20 lg:px-12"
      >

        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">

          <div>

            <p className="text-[10px] uppercase tracking-[0.35em] text-[#D6A85F]">
              The Five-Year Vision
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-6xl">
              Becoming, year by year.
            </h2>

          </div>

          <p className="max-w-md text-sm leading-7 text-[#B8AEBB]">
            I am not chasing a title. I am building capabilities that
            compound over time.
          </p>

        </div>

        <div className="relative">

          <div className="absolute left-0 right-0 top-[55px] hidden h-px bg-[#D6A85F]/30 md:block" />

          <div className="grid gap-4 md:grid-cols-5">

            {visionYears.map((item, index) => (

              <button
                key={item.year}
                onClick={() => setActiveYear(index)}
                className={`group relative rounded-2xl p-5 text-left transition duration-500 ${
                  activeYear === index
                    ? "bg-[#D6A85F] text-[#17121F]"
                    : "border border-[#F4D9B4]/10 bg-[#211824] hover:border-[#D6A85F]/40"
                }`}
              >

                <div className="mb-12 flex items-center justify-between">

                  <span
                    className={`text-2xl font-semibold ${
                      activeYear === index
                        ? "text-[#17121F]"
                        : "text-[#D6A85F]"
                    }`}
                  >
                    {item.year}
                  </span>

                  <span
                    className={`h-4 w-4 rounded-full border-2 ${
                      activeYear === index
                        ? "border-[#17121F] bg-[#17121F]"
                        : "border-[#D6A85F]"
                    }`}
                  />

                </div>

                <p
                  className={`text-[9px] font-semibold tracking-[0.15em] ${
                    activeYear === index
                      ? "text-[#17121F]"
                      : "text-[#F4D9B4]"
                  }`}
                >
                  {item.label}
                </p>

                <h3
                  className={`mt-3 text-sm font-semibold ${
                    activeYear === index
                      ? "text-[#17121F]"
                      : "text-[#FFF8F0]"
                  }`}
                >
                  {item.title}
                </h3>

              </button>

            ))}

          </div>

        </div>

        <div className="mt-8 rounded-2xl border border-[#D6A85F]/30 bg-[#211824] p-8">

          <div className="grid gap-8 md:grid-cols-[0.7fr_1fr] md:items-center">

            <div>

              <p className="text-[9px] uppercase tracking-[0.3em] text-[#D6A85F]">
                Selected Chapter
              </p>

              <h3 className="mt-4 text-3xl font-semibold text-[#F4D9B4]">
                {selectedVision.year}
              </h3>

              <h4 className="mt-2 text-xl font-semibold">
                {selectedVision.title}
              </h4>

            </div>

            <p className="max-w-xl text-sm leading-8 text-[#B8AEBB]">
              {selectedVision.description}
            </p>

          </div>

        </div>

      </section>

      {/* AI LEVERAGE */}
      <section
        id="leverage"
        className="relative z-10 mx-auto max-w-[1500px] px-6 py-24 lg:px-12"
      >

        <div className="grid items-center gap-16 lg:grid-cols-[0.8fr_1.2fr]">

          <div>

            <p className="text-[10px] uppercase tracking-[0.35em] text-[#D6A85F]">
              The AI Advantage
            </p>

            <h2 className="mt-5 text-5xl font-semibold leading-[0.95] tracking-[-0.05em] md:text-7xl">

              Human

              <span className="block text-[#B8AEBB]">
                vision
              </span>

              <span className="my-3 block text-[#D6A85F]">
                +
              </span>

              AI

              <span className="block text-[#B8AEBB]">
                leverage
              </span>

              <span className="my-3 block text-[#D6A85F]">
                =
              </span>

              <span className="text-[#F4D9B4]">
                Possibility
              </span>

            </h2>

          </div>

          <div className="grid gap-4 sm:grid-cols-2">

            <div className="rounded-2xl border border-[#F4D9B4]/10 bg-[#211824] p-7 transition hover:border-[#D6A85F]/50">

              <p className="text-3xl text-[#D6A85F]">
                01
              </p>

              <h3 className="mt-10 text-sm font-semibold tracking-[0.12em]">
                THINK
              </h3>

              <p className="mt-4 text-sm leading-7 text-[#B8AEBB]">
                Use AI to research, analyse and understand complex problems.
              </p>

            </div>

            <div className="rounded-2xl border border-[#F4D9B4]/10 bg-[#211824] p-7 transition hover:border-[#D6A85F]/50">

              <p className="text-3xl text-[#D6A85F]">
                02
              </p>

              <h3 className="mt-10 text-sm font-semibold tracking-[0.12em]">
                BUILD
              </h3>

              <p className="mt-4 text-sm leading-7 text-[#B8AEBB]">
                Turn ideas into products, prototypes and intelligent systems.
              </p>

            </div>

            <div className="rounded-2xl border border-[#F4D9B4]/10 bg-[#211824] p-7 transition hover:border-[#D6A85F]/50">

              <p className="text-3xl text-[#D6A85F]">
                03
              </p>

              <h3 className="mt-10 text-sm font-semibold tracking-[0.12em]">
                AUTOMATE
              </h3>

              <p className="mt-4 text-sm leading-7 text-[#B8AEBB]">
                Create systems that reduce repetitive work and increase output.
              </p>

            </div>

            <div className="rounded-2xl border border-[#F4D9B4]/10 bg-[#211824] p-7 transition hover:border-[#D6A85F]/50">

              <p className="text-3xl text-[#D6A85F]">
                04
              </p>

              <h3 className="mt-10 text-sm font-semibold tracking-[0.12em]">
                MULTIPLY
              </h3>

              <p className="mt-4 text-sm leading-7 text-[#B8AEBB]">
                Use technology to multiply time, knowledge and execution.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* BUILDING */}
      <section
        id="building"
        className="relative z-10 mx-auto max-w-[1500px] px-6 py-20 lg:px-12"
      >

        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">

          <div>

            <p className="text-[10px] uppercase tracking-[0.35em] text-[#D6A85F]">
              What I Am Building
            </p>

            <h2 className="mt-5 text-4xl font-semibold leading-tight md:text-6xl">

              Not just a career.

              <span className="block text-[#B8AEBB]">
                A body of work.
              </span>

            </h2>

            <p className="mt-8 max-w-md text-sm leading-8 text-[#B8AEBB]">
              The goal is to build things that make me smarter, more capable
              and more independent.
            </p>

          </div>

          <div className="grid gap-4 sm:grid-cols-2">

            {buildCards.map((card) => (

              <div
                key={card.number}
                className="group rounded-2xl border border-[#F4D9B4]/10 bg-[#211824] p-7 transition duration-300 hover:-translate-y-1 hover:border-[#D6A85F]/50"
              >

                <p className="text-sm text-[#D6A85F]">
                  {card.number}
                </p>

                <h3 className="mt-12 text-sm font-semibold tracking-[0.15em]">
                  {card.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-[#B8AEBB]">
                  {card.description}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* PRINCIPLES */}
      <section
        id="principles"
        className="relative z-10 mx-auto max-w-[1500px] px-6 py-24 lg:px-12"
      >

        <div className="border-t border-[#F4D9B4]/10 pt-16">

          <p className="text-[10px] uppercase tracking-[0.35em] text-[#D6A85F]">
            The Rules
          </p>

          <div className="mt-8 grid gap-12 lg:grid-cols-[0.6fr_1.4fr]">

            <h2 className="text-5xl font-semibold leading-[0.95] tracking-[-0.05em] md:text-7xl">

              The things

              <span className="block text-[#B8AEBB]">
                I refuse
              </span>

              <span className="block italic text-[#D6A85F]">
                to compromise.
              </span>

            </h2>

            <div className="grid gap-3 sm:grid-cols-2">

              {principles.map((principle) => (

                <div
                  key={principle.number}
                  className="group border-b border-[#F4D9B4]/10 py-6 transition hover:border-[#D6A85F]/60"
                >

                  <div className="flex items-start justify-between">

                    <span className="text-sm text-[#D6A85F]">
                      {principle.number}
                    </span>

                    <span className="text-[#B8AEBB] transition group-hover:translate-x-1 group-hover:text-[#D6A85F]">
                      ↗
                    </span>

                  </div>

                  <h3 className="mt-8 text-sm font-semibold tracking-[0.12em]">
                    {principle.title}
                  </h3>

                  <p className="mt-3 text-sm text-[#B8AEBB]">
                    {principle.description}
                  </p>

                </div>

              ))}

            </div>

          </div>

        </div>

      </section>

      {/* FINAL SECTION */}
      <section className="relative z-10 mx-auto max-w-[1500px] px-6 py-24 lg:px-12">

        <div className="relative overflow-hidden rounded-[2rem] border border-[#D6A85F]/30 bg-[#211824] p-8 md:p-16">

          <div className="absolute right-[-10%] top-[-50%] h-[600px] w-[600px] rounded-full bg-[#A9784D]/10 blur-[120px]" />

          <div className="relative grid items-center gap-14 lg:grid-cols-[1fr_1.2fr]">

            <div className="relative overflow-hidden rounded-2xl">

              <img
                src="2nd.png"
                alt="Alishba"
                className="h-[430px] w-full object-cover object-top"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#211824] via-transparent to-transparent" />

            </div>

            <div>

              <p className="text-[10px] uppercase tracking-[0.35em] text-[#D6A85F]">
                The Person I Am Becoming
              </p>

              <h2 className="mt-6 text-4xl font-semibold leading-tight md:text-6xl">

                Independent enough to create my own path.

              </h2>

              <p className="mt-8 text-base leading-8 text-[#B8AEBB]">

                Intelligent enough to understand the systems shaping the
                future. Disciplined enough to keep building when nobody is
                watching.

              </p>

              <p className="mt-6 text-base leading-8 text-[#B8AEBB]">

                Brave enough to start before I feel ready. Ambitious enough to
                use AI not just to work faster, but to build a life with more
                freedom, impact and possibility.

              </p>

              <p className="mt-8 font-serif text-3xl italic text-[#D6A85F]">
                Alishba Azhar
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="relative z-10 mx-auto max-w-[1500px] px-6 py-24 lg:px-12"
      >

        <div className="text-center">

          <p className="text-[10px] uppercase tracking-[0.35em] text-[#D6A85F]">
            The next chapter is being built
          </p>

          <h2 className="mx-auto mt-6 max-w-4xl text-5xl font-semibold leading-[0.95] tracking-[-0.06em] md:text-8xl">

            Build something

            <span className="block italic text-[#D6A85F]">
              meaningful.
            </span>

          </h2>

          <p className="mx-auto mt-8 max-w-lg text-sm leading-8 text-[#B8AEBB]">
            The future belongs to the people willing to learn, build and keep
            going.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">

            <a
              href="#"
              className="rounded-full border border-[#D6A85F]/40 px-7 py-4 text-[10px] uppercase tracking-[0.18em] text-[#F4D9B4] transition hover:bg-[#D6A85F]/10"
            >
              LinkedIn ↗
            </a>

            <a
              href="#"
              className="rounded-full border border-[#D6A85F]/40 px-7 py-4 text-[10px] uppercase tracking-[0.18em] text-[#F4D9B4] transition hover:bg-[#D6A85F]/10"
            >
              GitHub ↗
            </a>

            <a
              href="mailto:hello@example.com"
              className="rounded-full bg-[#D6A85F] px-7 py-4 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#17121F] transition hover:bg-[#F4D9B4]"
            >
              Say Hello ↗
            </a>

          </div>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="relative z-10 border-t border-[#F4D9B4]/10 px-6 py-8 lg:px-12">

        <div className="mx-auto flex max-w-[1500px] flex-col justify-between gap-4 text-[9px] uppercase tracking-[0.2em] text-[#B8AEBB] sm:flex-row">

          <p>
            © 2026 ALISHBA
          </p>

          <p>
            BUILDING INTENTIONALLY.
          </p>

          <p>
            THE FUTURE IS IN PROGRESS.
          </p>

        </div>

      </footer>

    </main>
  );
}