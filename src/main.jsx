import React from 'react';
import { createRoot } from 'react-dom/client';
import SplitText from './components/SplitText';
import './styles.css';

const navItems = [
  { label: 'Profile', href: '#about' },
  { label: 'Case Studies', href: '#work' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

const highlights = [
  'Redesigned healthcare management pages to improve visual hierarchy, spacing, and usability.',
  'Designed and developed mobile app prototype workflows using Figma and React Native.',
  'Improved form layouts, button hierarchy, responsive behavior, and visual consistency across web application pages.',
];

const cases = [
  {
    type: 'Healthcare UI Redesign',
    title: 'Gancao Healthcare UI Redesign',
    meta: 'Angular / Ionic / SCSS / TypeScript / Figma',
    desc: 'Gancao is a healthcare management platform. Jiali redesigned patient-related and visit-related pages to make dense medical information cleaner, easier to scan, and more visually consistent while preserving the original Angular/Ionic functionality.',
    problem: 'The original interface had crowded layouts, inconsistent spacing, and weak visual separation between form sections. Complex pages with many inputs were difficult to scan quickly.',
    goal: 'Create a cleaner, more readable interface without changing existing product functionality.',
    decisions: [
      'Kept the existing green left-border input style for product consistency.',
      'Added clearer section separation with cards and headers.',
      'Improved spacing between form groups and simplified dropdown/action layouts.',
      'Made primary actions such as Save and Update more noticeable.',
      'Adjusted responsive behavior for smaller screens.',
    ],
    result: 'The redesigned pages became cleaner, easier to scan, and more consistent while preserving the existing healthcare workflow.',
    visuals: [
      {
        label: 'Before',
        src: '/gancao-before.png',
        alt: 'Original insurance information interface before redesign',
      },
      {
        label: 'After',
        src: '/gancao-after.png',
        alt: 'Redesigned patient information interface after redesign',
      },
    ],
  },
  {
    type: 'Clinic Management',
    title: 'Clinic Management Page Redesign',
    meta: 'UI Redesign / Visual Design / Front-End Implementation',
    desc: 'This project redesigned the Clinic Management page for a healthcare management platform, improving clinic cards, form hierarchy, doctor cards, action buttons, and the overall management flow.',
    problem: 'The original page felt outdated and visually heavy. Clinic cards, action buttons, and form sections lacked alignment and consistency, with large empty areas across the layout.',
    goal: 'Make clinic information easier to scan and help users manage clinics, details, and doctor information more efficiently.',
    decisions: [
      'Redesigned clinic cards with softer borders, rounded corners, and cleaner spacing.',
      'Used a clear green active state for the selected clinic card.',
      'Moved add actions into a floating circular button.',
      'Separated Clinic Information, Address Information, and Doctor List with stronger hierarchy.',
      'Redesigned doctor cards so name, role, phone, and email are easier to read.',
    ],
    result: 'The updated layout feels more modern, reduces visual clutter, and improves readability while keeping the original page functionality.',
    visuals: [
      {
        label: 'Before',
        src: '/clinic-before.png',
        alt: 'Original clinic management page before redesign',
      },
      {
        label: 'After',
        src: '/clinic-after.png',
        alt: 'Redesigned clinic management page after redesign',
      },
    ],
  },
];

const skillGroups = [
  {
    title: 'Design Thinking',
    items: ['Problem identification', 'User flow improvement', 'Before-and-after comparison', 'Design decision explanation'],
  },
  {
    title: 'UI/UX Fundamentals',
    items: ['Form usability', 'Button hierarchy', 'Navigation clarity', 'Responsive layout', 'Error message placement'],
  },
  {
    title: 'Visual Design',
    items: ['Typography hierarchy', 'Spacing and alignment', 'Card-based layout', 'Color consistency', 'Component styling'],
  },
];

const toolGroups = [
  { label: 'Design Tools', value: 'Figma, Photoshop' },
  { label: 'Development Tools', value: 'Angular, Ionic, React Native, TypeScript, SCSS, HTML, CSS' },
];

function App() {
  return (
    <main>
      <header className="nav-shell">
        <a className="brand" href="#hero" aria-label="Rex's space home">
          <span>Rex's</span>
          <span>space</span>
        </a>
        <nav aria-label="Main navigation">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <section className="hero" id="hero">
        <video
          className="hero-video"
          src="/hero-film.webm"
          poster="/rexd.png"
          autoPlay
          muted
          loop
          playsInline
          aria-hidden="true"
        />
        <div className="motion-field" aria-hidden="true">
          <span className="beam beam-one" />
          <span className="beam beam-two" />
          <span className="beam beam-three" />
          <span className="scanline" />
        </div>
        <div className="hero-inner">
          <div className="hero-copy">
            <p className="eyebrow">UI/UX Designer - Front-End Developer</p>
            <SplitText
              tag="h1"
              text="Rex's space"
              className="hero-title"
              delay={70}
              duration={0.85}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 52, rotateX: -40 }}
              to={{ opacity: 1, y: 0, rotateX: 0 }}
              threshold={0.05}
              rootMargin="0px"
              textAlign="left"
            />
            <p className="hero-text">
              A warm and polished portfolio space for Jiali Diao. It connects a computer science background with UI redesign, visual hierarchy, form usability, and front-end implementation.
            </p>
            <div className="hero-actions">
              <a href="#work">View Case Studies</a>
              <a href="mailto:diaojiali0118@gmail.com">Email Jiali</a>
            </div>
          </div>
          <div className="avatar-stage" aria-label="Rex character visual">
            <div className="avatar-glow" />
            <div className="avatar-card avatar-card-character">
              <span>Character</span>
              <strong>Rex</strong>
              <small>Warm interface maker</small>
            </div>
            <div className="avatar-card avatar-card-tool">
              <span>Tool</span>
              <strong>Figma</strong>
              <small>Prototype and visual systems</small>
            </div>
            <div className="avatar-portrait">
              <img src="/rexd.png" alt="Rex's space character" />
            </div>
            <div className="avatar-story-card story-card-left">
              <span>01</span>
              <strong>UI Audit</strong>
            </div>
            <div className="avatar-story-card story-card-right">
              <span>02</span>
              <strong>Cleaner Flow</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="section about" id="about">
        <div className="section-heading">
          <p>Role Introduction</p>
          <h2>Turning complex interfaces into clear, usable, and visually consistent product experiences.</h2>
        </div>
        <div className="about-grid">
          <article className="glass-panel profile-panel">
            <span className="panel-index">01</span>
            <h3>Jiali Diao / Rex</h3>
            <p>
              Computer Science graduate with experience in front-end development, UI redesign, and user-friendly digital interfaces.
            </p>
          </article>
          <article className="glass-panel">
            <span className="panel-index">02</span>
            <h3>Focus</h3>
            <p>
              UI/UX Design · Front-End Development · Visual Design · Product Design. Jiali focuses on layout clarity, visual hierarchy, form usability, and responsive interfaces.
            </p>
          </article>
          <article className="glass-panel">
            <span className="panel-index">03</span>
            <h3>Approach</h3>
            <p>
              Improve existing interfaces while preserving technical functionality and product consistency, making workflows cleaner, easier to scan, and more visually ordered.
            </p>
          </article>
        </div>

        <div className="tool-grid">
          {toolGroups.map((group) => (
            <article className="tool-card" key={group.label}>
              <span>{group.label}</span>
              <strong>{group.value}</strong>
            </article>
          ))}
        </div>
      </section>

      <section className="section work" id="work">
        <div className="section-heading split">
          <div>
            <p>Selected Work</p>
            <h2>Real Product Case Studies</h2>
          </div>
          <span>Healthcare UI · Forms · Responsive Design</span>
        </div>

        <div className="highlight-grid">
          {highlights.map((item, index) => (
            <article className="highlight-card" key={item}>
              <span>0{index + 1}</span>
              <p>{item}</p>
            </article>
          ))}
        </div>

        <div className="case-grid detailed">
          {cases.map((item, index) => (
            <article className="case-card" key={item.title}>
              <div className="before-after" aria-label={`${item.title} before and after images`}>
                {item.visuals.map((visual) => (
                  <figure className="visual-frame" key={visual.src}>
                    <img src={visual.src} alt={visual.alt} loading="lazy" />
                    <figcaption>{visual.label}</figcaption>
                  </figure>
                ))}
              </div>
              <div className="case-content">
                <div className="case-kicker">
                  <span>{item.type}</span>
                  <span>{index + 1 < 10 ? `0${index + 1}` : index + 1}</span>
                </div>
                <p>{item.meta}</p>
                <h3>{item.title}</h3>
                <span>{item.desc}</span>
                <div className="case-detail">
                  <strong>Problem</strong>
                  <small>{item.problem}</small>
                </div>
                <div className="case-detail">
                  <strong>Goal</strong>
                  <small>{item.goal}</small>
                </div>
                <ul>
                  {item.decisions.map((decision) => (
                    <li key={decision}>{decision}</li>
                  ))}
                </ul>
                <div className="case-result">{item.result}</div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section experience" id="experience">
        <div className="interactive-shell">
          <div className="section-heading">
            <p>Interactive Experience</p>
            <h2>A portfolio experience that feels like an interface journey, not a static resume.</h2>
          </div>
          <div className="orbit-area" aria-hidden="true">
            <span className="orbit orbit-a" />
            <span className="orbit orbit-b" />
            <span className="orbit-dot dot-a" />
            <span className="orbit-dot dot-b" />
            <span className="core">R</span>
          </div>
          <div className="experience-copy">
            <p>
              This space brings together Jiali's design strengths: problem identification, user flow improvement, form usability, visual systems, responsive layout, and front-end implementation.
            </p>
          </div>
        </div>

        <div className="skill-grid">
          {skillGroups.map((group) => (
            <article className="skill-card" key={group.title}>
              <h3>{group.title}</h3>
              <div>
                {group.items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section contact" id="contact">
        <div className="contact-card">
          <p>Contact</p>
          <h2>Let's talk about the next product experience.</h2>
          <div className="contact-links">
            <a href="mailto:diaojiali0118@gmail.com">diaojiali0118@gmail.com</a>
            <a href="https://app.notion.com/p/Jiali-Diao-UI-UX-Portfolio-6808732c69ac49e5a4b92f7709ea615e">
              Notion Portfolio
            </a>
          </div>
          <div className="contact-note">
            <span>Walnut, CA</span>
            <span>Phone available upon request</span>
          </div>
        </div>
      </section>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);
