export default function Home() {
  const highlights = [
    { label: "LaTeX pipeline precision", value: "89%" },
    { label: "Emotion model accuracy", value: "79%" },
    { label: "AgroTrade load time", value: "-35%" },
  ];

  const skills = [
    "Python, C/C++, TypeScript",
    "PyTorch, TensorFlow, Keras",
    "Computer Vision & NLP",
    "Next.js, React, Tailwind CSS",
    "Node.js, Express, REST APIs",
    "MongoDB, PostgreSQL, SQL",
    "OpenCV, YOLOv5, Transformers",
    "Docker (basic), Git, Linux",
  ];

  const projects = [
    {
      name: "Math Formula Detection & LaTeX Recognition",
      type: "Computer vision pipeline",
      description:
        "Built a two-stage pipeline combining YOLOv5 detection with a Transformer sequence model for LaTeX generation, achieving 89% precision and 82% recall on ICDAR datasets.",
      tags: ["Python", "PyTorch", "YOLOv5", "Transformers"],
    },
    {
      name: "Emotion Detector – Speech Emotion Recognition",
      type: "Deep learning application",
      description:
        "Trained a multi-class speech emotion model on 1,400+ RAVDESS samples, reaching 79%+ accuracy with MFCC features and a 3-layer neural network.",
      tags: ["TensorFlow", "Flask", "Librosa", "Streamlit"],
    },
    {
      name: "AgroTrade – Agri Trading Platform",
      type: "Full-stack platform",
      description:
        "Built a Next.js SSR platform with REST APIs and real-time messaging, cutting load time by 35% and improving retention by 20%.",
      tags: ["Next.js", "Socket.io", "Clerk", "REST APIs"],
    },
  ];

  const experience = [
    {
      role: "Software Development Intern (Front-End)",
      company: "Edunet Foundation – IBM SkillsBuild",
      period: "Aug 2025 — Oct 2025",
      summary:
        "Built a review and rating platform with React, Tailwind, Node.js, and PostgreSQL, improving discovery by 47% and achieving a 90+ mobile performance score.",
    },
  ];

  const achievements = [
    "Smart India Hackathon 2024: Led Team Infinity Coders in national-level participation.",
    "Coordinated a 24-hour hackathon during Tech Fest Avenir’24 with 100+ participants (PHOENIX NSEC).",
  ];

  const certifications = [
    "Web Development Fundamentals Course by IBM (Sep 2025)",
    "Data Analytics Job Simulation by Deloitte Australia via Forage (Jul 2025)",
  ];

  const education = [
    {
      school: "Netaji Subhash Engineering College, MAKAUT",
      detail:
        "B.Tech in Artificial Intelligence and Machine Learning — CGPA 7.64/10 (up to 7th sem)",
      period: "Nov 2022 — Present",
      location: "West Bengal, India",
    },
    {
      school: "Sindrani Sabitri High School (H.S)",
      detail: "Higher Secondary (WBCHSE) — 83%",
      period: "Apr 2020 — Mar 2021",
      location: "West Bengal, India",
    },
    {
      school: "Sindrani Sabitri High School (H.S)",
      detail: "Secondary (WBBSE) — 87.5%",
      period: "Apr 2018 — Mar 2019",
      location: "West Bengal, India",
    },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-zinc-950 text-zinc-50">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-indigo-500/30 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-cyan-500/20 blur-[120px]" />
      </div>

      <header className="relative z-10">
        <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-lg font-semibold">
              DG
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-zinc-400">
                Portfolio
              </p>
              <p className="text-lg font-semibold">Debabrata Ghosh</p>
            </div>
          </div>
          <div className="hidden items-center gap-6 text-sm text-zinc-300 md:flex">
            <a className="transition hover:text-white" href="#about">
              About
            </a>
            <a className="transition hover:text-white" href="#work">
              Work
            </a>
            <a className="transition hover:text-white" href="#experience">
              Experience
            </a>
            <a className="transition hover:text-white" href="#contact">
              Contact
            </a>
          </div>
            <a
              className="rounded-full border border-white/20 px-5 py-2 text-sm font-medium transition hover:border-white/60 hover:bg-white/10"
              href="mailto:debabrata1042003@gmail.com"
            >
            Let&apos;s talk
          </a>
        </nav>
      </header>

      <main className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-20 px-6 pb-24 pt-16">
        <section className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
              AI/ML Engineer + Full-Stack Developer
            </p>
            <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">
              Building intelligent products with practical, scalable engineering.
            </h1>
            <p className="text-lg text-zinc-300">
              I design and ship ML-powered experiences across computer vision,
              speech emotion recognition, and full-stack platforms. My focus is
              on measurable impact, reliable systems, and delightful user flows.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-zinc-900 transition hover:bg-zinc-200"
                href="#work"
              >
                View projects
              </a>
              <a
                className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold transition hover:border-white/60 hover:bg-white/10"
                href="mailto:debabrata1042003@gmail.com"
              >
                Contact me
              </a>
            </div>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-xl shadow-cyan-500/10">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-zinc-400">Current focus</p>
                <p className="text-xl font-semibold">AI/ML + Full-stack systems</p>
              </div>
              <span className="rounded-full bg-emerald-400/20 px-3 py-1 text-xs font-semibold text-emerald-200">
                Open to opportunities
              </span>
            </div>
            <div className="mt-8 grid gap-6">
              {highlights.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center justify-between rounded-2xl bg-zinc-950/70 px-5 py-4"
                >
                  <p className="text-sm text-zinc-400">{item.label}</p>
                  <p className="text-2xl font-semibold text-white">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
              About
            </p>
            <h2 className="text-3xl font-semibold">Engineering with intent.</h2>
            <p className="text-zinc-300">
              I build ML-driven experiences and full-stack products that solve
              real-world problems. From computer vision pipelines to responsive
              web platforms, I combine experimentation with clean engineering to
              deliver measurable results.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {skills.map((skill) => (
              <div
                key={skill}
                className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm font-medium"
              >
                {skill}
              </div>
            ))}
          </div>
        </section>

        <section id="work" className="space-y-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
                Selected work
              </p>
              <h2 className="text-3xl font-semibold">Projects & impact.</h2>
            </div>
            <a
              className="rounded-full border border-white/20 px-4 py-2 text-sm font-semibold transition hover:border-white/60 hover:bg-white/10"
              href="mailto:debabrata1042003@gmail.com"
            >
              Request demos
            </a>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.name}
                className="flex h-full flex-col justify-between rounded-3xl border border-white/10 bg-white/5 p-6"
              >
                <div>
                  <p className="text-sm text-cyan-200">{project.type}</p>
                  <h3 className="mt-3 text-xl font-semibold">{project.name}</h3>
                  <p className="mt-4 text-sm text-zinc-300">
                    {project.description}
                  </p>
                </div>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/15 px-3 py-1 text-xs text-zinc-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
              Experience
            </p>
            <h2 className="mt-2 text-3xl font-semibold">
              Shipping products with impact.
            </h2>
            <p className="mt-4 text-zinc-300">
              I&apos;ve collaborated with cross-functional teams to build responsive
              web applications, integrate APIs, and deliver measurable
              performance improvements.
            </p>
          </div>
          <div className="space-y-6">
            {experience.map((item) => (
              <div
                key={item.company}
                className="rounded-3xl border border-white/10 bg-white/5 p-6"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="text-lg font-semibold">{item.role}</h3>
                  <span className="text-sm text-zinc-400">{item.period}</span>
                </div>
                <p className="mt-1 text-sm text-cyan-200">{item.company}</p>
                <p className="mt-4 text-sm text-zinc-300">{item.summary}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
                Achievements & certifications
              </p>
              <h2 className="text-3xl font-semibold">Highlights & credentials.</h2>
            </div>
            <div className="rounded-full border border-white/15 px-4 py-2 text-sm text-zinc-300">
              2024–2025 highlights
            </div>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-lg font-semibold">Achievements</h3>
              <ul className="mt-4 space-y-3 text-sm text-zinc-300">
                {achievements.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-cyan-300" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-lg font-semibold">Certifications</h3>
              <ul className="mt-4 space-y-3 text-sm text-zinc-300">
                {certifications.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-cyan-300" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section id="education" className="space-y-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
              Education
            </p>
            <h2 className="text-3xl font-semibold">Academic foundation.</h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {education.map((item) => (
              <article
                key={`${item.school}-${item.period}`}
                className="rounded-3xl border border-white/10 bg-white/5 p-6"
              >
                <h3 className="text-lg font-semibold">{item.school}</h3>
                <p className="mt-2 text-sm text-zinc-300">{item.detail}</p>
                <p className="mt-4 text-xs uppercase tracking-[0.25em] text-zinc-400">
                  {item.location}
                </p>
                <p className="mt-2 text-sm text-cyan-200">{item.period}</p>
              </article>
            ))}
          </div>
        </section>

        <section
          id="contact"
          className="rounded-3xl border border-white/10 bg-white/5 p-10"
        >
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
                Contact
              </p>
              <h2 className="mt-3 text-3xl font-semibold">
                Let&apos;s build something impactful.
              </h2>
              <p className="mt-4 text-zinc-300">
                Reach out with collaboration ideas, internship opportunities, or
                open-source projects. I&apos;ll respond within 24 hours.
              </p>
            </div>
            <div className="space-y-4">
              <div className="rounded-2xl border border-white/10 bg-zinc-950/60 p-5">
                <p className="text-xs uppercase tracking-[0.25em] text-zinc-400">
                  Email
                </p>
                <p className="mt-2 text-lg font-semibold">
                  debabrata1042003@gmail.com
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-zinc-950/60 p-5">
                <p className="text-xs uppercase tracking-[0.25em] text-zinc-400">
                  Phone
                </p>
                <p className="mt-2 text-lg font-semibold">+91 82505 69747</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-zinc-950/60 p-5">
                <p className="text-xs uppercase tracking-[0.25em] text-zinc-400">
                  Location
                </p>
                <p className="mt-2 text-lg font-semibold">Bongaon, India</p>
              </div>
              <a
                className="flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-zinc-900 transition hover:bg-zinc-200"
                href="mailto:debabrata1042003@gmail.com"
              >
                Email Debabrata
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="relative z-10 border-t border-white/10">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-8 text-sm text-zinc-400 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Debabrata Ghosh. All rights reserved.</p>
          <div className="flex flex-wrap gap-4 text-zinc-300">
            <a className="transition hover:text-white" href="#">
              LinkedIn
            </a>
            <a className="transition hover:text-white" href="#">
              GitHub
            </a>
            <a className="transition hover:text-white" href="mailto:debabrata1042003@gmail.com">
              Email
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
