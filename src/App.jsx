import { useEffect, useMemo, useRef, useState } from "react";
import {
  profile,
  stats,
  skillGroups,
  projects,
  synapseEvents,
  irisEvents,
  galleryPhotos,
  portrait,
  education,
  experience,
} from "./data.js";

/* ---------- helpers ---------- */

function useInView(options = { threshold: 0.15 }) {
  const ref = useRef(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        setSeen(true);
        io.disconnect();
      }
    }, options);
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return [ref, seen];
}

function Reveal({ children, delay = 0, className = "" }) {
  const [ref, seen] = useInView();
  return (
    <div
      ref={ref}
      className={`reveal ${seen ? "in" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

function CountUp({ value, decimals = 0, suffix = "" }) {
  const [ref, seen] = useInView();
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!seen) return;
    const start = performance.now();
    const dur = 1200;
    let raf;
    const tick = (t) => {
      const p = Math.min((t - start) / dur, 1);
      setN(value * (1 - Math.pow(1 - p, 3)));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [seen, value]);
  return (
    <span ref={ref}>
      {n.toFixed(decimals)}
      {suffix}
    </span>
  );
}

function PhotoSlot({ src, label = "", className = "" }) {
  if (!src) return null;
  return (
    <div className={`photo has ${className}`}>
      <img src={src} alt={label} />
    </div>
  );
}

/* ---------- nav ---------- */

const NAV = [
  ["about", "About"],
  ["works", "Works"],
  ["synapse", "Synapse"],
  ["iris", "IRIS"],
  ["gallery", "Moments"],
  ["journey", "Journey"],
  ["contact", "Contact"],
];

function Nav() {
  const [active, setActive] = useState("");
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      setProgress((h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100);
      let cur = "";
      for (const [id] of NAV) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top < window.innerHeight * 0.4) cur = id;
      }
      setActive(cur);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header className="nav">
      <a href="#top" className="logo">
        K<span>A</span>
      </a>
      <nav>
        {NAV.map(([id, label]) => (
          <a key={id} href={`#${id}`} className={active === id ? "on" : ""}>
            {label}
          </a>
        ))}
      </nav>
      <div className="bar" style={{ width: `${progress}%` }} />
    </header>
  );
}

/* ---------- hero ---------- */

function Hero() {
  const ref = useRef(null);
  const onMove = (e) => {
    const r = ref.current.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    ref.current.style.setProperty("--px", x.toFixed(3));
    ref.current.style.setProperty("--py", y.toFixed(3));
  };
  return (
    <section id="top" className="hero" ref={ref} onMouseMove={onMove}>
      <h1 className="giant" aria-label={`${profile.first} ${profile.last}`}>
        <span className="giant-a">{profile.first}</span>
        <span className="giant-b">{profile.last}</span>
      </h1>
      <p className="portfolio-tag">PORTFOLIO</p>
      <div className="hero-photo">
        <PhotoSlot src={portrait} label="Your portrait" className="cutout" />
      </div>
      <div className="hero-role">
        {profile.role.map((r, i) => (
          <span key={r} className={i === 2 ? "bold" : ""}>
            {r}
          </span>
        ))}
        <p>{profile.tagline}</p>
      </div>
      <a className="scroll-hint" href="#about">
        scroll ↓
      </a>
    </section>
  );
}

/* ---------- about ---------- */

function Mosaic() {
  const COLS = 7;
  const ROWS = 8;
  const initial = useMemo(
    () =>
      Array.from({ length: COLS * ROWS }, (_, i) => {
        const x = i % COLS;
        const y = Math.floor(i / COLS);
        const edge = x < 2 || y < 1;
        return Math.random() < (edge ? 0.55 : 0.22);
      }),
    []
  );
  const [cells, setCells] = useState(initial);
  const toggle = (i) => setCells((c) => c.map((v, k) => (k === i ? !v : v)));
  return (
    <div className="mosaic-wrap">
      <PhotoSlot src={portrait} label="About photo" className="about-photo" />
      <div className="mosaic" style={{ gridTemplateColumns: `repeat(${COLS}, 1fr)` }}>
        {cells.map((on, i) => (
          <button
            key={i}
            aria-label="toggle tile"
            className={on ? "tile on" : "tile"}
            onMouseEnter={() => toggle(i)}
            onClick={() => toggle(i)}
          />
        ))}
      </div>
    </div>
  );
}

