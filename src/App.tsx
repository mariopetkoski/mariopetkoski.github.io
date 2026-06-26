import {
  eventEntries,
  interestGroups,
  linkEntries,
  profile,
  timelineEntries,
  type LinkEntry,
  type PrimaryLink,
  type TimelineEntry,
} from './content';

function SocialIcon({ icon }: { icon: PrimaryLink['icon'] }) {
  if (icon === 'linkedin') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="hero-nav__icon">
        <path
          fill="currentColor"
          d="M6.94 8.5H3.56V20h3.38V8.5Zm.24-3.55a2 2 0 1 0-4 0a2 2 0 0 0 4 0Zm13.26 8.01c0-3.47-1.85-5.08-4.33-5.08c-2 0-2.9 1.1-3.4 1.88V8.5H9.33c.04.84 0 11.5 0 11.5h3.38v-6.42c0-.34.03-.68.12-.92c.27-.68.88-1.38 1.9-1.38c1.34 0 1.88 1.03 1.88 2.54V20H20v-6.99Z"
        />
      </svg>
    );
  }

  if (icon === 'github') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="hero-nav__icon">
        <path
          fill="currentColor"
          d="M12 .5C5.65.5.5 5.7.5 12.13c0 5.14 3.29 9.5 7.86 11.04c.58.11.79-.26.79-.57c0-.28-.01-1.03-.02-2.03c-3.2.71-3.88-1.56-3.88-1.56c-.52-1.34-1.28-1.7-1.28-1.7c-1.05-.73.08-.72.08-.72c1.16.08 1.77 1.21 1.77 1.21c1.03 1.79 2.7 1.27 3.36.97c.1-.76.4-1.27.72-1.56c-2.55-.29-5.23-1.29-5.23-5.74c0-1.27.45-2.3 1.19-3.11c-.12-.3-.52-1.5.11-3.12c0 0 .98-.32 3.2 1.19a10.96 10.96 0 0 1 5.83 0c2.22-1.51 3.2-1.19 3.2-1.19c.63 1.62.23 2.82.11 3.12c.74.81 1.19 1.84 1.19 3.11c0 4.46-2.68 5.44-5.24 5.73c.41.36.78 1.06.78 2.14c0 1.55-.01 2.8-.01 3.18c0 .31.21.69.8.57A11.66 11.66 0 0 0 23.5 12.13C23.5 5.7 18.35.5 12 .5Z"
        />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="hero-nav__icon">
      <path
        fill="currentColor"
        d="M18.9 2.25h3.18l-6.96 7.96l8.19 10.54h-6.41l-5.02-6.37l-5.58 6.37H3.11l7.45-8.52L2.7 2.25h6.57l4.53 5.82l5.1-5.82Zm-1.12 16.6h1.76L8.31 4.06H6.42l11.36 14.8Z"
      />
    </svg>
  );
}

function TimelineText({
  href,
  className,
  children,
}: {
  href?: string;
  className?: string;
  children: string;
}) {
  if (!href) {
    return <span className={className}>{children}</span>;
  }

  return (
    <a
      href={href}
      className={`${className ?? ''} timeline-link`.trim()}
      target="_blank"
      rel="noreferrer"
    >
      {children}
    </a>
  );
}

function TimelineRow({ entry }: { entry: TimelineEntry }) {
  const isEducation = entry.type === 'education';

  return (
    <li className="timeline-row">
      <div className="timeline-meta">
        <span className="timeline-period">{entry.period}</span>
        <span className="timeline-type">{entry.type}</span>
      </div>
      <div className="timeline-body">
        <p className="timeline-title">
          {isEducation ? (
            <TimelineText href={entry.organizationHref} className="timeline-organization">
              {entry.organization}
            </TimelineText>
          ) : (
            <>
              <TimelineText href={entry.titleHref}>{entry.title}</TimelineText>
              <TimelineText href={entry.organizationHref} className="timeline-organization">
                {entry.organization}
              </TimelineText>
            </>
          )}
        </p>
        {isEducation ? (
          <p className="timeline-detail timeline-detail--secondary">
            <TimelineText href={entry.titleHref}>{entry.title}</TimelineText>
          </p>
        ) : null}
        {entry.detail ? <p className="timeline-detail">{entry.detail}</p> : null}
      </div>
    </li>
  );
}

