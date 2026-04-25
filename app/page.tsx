'use client';
import Link from 'next/link';

const modules = [
  { icon: '🗺️', title: 'Dynamic Itinerary Planning',      desc: 'Multi-Objective Genetic Algorithms optimize schedules in real-time based on weather, user fatigue, budget, and live traffic.', accent: '#00c9a7', rgb: '0,201,167' },
  { icon: '🛡️', title: 'Intelligent Safety Management',   desc: 'Spatio-Temporal Risk Analysis Engine with offline-first kinematic anomaly detection and SMS emergency fallback for rural areas.', accent: '#f5a623', rgb: '245,166,35' },
  { icon: '🌏', title: 'Cultural Experience Marketplace', desc: '360° VR previews let tourists virtually explore rural Sri Lanka before booking. AI Moments Engine auto-generates social content.', accent: '#7c6bff', rgb: '124,107,255' },
  { icon: '🏛️', title: 'AR Discovery Engine',             desc: 'Markerless Visual Positioning System overlays 3D heritage reconstructions with Neo4j Knowledge Graph semantic narratives.', accent: '#ff6b9d', rgb: '255,107,157' },
];

const stats = [
  { val: '92%',   lbl: 'User Satisfaction',      sub: 'Itinerary Module'  },
  { val: '93.3%', lbl: 'Fall Detection Accuracy', sub: 'Safety Module'    },
  { val: '4.8/5', lbl: 'Educational Value',       sub: 'AR Discovery'     },
  { val: '70%',   lbl: 'Content Time Reduction',  sub: 'Moments Engine'   },
];

