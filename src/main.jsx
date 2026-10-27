import React, { useEffect, useMemo, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const stops = [
  { id: 'hero', label: 'Start', message: "Hi, I'm Rex. Scroll down or tap Next and I'll guide you through Jiali's work, one stop at a time." },
  { id: 'about', label: 'Stop 1 of 6', message: "First, meet the designer: a computer science background, a designer's eye, and the ability to build the interfaces he designs." },
  { id: 'gancao', label: 'Stop 2 of 6', message: 'Drag the comparison handle to see how a crowded healthcare form became calmer, clearer, and easier to scan.' },
  { id: 'clinic', label: 'Stop 3 of 6', message: 'The second case goes deeper into clinic management, with clearer cards, stronger hierarchy, and a cleaner workflow.' },
  { id: 'alikeproff', label: 'Stop 4 of 6', message: 'This academic project explores how progressive onboarding, privacy choices, and shared interests can support more meaningful social discovery.' },
  { id: 'toolkit', label: 'Stop 5 of 6', message: 'These are the design and implementation skills behind the work you just saw.' },
  { id: 'contact', label: 'Final stop', message: "That's the tour. If Jiali feels like a good fit for your team, his inbox is right here." },
];

const cases = [
  {
    id: 'gancao', number: '02', caseNumber: '01', eyebrow: 'Selected work · Case study', sectionTitle: 'From crowded form to calm workflow', title: 'Gancao Healthcare UI Redesign',
    stack: 'Angular / Ionic / SCSS / TypeScript / Figma',
    intro: 'Gancao is a healthcare management platform. I redesigned patient-related and visit-related pages to make dense medical information cleaner, easier to scan, and more visually consistent while preserving the original Angular/Ionic functionality.',
    problem: 'The original interface had crowded layouts, inconsistent spacing, and weak visual separation between form sections. Complex pages with many inputs were difficult to scan quickly.',
    goal: 'Create a cleaner, more readable interface without changing existing product functionality.',
    before: '/gancao-before.png', after: '/gancao-after.png',
    beforeAlt: 'Original insurance information page before the Gancao redesign', afterAlt: 'Redesigned patient information page after the Gancao redesign',
    decisions: ['Kept the existing green left-border input style for product consistency.', 'Added clearer section separation with cards and headers.', 'Improved spacing between form groups and simplified action layouts.', 'Made primary actions such as Save and Update more noticeable.', 'Adjusted responsive behavior for smaller screens.'],
    result: 'The redesigned pages became cleaner, easier to scan, and more consistent while preserving the existing healthcare workflow.',
  },
  {
    id: 'clinic', number: '03', caseNumber: '02', eyebrow: 'Selected work · Case study', sectionTitle: 'Same platform, one level deeper', title: 'Clinic Management Page Redesign',
    stack: 'UI Redesign / Visual Design / Front-End Implementation',
    intro: 'As part of the Gancao healthcare management app, I redesigned the Clinic Management page to improve clinic cards, form hierarchy, doctor cards, action buttons, and the overall management flow.',
    problem: 'The original page felt outdated and visually heavy. Clinic cards, action buttons, and form sections lacked alignment and consistency, with large empty areas across the layout.',
    goal: 'Make clinic information easier to scan and help users manage clinics, details, and doctor information more efficiently.',
    before: '/clinic-before.png', after: '/clinic-after.png',
    beforeAlt: 'Original clinic management page before redesign', afterAlt: 'Redesigned clinic management page after redesign',
    decisions: ['Redesigned clinic cards with softer borders, rounded corners, and cleaner spacing.', 'Used a clear green active state for the selected clinic card.', 'Moved add actions into a focused circular button.', 'Separated Clinic Information, Address Information, and Doctor List with stronger hierarchy.', 'Redesigned doctor cards so name, role, phone, and email are easier to read.'],
    result: 'The updated layout feels more modern, reduces visual clutter, and improves readability while keeping the original page functionality.',
  },
];

const skills = [
  { title: 'Design thinking', items: ['Problem identification', 'User flow improvement', 'Before-and-after comparison', 'Design decision explanation'] },
  { title: 'UI/UX fundamentals', items: ['Form usability', 'Button hierarchy', 'Navigation clarity', 'Responsive layout', 'Error message placement'] },
  { title: 'Visual design', items: ['Typography hierarchy', 'Spacing and alignment', 'Color consistency', 'Component styling', 'Front-end implementation'] },
];

function ArrowIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 4v16m0 0-6-6m6 6 6-6" /></svg>;
}

