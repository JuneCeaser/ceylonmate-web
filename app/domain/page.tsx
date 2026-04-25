'use client';

const lit = [
  { n: '01', module: 'Dynamic Itinerary Planning', points: ['The Tourist Trip Design Problem (TTDP) evolved from static shortest-path models to Context-Aware Recommender Systems (CARS).', 'Multi-Objective Genetic Algorithms (MOGA) improve upon standard GAs by addressing real-time adaptability limitations.', 'Deep learning captures complex user preferences while filtering transient factors such as weather and crowd density.'] },
  { n: '02', module: 'Intelligent Safety Management', points: ['Most existing tourist safety frameworks are reactive, focusing on post-incident response rather than prevention.', 'IMU-based fall detection identifies kinematic signatures: free-fall phase followed by high-impact acceleration.', 'Offline-first architectures ensure reliability in remote areas with limited connectivity.'] },
  { n: '03', module: 'Cultural Experience Marketplace', points: ['Trust in P2P tourism ecosystems depends on reputation mechanisms, identity verification, and transparency.', '360° VR previews reduce booking hesitation by addressing experience intangibility for rural tourism.', 'Automated media curation lowers content creation effort, transforming tourists into digital ambassadors.'] },
  { n: '04', module: 'Spatio-Semantic AR Discovery', points: ['Heritage tourism suffers from an interpretation gap — physical ruins alone fail to convey historical significance.', 'Visual Positioning Systems (VPS) achieve centimeter-level accuracy, surpassing GPS limitations for AR anchoring.', 'Knowledge Graphs enable narrative-driven interpretation rather than presenting isolated historical facts.'] },
];

const objectives = [
  'Develop a context-aware dynamic itinerary planning module using Multi-Objective Genetic Algorithms that adapt in real-time to weather, fatigue, and user preferences.',
  'Design an intelligent tourist safety system with Spatio-Temporal Risk Analysis and offline-first kinematic anomaly detection for emergency response.',
  'Build a Community Cultural Experience Marketplace with 360° VR previews and automated AI content generation to empower rural communities.',
  'Implement a Spatio-Semantic AR Discovery Engine using Visual Positioning System and Knowledge Graphs for immersive heritage site reconstruction.',
];

const techStack = [
  { cat: 'Core Algorithm',    items: ['Multi-Objective Genetic Algorithm (MOGA)', 'Hybrid Collaborative Filtering', 'Spatio-Temporal Risk Analysis'] },
  { cat: 'AR & Spatial',      items: ['Google Geospatial Creator API', 'Visual Positioning System (VPS)', 'ARCore / WebXR', 'Blender GLB Models'] },
  { cat: 'AI & ML',           items: ['LLM Narrative Generator', 'Computer Vision (Image Curation)', 'Kinematic Anomaly Detector', 'Neo4j Knowledge Graph'] },
  { cat: 'External APIs',     items: ['OpenWeatherMap API', 'Google Maps Traffic API', 'GDELT News Feeds', 'Social Media Connect API'] },
  { cat: 'Frontend & Mobile', items: ['React Native (Mobile App)', 'Next.js (Web Platform)', 'WebXR Player', 'Equirectangular VR Stitching'] },
  { cat: 'Infrastructure',    items: ['Offline-First Architecture', 'Adaptive Bitrate Streaming', 'Cloud Asset Repository', 'SMS Fallback Protocol'] },
];

const methodology = [
  { icon: '🗺️', title: 'Itinerary Planning Module',    steps: ['User onboarding: travel style, budget, physical condition', 'Tourism Knowledge Graph with enriched semantic metadata', 'MOGA: maximize interest, minimize time/cost, manage fatigue', 'Real-time re-planning on weather or traffic changes (avg 4.2s)'] },
  { icon: '🛡️', title: 'Safety & Risk Management',     steps: ['Multimodal fusion: news feeds, social media, weather APIs', 'ML risk model detects protests, flooding, crowd surges', 'Predictive geofencing with proximity push notifications', 'Offline-first SMS fallback — 90% reliability tested in Knuckles Range'] },
  { icon: '🌏', title: 'Cultural Marketplace',          steps: ['Villagers upload raw 360° video of cultural environments', 'Equirectangular stitching + adaptive bitrate streaming', 'WebXR player renders immersive VR preview on-device', 'AI Moments Engine: image curation → LLM captions → social card'] },
  { icon: '🏛️', title: 'AR Discovery Engine',           steps: ['Neo4j KG: kings, temples, dynasties, semantic relationships', 'Google Geospatial Creator API for markerless VPS anchoring', 'Pre-built GLB models (Blender) overlaid via smartphone camera', 'Environmental Realism Engine: light estimation + occlusion handling'] },
];