export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden', padding: '130px 24px 80px' }}>
        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', background: 'radial-gradient(ellipse 65% 55% at 82% 28%, rgba(0,201,167,0.07) 0%, transparent 55%), radial-gradient(ellipse 45% 45% at 12% 78%, rgba(245,166,35,0.05) 0%, transparent 55%)' }} />
        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', backgroundImage: 'linear-gradient(rgba(0,201,167,0.025) 1px,transparent 1px),linear-gradient(90deg,rgba(0,201,167,0.025) 1px,transparent 1px)', backgroundSize: '56px 56px' }} />
        <div style={{ position: 'absolute', top: '12%', right: '7%', width: 280, height: 280, borderRadius: '50%', background: 'radial-gradient(circle,rgba(0,201,167,0.07) 0%,transparent 68%)', animation: 'orb 5s ease-in-out infinite alternate', pointerEvents: 'none' }} />

        <div className="wrap" style={{ width: '100%' }}>
          <div style={{ maxWidth: 740 }}>
            <div className="afu" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(0,201,167,0.07)', border: '1px solid rgba(0,201,167,0.18)', borderRadius: 100, padding: '5px 15px', marginBottom: 26 }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#00c9a7', display: 'block', animation: 'orb 2s infinite' }} />
              <span style={{ fontFamily: "'DM Mono',monospace", fontSize: 10.5, letterSpacing: '0.18em', color: '#00c9a7', textTransform: 'uppercase' }}>SLIIT Research Project · 2025</span>
            </div>

            <h1 className="afu-1" style={{ fontSize: 'clamp(40px,6.5vw,72px)', fontWeight: 900, color: '#e4ecf7', marginBottom: 22, letterSpacing: '-0.025em' }}>
              Smart Tourism<br />
              <span style={{ background: 'linear-gradient(120deg,#00c9a7 0%,#f5a623 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Companion</span> for<br />
              Sri Lanka
            </h1>

            <p className="afu-2" style={{ fontSize: 17, color: '#7a93b0', maxWidth: 560, lineHeight: 1.75, marginBottom: 38 }}>
              An AI-powered ecosystem combining context-aware itinerary planning, predictive safety management, cultural marketplace, and markerless AR heritage discovery.
            </p>

            <div className="afu-3" style={{ display: 'flex', gap: 13, flexWrap: 'wrap' }}>
              <Link href="/domain" className="btn btn-primary">Explore Research ↗</Link>
              <Link href="/about"  className="btn btn-ghost">Meet the Team</Link>
            </div>

            <div className="afu-4" style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginTop: 52 }}>
              {['MOGA Optimization','Neo4j Knowledge Graph','Visual Positioning System','WebXR / VR','LLM Narrative Engine','Offline-First'].map(t => (
                <span key={t} style={{ padding: '4px 11px', borderRadius: 6, fontSize: 11.5, background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.06)', color: '#415266', fontFamily: "'DM Mono',monospace" }}>{t}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <div style={{ padding: '0 24px', marginTop: -20 }}>
        <div className="wrap">
          <div style={{ background: 'rgba(22,32,50,0.7)', border: '1px solid rgba(0,201,167,0.11)', borderRadius: 18, padding: '28px 36px', backdropFilter: 'blur(12px)', display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 20 }}>
            {stats.map((s, i) => (
              <div key={i} style={{ textAlign: 'center' }}>
                <div style={{ fontFamily: "'Playfair Display',serif", fontSize: 34, fontWeight: 700, color: i % 2 === 0 ? '#00c9a7' : '#f5a623', lineHeight: 1, marginBottom: 5 }}>{s.val}</div>
                <div style={{ fontSize: 12.5, fontWeight: 600, color: '#e4ecf7', marginBottom: 1 }}>{s.lbl}</div>
                <div style={{ fontSize: 10.5, color: '#415266', fontFamily: "'DM Mono',monospace" }}>{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
        <style>{`@media(max-width:580px){div[style*="repeat(4,1fr)"]{grid-template-columns:repeat(2,1fr)!important}}`}</style>
      </div>

      {/* ── MODULES ── */}
      <section style={{ padding: '88px 24px' }}>
        <div className="wrap">
          <div style={{ marginBottom: 48 }}>
            <div className="eyebrow">Core Modules</div>
            <h2 style={{ fontSize: 'clamp(26px,3.5vw,40px)', color: '#e4ecf7', maxWidth: 460 }}>Four Intelligent Pillars</h2>
          </div>
          <div className="g2">
            {modules.map((m, i) => (
              <div key={i} className="card" style={{ position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: `linear-gradient(90deg,${m.accent},transparent)` }} />
                <div style={{ width: 50, height: 50, borderRadius: 13, background: `rgba(${m.rgb},0.09)`, border: `1px solid rgba(${m.rgb},0.2)`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22, marginBottom: 18 }}>{m.icon}</div>
                <h3 style={{ fontSize: 17, color: '#e4ecf7', marginBottom: 9 }}>{m.title}</h3>
                <p style={{ fontSize: 13.5, color: '#7a93b0', lineHeight: 1.65 }}>{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABSTRACT ── */}
      <section style={{ padding: '0 24px 88px' }}>
        <div className="wrap">
          <div style={{ background: 'linear-gradient(135deg,rgba(0,201,167,0.05),rgba(245,166,35,0.03))', border: '1px solid rgba(0,201,167,0.13)', borderRadius: 20, padding: '48px 56px', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: -50, right: -50, width: 200, height: 200, borderRadius: '50%', background: 'radial-gradient(circle,rgba(0,201,167,0.07) 0%,transparent 70%)' }} />
            <div className="eyebrow" style={{ marginBottom: 18 }}>Abstract</div>
            <p style={{ fontSize: 15.5, color: '#8faabf', lineHeight: 1.82, maxWidth: 780, fontStyle: 'italic' }}>
              "We present an AI Travel Agent ecosystem which consists of four innovative modules: context-aware dynamic itinerary planning, intelligent safety management, community cultural experience marketplace, and spatio-semantic AR discovery. The planner uses Hybrid Filtering and Multi-Objective Genetic Algorithms to optimize itineraries according to current weather and user fatigue."
            </p>
            <div style={{ marginTop: 28, display: 'flex', gap: 10, flexWrap: 'wrap' }}>
              <span className="tag tag-teal">ICARC 2026 Conference</span>
              <span className="tag tag-amber">IEEE Published</span>
              <span className="tag" style={{ background: 'rgba(124,107,255,0.1)', color: '#7c6bff', border: '1px solid rgba(124,107,255,0.2)' }}>SLIIT IT Faculty</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ padding: '0 24px 88px', textAlign: 'center' }}>
        <div className="wrap">
          <h2 style={{ fontSize: 'clamp(22px,3vw,34px)', color: '#e4ecf7', marginBottom: 14 }}>Explore the Full Research</h2>
          <p style={{ color: '#415266', marginBottom: 28, fontSize: 14.5 }}>Dive into our domain analysis, methodology, results and team</p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/domain"    className="btn btn-primary">View Domain ↗</Link>
            <Link href="/documents" className="btn btn-ghost">Download Docs</Link>
          </div>
        </div>
      </section>
    </>
  );
}