function Portrait() {
  const stageRef = useRef(null);
  useEffect(() => {
    const stage = stageRef.current;
    if (!stage || matchMedia('(pointer: coarse)').matches || matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
    const move = (event) => {
      const rect = stage.getBoundingClientRect();
      const x = Math.max(-1, Math.min(1, (event.clientX - (rect.left + rect.width / 2)) / (innerWidth * 0.5)));
      const y = Math.max(-1, Math.min(1, (event.clientY - (rect.top + rect.height / 2)) / (innerHeight * 0.55)));
      stage.style.setProperty('--look-x', x.toFixed(3));
      stage.style.setProperty('--look-y', y.toFixed(3));
    };
    addEventListener('pointermove', move, { passive: true });
    return () => removeEventListener('pointermove', move);
  }, []);

  return (
    <div className="portrait" ref={stageRef}>
      <span className="portrait-star star-a" aria-hidden="true">✦</span>
      <span className="portrait-star star-b" aria-hidden="true">✦</span>
      <div className="portrait-arch"><img src="/rexd.png" alt="Rex, the character guiding Jiali Diao's portfolio tour" /></div>
      <div className="portrait-note note-character"><span>Character</span><strong>Rex</strong><small>Your portfolio guide</small></div>
      <div className="portrait-note note-tool"><span>Tool</span><strong>Figma</strong><small>Prototype and visual systems</small></div>
    </div>
  );
}

function Comparison({ item }) {
  const [position, setPosition] = useState(50);
  const frameRef = useRef(null);
  const update = (clientX) => {
    const rect = frameRef.current?.getBoundingClientRect();
    if (rect) setPosition(Math.max(0, Math.min(100, ((clientX - rect.left) / rect.width) * 100)));
  };
  const onPointerDown = (event) => { event.currentTarget.setPointerCapture(event.pointerId); update(event.clientX); };
  const onKeyDown = (event) => {
    if (event.key === 'ArrowLeft') setPosition((value) => Math.max(0, value - 3));
    if (event.key === 'ArrowRight') setPosition((value) => Math.min(100, value + 3));
  };

  return (
    <div className="comparison" ref={frameRef} style={{ '--position': `${position}%` }} role="slider" tabIndex="0"
      aria-label={`${item.title} before and after comparison`} aria-valuemin="0" aria-valuemax="100" aria-valuenow={Math.round(position)}
      onPointerDown={onPointerDown} onPointerMove={(event) => event.currentTarget.hasPointerCapture(event.pointerId) && update(event.clientX)} onKeyDown={onKeyDown}>
      <img className="comparison-image comparison-after" src={item.after} alt={item.afterAlt} loading="lazy" />
      <div className="comparison-before"><img className="comparison-image" src={item.before} alt={item.beforeAlt} loading="lazy" /></div>
      <span className="comparison-label label-before">Before</span><span className="comparison-label label-after">After</span>
      <span className="comparison-line" aria-hidden="true"><b>↔</b></span>
    </div>
  );
}

function CaseStudy({ item }) {
  return (
    <section className="tour-stop case-stop" id={item.id} data-stop>
      <div className="route-pin route-pin-green"><span>{item.number}</span></div>
      <header className="stop-heading"><p>{item.eyebrow}</p><h2>{item.sectionTitle}</h2><span>{item.stack}</span></header>
      <article className="case-sheet">
        <div className="case-summary"><div><span className="case-number">Case {item.caseNumber}</span><h3>{item.title}</h3></div><p>{item.intro}</p></div>
        <div className="case-brief"><div><strong>The problem</strong><p>{item.problem}</p></div><div><strong>The goal</strong><p>{item.goal}</p></div></div>
        <Comparison item={item} />
        <p className="comparison-hint">Drag the handle or use the arrow keys to compare the original product screens.</p>
        <div className="decision-grid"><h4>What changed</h4><ul>{item.decisions.map((decision) => <li key={decision}>{decision}</li>)}</ul></div>
        <p className="case-outcome"><strong>Result</strong>{item.result}</p>
      </article>
    </section>
  );
}

const alikeScreens = [
  { src: '/alikeproff-account.jpg', title: 'Account setup', note: 'Essential credentials begin the three-step flow.' },
  { src: '/alikeproff-privacy.jpg', title: 'Privacy controls', note: 'Visibility decisions appear during profile creation.' },
  { src: '/alikeproff-interests.jpg', title: 'Interests & lifestyle', note: 'Structured fields support richer self-expression.' },
  { src: '/alikeproff-messaging.jpg', title: 'Messaging', note: 'Conversation and management tools complete the experience.' },
];

function AlikeProffCaseStudy() {
  return (
    <section className="tour-stop case-stop alike-stop" id="alikeproff" data-stop>
      <div className="route-pin route-pin-green"><span>04</span></div>
      <header className="stop-heading"><p>Academic project · Case study</p><h2>Designing connection with intention.</h2><span>UX/UI Design / Figma / Mobile Application</span></header>
      <article className="case-sheet alike-sheet">
        <div className="case-summary"><div><span className="case-number">Case 03</span><h3>AlikeProff — Personalized Social Discovery</h3></div><p>AlikeProff is a mobile app concept designed to help people build meaningful connections through shared interests, hobbies, lifestyles, and personal preferences.</p></div>
        <div className="project-meta" aria-label="Project details"><span>Role · UX/UI Designer</span><span>Tool · Figma</span><span>Type · Class Project</span></div>
        <div className="case-brief"><div><strong>The problem</strong><p>Detailed profiles can improve social discovery, but long onboarding flows create effort and personal-data collection raises privacy concerns.</p></div><div><strong>The design question</strong><p>How might we collect useful information for personalized discovery while keeping onboarding clear, manageable, and respectful of user choice?</p></div></div>

        <div className="journey-block">
          <div className="section-label"><span>Information architecture</span><h4>A three-stage onboarding journey</h4></div>
          <div className="journey-strip">
            <article><b>01</b><h5>Account information</h5><p>Name, email, phone number, and password establish the account.</p></article>
            <article><b>02</b><h5>Personal information</h5><p>Profile details pair with visibility controls for selected information.</p></article>
            <article><b>03</b><h5>Interests & lifestyle</h5><p>Hobbies, activities, preferences, and a biography shape discovery.</p></article>
          </div>
        </div>

        <div className="user-flow-block">
          <div className="section-label"><span>User flow</span><h4>From entry to a meaningful conversation</h4></div>
          <ol className="user-flow" aria-label="AlikeProff user flow">
            <li className="flow-start"><span>Entry</span><strong>Open AlikeProff</strong><small>Launch the app</small></li>
            <li className="flow-choice"><span>Choice</span><strong>Log in or sign up</strong><small>Returning and new users split here</small></li>
            <li><span>Step 01</span><strong>Account information</strong><small>Create credentials</small></li>
            <li><span>Step 02</span><strong>Personal information</strong><small>Set profile details and visibility</small></li>
            <li><span>Step 03</span><strong>Interests & lifestyle</strong><small>Describe preferences and personality</small></li>
            <li><span>Discovery</span><strong>Profile ready</strong><small>Explore compatible people</small></li>
            <li className="flow-end"><span>Connection</span><strong>Start a conversation</strong><small>Message, pin, mute, block, or delete</small></li>
          </ol>
          <p className="flow-note"><b>Returning user path</b> Log in moves directly from the entry choice to discovery.</p>
        </div>

        <div className="screen-showcase">
          <div className="section-label"><span>Selected screens</span><h4>From profile setup to conversation</h4></div>
          <div className="phone-gallery">{alikeScreens.map((screen) => <figure key={screen.title}><div className="phone-frame"><img src={screen.src} alt={`${screen.title} screen from the AlikeProff mobile app concept`} loading="lazy" /></div><figcaption><strong>{screen.title}</strong><span>{screen.note}</span></figcaption></figure>)}</div>
        </div>

        <div className="decision-grid alike-decisions"><h4>Key design decisions</h4><ul><li>Split registration into progressive steps with a visible progress indicator.</li><li>Used structured interest and lifestyle fields to support compatible discovery.</li><li>Introduced visibility controls during onboarding instead of hiding them in settings.</li><li>Kept a consistent purple-and-white visual language across registration and messaging.</li><li>Added Pin, Mute, Block, and Delete actions for basic conversation management.</li></ul></div>
        <p className="case-outcome"><strong>Reflection</strong>The project strengthened my understanding of form complexity, information hierarchy, personalization, and privacy. A future iteration would reduce required questions, improve validation and accessibility, and test the flow with users.</p>
      </article>
    </section>
  );
}

function Guide({ activeIndex, onGoTo }) {
  const [manuallyCollapsed, setManuallyCollapsed] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const current = stops[activeIndex];
  const collapsed = manuallyCollapsed || scrolling;

  useEffect(() => {
    let timer;
    const handleScroll = () => {
      setScrolling(true);
      clearTimeout(timer);
      timer = setTimeout(() => setScrolling(false), 850);
    };
    addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  return (
    <aside className={`guide ${collapsed ? 'is-collapsed' : ''}`} aria-label="Rex portfolio guide">
      <button className="guide-avatar" onClick={() => setManuallyCollapsed((value) => !value)} aria-expanded={!collapsed} aria-label={collapsed ? 'Open Rex guide' : 'Hide Rex guide'}><img src="/rexd.png" alt="" /></button>
      <div className="guide-bubble">
        <button className="guide-close" onClick={() => setManuallyCollapsed(true)} aria-label="Hide guide">×</button>
        <div className="guide-meta"><strong>Rex</strong><span>your guide</span><b>{current.label}</b></div>
        <p key={current.id}>{current.message}</p>
        <div className="guide-controls">
          <div className="guide-dots">{stops.map((stop, index) => <button key={stop.id} className={index === activeIndex ? 'is-active' : ''} onClick={() => onGoTo(index)} aria-label={`Go to ${stop.label}`} />)}</div>
          <button className="guide-next" onClick={() => onGoTo(activeIndex === stops.length - 1 ? 0 : activeIndex + 1)}>{activeIndex === stops.length - 1 ? 'Back to start' : 'Next stop'} <span>→</span></button>
        </div>
      </div>
    </aside>
  );
}

function App() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionIds = useMemo(() => stops.map((stop) => stop.id), []);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => entry.isIntersecting && setActiveIndex(sectionIds.indexOf(entry.target.id))), { rootMargin: '-35% 0px -48%', threshold: 0 });
    sectionIds.forEach((id) => { const section = document.getElementById(id); if (section) observer.observe(section); });
    return () => observer.disconnect();
  }, [sectionIds]);
  const goTo = (index) => { document.getElementById(stops[index].id)?.scrollIntoView({ behavior: 'smooth', block: 'start' }); setActiveIndex(index); };

  return (
    <>
      <a className="skip-link" href="#about">Skip to portfolio</a>
      <header className="hero" id="hero" data-stop>
        <div className="hero-inner">
          <div className="hero-copy">
            <span className="tour-kicker"><b /> Portfolio tour · now boarding</span>
            <h1>Hi, I'm <em>Rex</em>.<br />I'll show you around.</h1>
            <p className="hero-role">The work of Jiali Diao · UI/UX Designer &amp; Front-End Developer</p>
            <p className="hero-lede">A warm portfolio space where computer science meets interface design. Take the tour and see how Jiali turns complex product screens into clearer, more usable experiences.</p>
            <div className="hero-actions"><button onClick={() => goTo(1)}>Start the tour <ArrowIcon /></button><a href="#gancao">View case studies</a></div>
            <div className="hero-tags"><span>UI audit</span><span>Healthcare UI</span><span>Forms and usability</span><span>Responsive design</span></div>
          </div>
          <Portrait />
        </div>
      </header>

      <main className="tour-route">
        <section className="tour-stop about-stop" id="about" data-stop>
          <div className="route-pin"><span>01</span></div>
          <header className="stop-heading"><p>Meet the designer</p><h2>Clear thinking, thoughtful interfaces, real implementation.</h2><span>Who Jiali is, what he focuses on, and how he works.</span></header>
          <div className="about-layout">
            <article><b>01</b><h3>Jiali Diao / Rex</h3><p>Computer Science graduate with experience in front-end development, UI redesign, and user-friendly digital interfaces.</p></article>
            <article><b>02</b><h3>Focus</h3><p>UI/UX Design, Front-End Development, Visual Design, and Product Design, with a focus on clarity, hierarchy, and responsive interfaces.</p></article>
            <article><b>03</b><h3>Approach</h3><p>Improve existing interfaces while preserving technical functionality, making workflows cleaner, easier to scan, and more visually ordered.</p></article>
          </div>
          <div className="tool-row"><div><strong>Design tools</strong><span>Figma, Photoshop</span></div><div><strong>Development</strong><span>Angular, Ionic, React Native, TypeScript, SCSS, HTML, CSS</span></div></div>
        </section>

        {cases.map((item) => <CaseStudy item={item} key={item.id} />)}

        <AlikeProffCaseStudy />

        <section className="tour-stop toolkit-stop" id="toolkit" data-stop>
          <div className="route-pin"><span>05</span></div>
          <header className="stop-heading"><p>The toolkit</p><h2>An interface journey, not a static resume.</h2><span>Design judgment supported by practical front-end implementation.</span></header>
          <div className="skills-grid">{skills.map((group, index) => <article key={group.title}><div className="skill-heading"><b aria-hidden="true">{index === 0 ? '⌕' : index === 1 ? '▭' : '✦'}</b><h3>{group.title}</h3></div><div className="skill-items">{group.items.map((item) => <span key={item}>{item}</span>)}</div></article>)}</div>
        </section>

        <section className="tour-stop contact-stop" id="contact" data-stop>
          <div className="route-pin route-pin-end"><span>✦</span></div>
          <header className="stop-heading"><p>Final stop · Say hello</p><h2>End of the tour. Start of a conversation?</h2></header>
          <div className="contact-panel"><img src="/rexd.png" alt="Rex waving at the end of the portfolio tour" /><div><h3>Thanks for walking with me.</h3><p>You've seen how Jiali works: find the problem, clean up the flow, keep what works, and build the result in real code.</p><div className="contact-actions"><a href="mailto:diaojiali0118@gmail.com">Email Jiali</a><span>Walnut, California</span></div></div></div>
          <footer>Rex's space · Portfolio of Jiali Diao · UI/UX Designer &amp; Front-End Developer</footer>
        </section>
      </main>
      <Guide activeIndex={activeIndex} onGoTo={goTo} />
    </>
  );
}

createRoot(document.getElementById('root')).render(<App />);