export default function DomainPage() {
  return (
    <>
      <section className="page-top">
        <div className="wrap">
          <div className="eyebrow">Domain</div>
          <h1 style={{ fontSize: 'clamp(34px,5vw,58px)', fontWeight: 900, color: '#e4ecf7', marginBottom: 18, letterSpacing: '-0.022em', maxWidth: 680 }}>Research Domain &amp; Background</h1>
          <p style={{ fontSize: 16.5, color: '#7a93b0', maxWidth: 600, lineHeight: 1.72 }}>Literature survey, identified research gap, problem statement, objectives, methodology, and the full technology stack behind CeylonMate.</p>
        </div>
      </section>

      {/* Literature Survey */}
      <section style={{ padding: '0 24px 72px' }}>
        <div className="wrap">
          <div className="eyebrow">Literature Survey</div>
          <h2 style={{ fontSize: 28, color: '#e4ecf7', marginBottom: 36 }}>What the Research Says</h2>
          <div className="g2">
            {lit.map((a, i) => (
              <div key={i} className="card">
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
                  <span style={{ width: 26, height: 26, borderRadius: 7, background: 'rgba(0,201,167,0.1)', border: '1px solid rgba(0,201,167,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11.5, fontFamily: "'DM Mono',monospace", color: '#00c9a7', fontWeight: 600, flexShrink: 0 }}>{a.n}</span>
                  <h3 style={{ fontSize: 14.5, fontWeight: 600, color: '#e4ecf7', fontFamily: "'DM Sans',sans-serif" }}>{a.module}</h3>
                </div>
                <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 9 }}>
                  {a.points.map((p, j) => (
                    <li key={j} style={{ display: 'flex', gap: 9, fontSize: 13, color: '#7a93b0', lineHeight: 1.62 }}>
                      <span style={{ color: '#00c9a7', marginTop: 1, flexShrink: 0 }}>›</span>{p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="hr" style={{ margin: '0 auto 72px', maxWidth: 1120 }} />

      {/* Research Gap */}
      <section style={{ padding: '0 24px 72px' }}>
        <div className="wrap">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40, alignItems: 'start' }}>
            <div>
              <div className="eyebrow">Research Gap</div>
              <h2 style={{ fontSize: 'clamp(22px,2.8vw,34px)', color: '#e4ecf7', marginBottom: 20 }}>Where Existing Solutions Fall Short</h2>
              <p style={{ color: '#7a93b0', lineHeight: 1.78, marginBottom: 16 }}>Existing digital solutions fall short of end-to-end offerings, often existing as siloed services that fail to form a unified ecosystem, missing integrated, context-aware intelligence.</p>
              <p style={{ color: '#7a93b0', lineHeight: 1.78 }}>Sri Lanka's tourism sector continues to struggle with information asymmetry and safety concerns, requiring more engaging and proactive digital tools than currently available.</p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 13 }}>
              {[['Static Itinerary Planning','Existing apps use simple A-to-B routing with no real-time context adaptation or fatigue awareness.'],['Reactive Safety Mechanisms','Current safety tools only respond after incidents — no predictive geofencing or offline fallback.'],['Rural Community Exclusion','P2P platforms lack trust systems and suffer from intangibility barriers for rural experiences.'],['Shallow Heritage Engagement','Marker-based AR and audio guides fail to convey historical significance or semantic relationships.']].map(([title, desc], i) => (
                <div key={i} style={{ background: 'rgba(245,166,35,0.04)', border: '1px solid rgba(245,166,35,0.11)', borderRadius: 11, padding: '15px 18px', display: 'flex', gap: 12 }}>
                  <span style={{ color: '#f5a623', fontSize: 16, marginTop: 1 }}>✗</span>
                  <div>
                    <div style={{ fontSize: 13.5, fontWeight: 600, color: '#e4ecf7', marginBottom: 3 }}>{title}</div>
                    <div style={{ fontSize: 12.5, color: '#7a93b0' }}>{desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <style>{`@media(max-width:720px){div[style*="1fr 1fr"]{grid-template-columns:1fr!important}}`}</style>
        </div>
      </section>

      <div className="hr" style={{ margin: '0 auto 72px', maxWidth: 1120 }} />

      {/* Research Problem */}
      <section style={{ padding: '0 24px 72px' }}>
        <div className="wrap">
          <div className="eyebrow">Research Problem</div>
          <div style={{ background: 'linear-gradient(135deg,rgba(0,201,167,0.05),rgba(124,107,255,0.03))', border: '1px solid rgba(0,201,167,0.13)', borderRadius: 18, padding: '36px 44px' }}>
            <h2 style={{ fontSize: 20, color: '#e4ecf7', marginBottom: 16, lineHeight: 1.5 }}>How can a unified, intelligent tourism ecosystem be designed to simultaneously address personalization, preventive safety, cultural engagement, and immersive heritage discovery for foreign travelers in Sri Lanka?</h2>
            <p style={{ color: '#7a93b0', fontSize: 14.5, lineHeight: 1.75 }}>This research investigates the design and implementation of a Context-Aware Smart Tourism Ecosystem that bridges the gap between isolated travel tools and an integrated AI-driven platform tailored to Sri Lanka's unique cultural and geographic landscape.</p>
          </div>
        </div>
      </section>

      <div className="hr" style={{ margin: '0 auto 72px', maxWidth: 1120 }} />

      {/* Objectives */}
      <section style={{ padding: '0 24px 72px' }}>
        <div className="wrap">
          <div className="eyebrow">Research Objectives</div>
          <h2 style={{ fontSize: 28, color: '#e4ecf7', marginBottom: 32 }}>What We Set Out to Achieve</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            {objectives.map((obj, i) => (
              <div key={i} style={{ display: 'flex', gap: 18, alignItems: 'flex-start', background: 'var(--navy-light)', border: '1px solid var(--border)', borderRadius: 13, padding: '20px 24px' }}>
                <span style={{ minWidth: 30, height: 30, borderRadius: 9, background: 'rgba(0,201,167,0.1)', border: '1px solid rgba(0,201,167,0.22)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'DM Mono',monospace", fontSize: 11, color: '#00c9a7', fontWeight: 600, flexShrink: 0 }}>O{i + 1}</span>
                <p style={{ fontSize: 14.5, color: '#96b0c8', lineHeight: 1.72, margin: 0 }}>{obj}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="hr" style={{ margin: '0 auto 72px', maxWidth: 1120 }} />

      {/* Methodology */}
      <section style={{ padding: '0 24px 72px' }}>
        <div className="wrap">
          <div className="eyebrow">Methodology</div>
          <h2 style={{ fontSize: 28, color: '#e4ecf7', marginBottom: 12 }}>System Architecture &amp; Approach</h2>
          <p style={{ color: '#7a93b0', marginBottom: 36, maxWidth: 580, fontSize: 14 }}>Integrated approach based on four intelligent modules, each addressing a distinct dimension of the smart tourism experience.</p>
          <div className="g2">
            {methodology.map((m, i) => (
              <div key={i} className="card">
                <div style={{ display: 'flex', gap: 10, alignItems: 'center', marginBottom: 16 }}>
                  <span style={{ fontSize: 20 }}>{m.icon}</span>
                  <h3 style={{ fontSize: 15, fontWeight: 700, color: '#e4ecf7' }}>{m.title}</h3>
                </div>
                <ol style={{ paddingLeft: 17, display: 'flex', flexDirection: 'column', gap: 7 }}>
                  {m.steps.map((s, j) => <li key={j} style={{ fontSize: 13, color: '#7a93b0', lineHeight: 1.6 }}>{s}</li>)}
                </ol>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="hr" style={{ margin: '0 auto 72px', maxWidth: 1120 }} />

      {/* Technologies */}
      <section style={{ padding: '0 24px 88px' }}>
        <div className="wrap">
          <div className="eyebrow">Technologies Used</div>
          <h2 style={{ fontSize: 28, color: '#e4ecf7', marginBottom: 32 }}>Tech Stack &amp; Tools</h2>
          <div className="g3">
            {techStack.map((t, i) => (
              <div key={i} className="card" style={{ padding: '22px 24px' }}>
                <div style={{ fontFamily: "'DM Mono',monospace", fontSize: 10, color: '#00c9a7', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 14 }}>{t.cat}</div>
                {t.items.map((item, j) => (
                  <div key={j} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, color: '#96b0c8', marginBottom: 8 }}>
                    <span style={{ width: 4, height: 4, borderRadius: '50%', background: '#00c9a7', flexShrink: 0 }} />{item}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}