function LinkList({ entries }: { entries: LinkEntry[] }) {
  return (
    <ul className="link-list">
      {entries.map((entry) => (
        <li key={entry.label} className="link-row">
          <a
            className="link-row__anchor"
            href={entry.href}
            target={entry.href.startsWith('http') ? '_blank' : undefined}
            rel={entry.href.startsWith('http') ? 'noreferrer' : undefined}
          >
            <span className="link-row__label">{entry.label}</span>
            <span className="link-row__kind">{entry.kind}</span>
          </a>
          <p className="link-row__meta">{entry.meta}</p>
        </li>
      ))}
    </ul>
  );
}

export default function App() {
  return (
    <div className="site-shell">
      <div className="texture texture-grid" aria-hidden="true" />
      <div className="texture texture-noise" aria-hidden="true" />

      <header className="app-bar">
        <div className="page shell-row">
          <p className="app-bar__brand">mp</p>
          <p className="app-bar__status">Liquid glass portfolio</p>
        </div>
      </header>

      <main className="page">
        <section className="hero section">
          <aside className="hero-rail liquid-panel reveal reveal-1" aria-label="Profile notes">
            <div className="rail-block">
              <p className="section-kicker">00 / profile</p>
              <dl className="stat-list">
                <div>
                  <dt>location</dt>
                  <dd>{profile.location}</dd>
                </div>
                <div>
                  <dt>mode</dt>
                  <dd>liquid</dd>
                </div>
                <div>
                  <dt>asset</dt>
                  <dd>glass-ready</dd>
                </div>
              </dl>
            </div>

            <div className="rail-block rail-block--muted">
              <p className="micro-copy">Scroll for interests, experience, and writing.</p>
            </div>
          </aside>

          <div className="hero-media liquid-panel reveal reveal-2">
            <figure className="media-frame">
              <img
                src={profile.heroImage.src}
                alt={profile.heroImage.alt}
                className="media-frame__image"
              />
              <figcaption className="media-frame__caption">
                <span>glass</span>
                <span>{profile.heroImage.treatment}</span>
              </figcaption>
            </figure>
          </div>

          <div className="hero-copy liquid-panel liquid-panel--dark reveal reveal-3">
            <p className="section-kicker">01 / intro</p>
            <h1>{profile.name}</h1>
            <p className="hero-role">{profile.role}</p>
            <p className="hero-intro">{profile.intro}</p>
            <p className="hero-subintro">{profile.subIntro}</p>
            {profile.extraIntro ? <p className="hero-subintro">{profile.extraIntro}</p> : null}
            {profile.contactNote ? (
              <p className="hero-subintro hero-subintro--contact">{profile.contactNote}</p>
            ) : null}

            <nav className="hero-nav" aria-label="Social links">
              {profile.primaryLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="hero-nav__link"
                  target="_blank"
                  rel="noreferrer"
                >
                  <SocialIcon icon={link.icon} />
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </section>

        <section className="section detail-section" id="interests">
          <div className="section-header">
            <p className="section-kicker">02 / focus</p>
            <p className="section-note">Current focus, curiosities, and active threads</p>
          </div>

          <div className="group-grid">
            {interestGroups.map((group, index) => (
              <article
                key={group.title}
                className={`text-group reveal reveal-${Math.min(index + 1, 3)}`}
              >
                <h2>{group.title}</h2>
                <ul className="detail-list">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="section detail-section" id="experience">
          <div className="section-header">
            <p className="section-kicker">03 / timeline</p>
            <p className="section-note">Work experience and education</p>
          </div>

          <ol className="timeline-list">
            {timelineEntries.map((entry) => (
              <TimelineRow
                key={`${entry.period}-${entry.title}-${entry.organization}`}
                entry={entry}
              />
            ))}
          </ol>
        </section>

        <section className="section detail-section" id="writing">
          <div className="section-header">
            <p className="section-kicker">04 / writing</p>
            <p className="section-note">Published writing and blog posts</p>
          </div>

          <LinkList entries={linkEntries} />
        </section>

        <section className="section detail-section" id="events">
          <div className="section-header">
            <p className="section-kicker">05 / events</p>
            <p className="section-note">Meetups, community events, and hosted sessions</p>
          </div>

          <LinkList entries={eventEntries} />
        </section>
      </main>

      <footer className="page site-footer">
        <p className="site-footer__copy">© 2026 Mario Petkoski</p>
      </footer>
    </div>
  );
}