function About() {
  const [group, setGroup] = useState(skillGroups[0].name);
  const current = skillGroups.find((g) => g.name === group);
  return (
    <section id="about" className="dark">
      <div className="wrap about-grid">
        <div>
          <Reveal>
            <h2 className="h2">ABOUT ME</h2>
            <p className="lead">{profile.about}</p>
          </Reveal>
          <Reveal delay={100}>
            <div className="stats">
              {stats.map((s) => (
                <div key={s.label}>
                  <strong>
                    <CountUp {...s} />
                  </strong>
                  <span>{s.label}</span>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={150}>
            <h3 className="h3">Skills</h3>
            <div className="chips tabs">
              {skillGroups.map((g) => (
                <button
                  key={g.name}
                  className={g.name === group ? "chip active" : "chip"}
                  onClick={() => setGroup(g.name)}
                >
                  {g.name}
                </button>
              ))}
            </div>
            <div className="pillbar" key={group}>
              {current.items.map((it, i) => (
                <span key={it} style={{ animationDelay: `${i * 40}ms` }}>
                  {it}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
        <Reveal delay={100}>
          <Mosaic />
          <p className="hint">hover or tap the tiles</p>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- works ---------- */

function Works() {
  const cats = useMemo(() => ["All", ...Array.from(new Set(projects.map((p) => p.cat)))], []);
  const [cat, setCat] = useState("All");
  const [open, setOpen] = useState(null);
  const list = projects.filter((p) => cat === "All" || p.cat === cat);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <section id="works" className="light">
      <div className="wrap">
        <Reveal>
          <h2 className="h2 maroon">MY WORKS</h2>
        </Reveal>
        <div className="chips filters">
          {cats.map((c) => (
            <button key={c} className={c === cat ? "chip active alt" : "chip alt"} onClick={() => setCat(c)}>
              {c}
            </button>
          ))}
        </div>
        <div className="works-grid">
          {list.map((p, i) => (
            <button
              key={p.id}
              className={`work w${i % 6}`}
              style={{ animationDelay: `${i * 40}ms` }}
              onClick={() => setOpen(p)}
            >
              <span className="work-cat">{p.cat}</span>
              <span className="work-num">{String(i + 1).padStart(2, "0")}</span>
              <h3>{p.title}</h3>
              <p>{p.summary}</p>
              <span className="work-tools">{p.tools.join(" · ")}</span>
              <span className="work-more">View ↗</span>
            </button>
          ))}
        </div>
      </div>

      {open && (
        <div className="modal" onClick={() => setOpen(null)}>
          <div className="modal-card" onClick={(e) => e.stopPropagation()}>
            <button className="x" onClick={() => setOpen(null)} aria-label="Close">
              ×
            </button>
            <span className="work-cat">{open.cat}</span>
            <h3>{open.title}</h3>
            <ul>
              {open.points.map((pt) => (
                <li key={pt}>{pt}</li>
              ))}
            </ul>
            <div className="chips">
              {open.tools.map((t) => (
                <span key={t} className="chip static">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

/* ---------- events (Synapse + IRIS) ---------- */

function Lightbox({ list, caps = [], index, onClose, onNav }) {
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNav(1);
      if (e.key === "ArrowLeft") onNav(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose, onNav]);
  return (
    <div className="modal" onClick={onClose}>
      <button className="lb-nav prev" onClick={(e) => { e.stopPropagation(); onNav(-1); }} aria-label="Previous">‹</button>
      <img className="lightbox" src={list[index]} alt={caps[index] || ""} onClick={(e) => e.stopPropagation()} />
      <button className="lb-nav next" onClick={(e) => { e.stopPropagation(); onNav(1); }} aria-label="Next">›</button>
      <span className="lb-count">
        {caps[index] ? `${caps[index]} · ` : ""}
        {index + 1} / {list.length}
      </span>
    </div>
  );
}

function EventsSection({ id, tone, eyebrow, title, intro, events, stats: sectionStats }) {
  const [idx, setIdx] = useState(0);
  const ev = events[idx];
  const facts = [
    ["Participants", ev.participants],
    ["Level", ev.level],
    ["My role", ev.role],
  ].filter(([, v]) => v);

  return (
    <section id={id} className={`${tone === "light" ? "light" : "dark"} tone-${tone}`}>
      <div className="wrap">
        <Reveal>
          <p className="eyebrow">{eyebrow}</p>
          <h2 className={`h2 ${tone === "light" ? "maroon" : ""}`}>{title}</h2>
          <p className="lead narrow">{intro}</p>
          {sectionStats && (
            <div className="mini-stats">
              {sectionStats.map(([v, l]) => (
                <div key={l}>
                  <strong>{v}</strong>
                  <span>{l}</span>
                </div>
              ))}
            </div>
          )}
        </Reveal>

        <div className="events">
          <ul className="event-list">
            {events.map((e, i) => (
              <li key={e.id}>
                <button className={i === idx ? "ev on" : "ev"} onClick={() => setIdx(i)}>
                  <small>{e.type}</small>
                  <strong>{e.short}</strong>
                </button>
              </li>
            ))}
          </ul>

          <div className="event-detail" key={ev.id}>
            <h3>{ev.title}</h3>
            <div className="meta">
              <span>{ev.type}</span>
            </div>
            <p>{ev.description}</p>

            {facts.length > 0 && (
              <dl className="facts">
                {facts.map(([k, v]) => (
                  <div key={k}>
                    <dt>{k}</dt>
                    <dd>{v}</dd>
                  </div>
                ))}
              </dl>
            )}

            {ev.highlights?.length > 0 && (
              <ul className="highlights">
                {ev.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function Synapse() {
  return (
    <EventsSection
      id="synapse"
      tone="dark"
      eyebrow="Vice President · 2024 – Present"
      title="SYNAPSE AI CLUB"
      intro="Workshops, competitions and conclaves I've helped run for MIT-WPU's official AI club. Pick an event to see the details and photos."
      events={synapseEvents}
      stats={[
        ["9", "events"],
        ["800+", "participants"],
        ["2", "workshops run end-to-end"],
      ]}
    />
  );
}

function Iris() {
  return (
    <EventsSection
      id="iris"
      tone="light"
      eyebrow="Non-Tech Head · 2024 – Present"
      title="IRIS EVENTS"
      intro="Logistics, outreach and cross-team communication for IRIS, MIT-WPU. Pick an event to see the details and photos."
      events={irisEvents}
    />
  );
}

/* ---------- one animated gallery for every event ---------- */

function MarqueeRow({ items, reverse, speed, onOpen }) {
  const loop = [...items, ...items];
  return (
    <div className="marquee">
      <div
        className={`track ${reverse ? "rev" : ""}`}
        style={{ animationDuration: `${speed}s` }}
      >
        {loop.map((it, i) => (
          <button
            key={i}
            className={`shot t${i % 4}`}
            onClick={() => onOpen(it.src)}
            aria-hidden={i >= items.length}
            tabIndex={i >= items.length ? -1 : 0}
          >
            <img src={it.src} alt={it.caption} loading="lazy" draggable="false" />
            <span className="cap">
              <small>{it.club === "Both" ? "Synapse × IRIS" : it.club}</small>
              {it.caption}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}

function Gallery() {
  const [filter, setFilter] = useState("All");
  const [lb, setLb] = useState(null);
  const shown = galleryPhotos.filter(
    (g) => filter === "All" || g.club === filter || g.club === "Both"
  );
  // two rows: alternate photos, second row starts mid-way so rows never match
  const rowA = shown.filter((_, i) => i % 2 === 0);
  const rowB = shown.filter((_, i) => i % 2 === 1);
  const a = rowA.length ? rowA : shown;
  const b = rowB.length ? rowB : [...shown].reverse();
  const list = shown.map((g) => g.src);
  const caps = shown.map((g) => g.caption);
  const open = (src) => setLb(Math.max(0, list.indexOf(src)));
  const nav = (d) => setLb((i) => (i + d + list.length) % list.length);

  return (
    <section id="gallery" className="dark gallery-sec">
      <div className="wrap">
        <Reveal>
          <p className="eyebrow">Synapse · IRIS</p>
          <h2 className="h2">MOMENTS</h2>
          <p className="lead narrow">
            Behind the scenes and on stage across every event. Hover to pause, click to open.
          </p>
          <div className="chips filters">
            {["All", "Synapse", "IRIS"].map((c) => (
              <button
                key={c}
                className={c === filter ? "chip active" : "chip"}
                onClick={() => setFilter(c)}
              >
                {c}
              </button>
            ))}
          </div>
        </Reveal>
      </div>
      <div className="rows" key={filter}>
        <MarqueeRow items={a} speed={Math.max(30, a.length * 9)} onOpen={open} />
        <MarqueeRow items={b} reverse speed={Math.max(36, b.length * 11)} onOpen={open} />
      </div>
      {lb !== null && <Lightbox list={list} caps={caps} index={lb} onClose={() => setLb(null)} onNav={nav} />}
    </section>
  );
}

/* ---------- journey ---------- */

function Journey() {
  return (
    <section id="journey" className="light alt">
      <div className="wrap two">
        <div>
          <Reveal>
            <h2 className="h2 maroon">EXPERIENCE</h2>
          </Reveal>
          {experience.map((x, i) => (
            <Reveal key={x.role} delay={i * 80}>
              <details className="tl" open={i === 0}>
                <summary>
                  <strong>{x.role}</strong>
                  <span>
                    {x.org} · {x.years}
                  </span>
                </summary>
                <ul>
                  {x.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </details>
            </Reveal>
          ))}
        </div>
        <div>
          <Reveal>
            <h2 className="h2 maroon">EDUCATION</h2>
          </Reveal>
          {education.map((x, i) => (
            <Reveal key={x.school} delay={i * 80}>
              <div className="edu">
                <span className="years">{x.years}</span>
                <strong>{x.school}</strong>
                <p>{x.degree}</p>
                <em>{x.score}</em>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- contact ---------- */

function LinkRow({ icon, text, href }) {
  return (
    <div className="copyrow">
      <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
        <span className="ico">{icon}</span>
        {text}
      </a>
      <span className="arrow" aria-hidden="true">↗</span>
    </div>
  );
}

function Contact() {
  return (
    <section id="contact" className="dark">
      <div className="wrap contact">
        <Reveal>
          <h2 className="h2">CONTACTS</h2>
          <p className="lead narrow">Open to internships, collaborations and interesting projects. Say hello.</p>
        </Reveal>
        <Reveal delay={100}>
          <div className="rows">
            <LinkRow icon="✉" text={profile.email} href={`mailto:${profile.email}`} />
            <LinkRow icon="in" text="ksheeraja-alegaonkar" href={profile.linkedin} />
            <LinkRow icon="⌥" text="ksheeraja-23" href={profile.github} />
          </div>
        </Reveal>
      </div>
      <footer>© {new Date().getFullYear()} Ksheeraja Alegaonkar · {profile.location}</footer>
    </section>
  );
}

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Works />
        <Synapse />
        <Iris />
        <Gallery />
        <Journey />
        <Contact />
      </main>
    </>
  );
}
