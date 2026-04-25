'use client';
import Image from 'next/image';

const supervisors = [
  { name: 'Mr. Buddika Harshanath',   role: 'Supervisor',    image: '/team/harshanath.jpg',    email: 'harshanath.s@sliit.lk', dept: 'SLIIT · Department of Information Technology' },
  { name: 'Ms. N C P Kumarapperuma', role: 'Co-Supervisor', image: '/team/kumarapperuma.jpg', email: 'chathurya.k@sliit.lk',  dept: 'SLIIT · Department of Information Technology' },
];

const team = [
  
  {
    name: 'J C De Soysa',
    role: 'Research Member',
    email: 'jcdsoysa@gmail.com',
    module: 'Spatio-Semantic AR Discovery Engine',
    image: '/team/desoysa.jpg',
    accent: '#7c6bff', rgb: '124,107,255',
  },
  {
    name: 'K K T Thathsarani',
    role: 'Research Member',
    email: 'tharushikk9@gmail.com',
    module: 'Intelligent Safety Management Module',
    image: '/team/thathsarani.jpg',
    accent: '#00c9a7', rgb: '0,201,167',
  },
  {
    name: 'J W P D Pathiraja',
    role: 'Research Member',
    email: 'dinushipathiraja1@gmail.com',
    module: ' Dynamic Itinerary Planning Module',
    image: '/team/pathiraja.jpg',
    accent: '#f5a623', rgb: '245,166,35',
  },
  {
    name: 'M R K A Moragaspitiya',
    role: 'Research Member',
    email: 'kanjalimoragaspitiya0925@gmail.com',
    module: 'Community Cultural Experience Marketplace',
    image: '/team/moragaspitiya.jpg',
    accent: '#ff6b9d', rgb: '255,107,157',
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="page-top">
        <div className="wrap">
          <div className="eyebrow">About Us</div>
          <h1 style={{ fontSize: 'clamp(34px,5vw,58px)', fontWeight: 900, color: '#e4ecf7', marginBottom: 18, letterSpacing: '-0.022em' }}>
            Meet the Team
          </h1>
          <p style={{ fontSize: 16.5, color: '#7a93b0', maxWidth: 520, lineHeight: 1.72 }}>
            Four IT undergraduates from SLIIT passionate about applying AI and AR to transform how travelers experience Sri Lanka.
          </p>
        </div>
      </section>

      {/* ── SUPERVISORS ── */}
      <section style={{ padding: '0 24px 64px' }}>
        <div className="wrap">
          <div className="eyebrow">Supervisory Panel</div>
          <h2 style={{ fontSize: 26, color: '#e4ecf7', marginBottom: 28 }}>Academic Supervisors</h2>
          <div className="g2">
            {supervisors.map((s, i) => (
              <div key={i} style={{ display: 'flex', gap: 15, alignItems: 'center', background: 'var(--navy-light)', border: '1px solid var(--border)', borderRadius: 14, padding: '20px 22px' }}>
                {/* Supervisor Photo */}
                <div style={{
                  width: 64, height: 64, borderRadius: 14, flexShrink: 0,
                  border: '2px solid rgba(0,201,167,0.3)',
                  overflow: 'hidden', position: 'relative',
                  background: 'rgba(0,201,167,0.08)',
                }}>
                  <Image
                    src={s.image}
                    alt={s.name}
                    fill
                    sizes="64px"
                    style={{ objectFit: 'cover', zIndex: 1 }}
                  />
                  {/* Fallback */}
                  <div style={{
                    position: 'absolute', inset: 0, zIndex: 0,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 22, color: '#00c9a7',
                  }}>🎓</div>
                </div>
                <div>
                  <div style={{ fontSize: 15.5, fontWeight: 600, color: '#e4ecf7', marginBottom: 2 }}>{s.name}</div>
                  <div style={{ fontSize: 12, color: '#00c9a7', marginBottom: 3, fontWeight: 600 }}>{s.role}</div>
                  <div style={{ fontSize: 12, color: '#415266', marginBottom: 3 }}>{s.dept}</div>
                  <a href={`mailto:${s.email}`}
                    style={{ fontSize: 11.5, color: '#415266', fontFamily: "'DM Mono',monospace", textDecoration: 'none' }}
                    onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = '#00c9a7'}
                    onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = '#415266'}
                  >{s.email}</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="hr" style={{ margin: '0 auto 64px', maxWidth: 1120 }} />

      {/* ── TEAM MEMBERS ── */}
      <section style={{ padding: '0 24px 64px' }}>
        <div className="wrap">
          <div className="eyebrow">Research Group</div>
          <h2 style={{ fontSize: 26, color: '#e4ecf7', marginBottom: 28 }}>Group Members</h2>
          <div className="g2">
            {team.map((m, i) => (
              <div key={i} className="card" style={{ position: 'relative', overflow: 'hidden' }}>
                {/* top accent line */}
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: `linear-gradient(90deg,${m.accent},transparent)` }} />

                <div style={{ display: 'flex', gap: 18, alignItems: 'flex-start' }}>

                  {/* Photo */}
                  <div style={{
                    width: 84, height: 84, borderRadius: 18, flexShrink: 0,
                    border: `2px solid rgba(${m.rgb},0.35)`,
                    overflow: 'hidden', position: 'relative',
                    background: `rgba(${m.rgb},0.08)`,
                  }}>
                    <Image
                      src={m.image}
                      alt={m.name}
                      fill
                      sizes="84px"
                      style={{ objectFit: 'cover', zIndex: 1 }}
                    />
                    {/* Initials shown if image fails to load */}
                    <div style={{
                      position: 'absolute', inset: 0, zIndex: 0,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: 24, fontWeight: 700, color: m.accent,
                      fontFamily: "'Playfair Display',serif",
                    }}>
                      {m.name.charAt(0)}
                    </div>
                  </div>

                  {/* Info */}
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <h3 style={{ fontSize: 16, fontWeight: 700, color: '#e4ecf7', marginBottom: 3 }}>{m.name}</h3>
                    <div style={{ fontSize: 11.5, color: m.accent, marginBottom: 2, fontWeight: 600 }}>{m.role}</div>
                    <div style={{ fontSize: 11.5, color: '#415266', marginBottom: 12 }}>SLIIT · Dept. of Information Technology</div>

                    <div style={{ padding: '7px 11px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: 8, marginBottom: 12 }}>
                      <div style={{ fontSize: 9.5, fontFamily: "'DM Mono',monospace", color: '#415266', marginBottom: 2, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Research Focus</div>
                      <div style={{ fontSize: 12.5, color: '#96b0c8' }}>{m.module}</div>
                    </div>

                    <a href={`mailto:${m.email}`}
                      style={{ fontSize: 11.5, color: '#415266', fontFamily: "'DM Mono',monospace", textDecoration: 'none' }}
                      onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = '#00c9a7'}
                      onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = '#415266'}
                    >✉ {m.email}</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="hr" style={{ margin: '0 auto 64px', maxWidth: 1120 }} />

      {/* ── INSTITUTION ── */}
      <section style={{ padding: '0 24px 96px' }}>
        <div className="wrap">
          <div style={{ display: 'flex', gap: 28, alignItems: 'center', background: 'var(--navy-light)', border: '1px solid var(--border)', borderRadius: 18, padding: '36px 44px', flexWrap: 'wrap' }}>
            <div style={{ fontSize: 54 }}>🎓</div>
            <div>
              <div className="eyebrow" style={{ marginBottom: 10 }}>Institution</div>
              <h3 style={{ fontSize: 20, fontWeight: 700, color: '#e4ecf7', marginBottom: 5 }}>
                Sri Lanka Institute of Information Technology (SLIIT)
              </h3>
              <p style={{ color: '#7a93b0', fontSize: 14 }}>
                Department of Information Technology · Faculty of Computing · New Kandy Road, Malabe, Sri Lanka
              </p>
              <div style={{ display: 'flex', gap: 9, marginTop: 14, flexWrap: 'wrap' }}>
                <span className="tag tag-teal">IT Research Group 2024–2025</span>
                <span className="tag tag-amber">ICARC 2026 — IEEE Published</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}