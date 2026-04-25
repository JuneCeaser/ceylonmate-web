'use client';

const slides = [
  {
    id: 'proposal',
    title: 'Project Proposal Presentation',
    date: 'March 2024',
    n: 24,
    href: '/slides/proposal.pptx',
    desc: 'Initial presentation of the CeylonMate concept, research problem, objectives, and proposed methodology.',
    tags: ['Concept','Objectives','Methodology'],
    accent: '#00c9a7', rgb: '0,201,167',
  },
  {
    id: 'pp1',
    title: 'Progress Presentation I',
    date: 'June 2024',
    n: 32,
    href: '/slides/pp1.pptx',
    desc: 'First progress review showcasing preliminary literature analysis, early prototypes, and initial module design decisions.',
    tags: ['Literature','Prototype','Progress'],
    accent: '#7c6bff', rgb: '124,107,255',
  },
  {
    id: 'pp2',
    title: 'Progress Presentation II',
    date: 'September 2024',
    n: 40,
    href: '/slides/pp2.pptx',
    desc: 'Second progress review with all four modules, integration testing, user evaluation results, and benchmark data.',
    tags: ['Integration','Testing','User Study'],
    accent: '#f5a623', rgb: '245,166,35',
  },
  {
    id: 'icarc',
    title: 'ICARC 2026 Conference Presentation',
    date: 'January 2026',
    n: 18,
    href: '/slides/icarc-2026.pptx',
    desc: 'IEEE ICARC 2026 conference presentation of the complete CeylonMate Smart Tourism Ecosystem research and results.',
    tags: ['IEEE','Conference','Published'],
    accent: '#ff6b9d', rgb: '255,107,157',
    highlight: true,
  },
  {
    id: 'final',
    title: 'Final Presentation',
    date: 'November 2024',
    n: 52,
    href: '/slides/final.pptx',
    desc: 'Comprehensive final presentation covering all modules, evaluation benchmarks, and research conclusions.',
    tags: ['Final','Results','Conclusions'],
    accent: '#00c9a7', rgb: '0,201,167',
  },
];

export default function PresentationsPage() {
  return (
    <>
      <section className="page-top">
        <div className="wrap">
          <div className="eyebrow">Presentations</div>
          <h1 style={{ fontSize: 'clamp(34px,5vw,58px)', fontWeight: 900, color: '#e4ecf7', marginBottom: 18, letterSpacing: '-0.022em' }}>
            Presentation Slides
          </h1>
          <p style={{ fontSize: 16.5, color: '#7a93b0', maxWidth: 500, lineHeight: 1.72 }}>
            Slides from all past presentations throughout the CeylonMate research project lifecycle.
          </p>
        </div>
      </section>

      <section style={{ padding: '0 24px 96px' }}>
        <div className="wrap">
          <div className="g2">
            {slides.map((s, i) => (
              <div key={s.id} className="card" style={{ position: 'relative', overflow: 'hidden', background: s.highlight ? 'linear-gradient(135deg,rgba(255,107,157,0.05),rgba(8,13,26,1))' : 'var(--navy-light)', border: s.highlight ? '1px solid rgba(255,107,157,0.22)' : '1px solid var(--border)' }}>
                {s.highlight && (
                  <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: `linear-gradient(90deg,${s.accent},transparent)` }} />
                )}

                {/* Slide preview thumbnail */}
                <div style={{ height: 108, borderRadius: 9, marginBottom: 18, background: `linear-gradient(135deg,rgba(${s.rgb},0.09),rgba(0,0,0,0.25))`, border: '1px solid rgba(255,255,255,0.04)', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 4, opacity: 0.35, padding: 14 }}>
                    {Array.from({ length: 8 }).map((_, k) => (
                      <div key={k} style={{ height: 14, borderRadius: 3, background: k % 3 === 0 ? s.accent : k % 5 === 0 ? '#f5a623' : 'rgba(255,255,255,0.1)' }} />
                    ))}
                  </div>
                  <div style={{ position: 'absolute', fontFamily: "'Playfair Display',serif", fontSize: 48, fontWeight: 900, color: s.accent, opacity: 0.08, userSelect: 'none' }}>
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <div style={{ position: 'absolute', bottom: 8, right: 12, fontFamily: "'DM Mono',monospace", fontSize: 10.5, color: '#415266' }}>
                    {s.n} slides
                  </div>
                  {/* PPTX label */}
                  <div style={{ position: 'absolute', top: 8, left: 10, padding: '2px 8px', borderRadius: 5, fontSize: 10, fontFamily: "'DM Mono',monospace", fontWeight: 600, background: `rgba(${s.rgb},0.15)`, color: s.accent, border: `1px solid rgba(${s.rgb},0.25)` }}>
                    .pptx
                  </div>
                </div>

                <h3 style={{ fontSize: 16, fontWeight: 700, color: '#e4ecf7', marginBottom: 4 }}>{s.title}</h3>
                <div style={{ fontSize: 11.5, color: '#415266', fontFamily: "'DM Mono',monospace", marginBottom: 10 }}>{s.date}</div>
                <p style={{ fontSize: 13, color: '#7a93b0', lineHeight: 1.65, marginBottom: 14 }}>{s.desc}</p>

                <div style={{ display: 'flex', gap: 7, marginBottom: 20, flexWrap: 'wrap' }}>
                  {s.tags.map(t => (
                    <span key={t} style={{ padding: '2px 9px', borderRadius: 100, fontSize: 10.5, background: 'rgba(255,255,255,0.04)', color: '#415266', border: '1px solid rgba(255,255,255,0.05)' }}>{t}</span>
                  ))}
                </div>

                {/* Buttons row */}
                <div style={{ display: 'flex', gap: 10 }}>
                  {/* View — opens file in new tab */}
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '8px 18px', borderRadius: 100, background: `rgba(${s.rgb},0.09)`, border: `1px solid rgba(${s.rgb},0.22)`, color: s.accent, fontSize: 13, fontWeight: 600, textDecoration: 'none', transition: 'background 0.2s' }}
                    onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = `rgba(${s.rgb},0.17)`}
                    onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = `rgba(${s.rgb},0.09)`}
                  >
                    ↗ View
                  </a>

                  {/* Download — saves the pptx file */}
                  <a
                    href={s.href}
                    download
                    style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '8px 18px', borderRadius: 100, background: 'rgba(245,166,35,0.07)', border: '1px solid rgba(245,166,35,0.2)', color: '#f5a623', fontSize: 13, fontWeight: 600, textDecoration: 'none', transition: 'background 0.2s' }}
                    onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = 'rgba(245,166,35,0.15)'}
                    onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = 'rgba(245,166,35,0.07)'}
                  >
                    ⬇ Download
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}