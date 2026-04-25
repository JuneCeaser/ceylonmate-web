'use client';
import { useState } from 'react';

const milestones = [
  { id: 'proposal',  title: 'Project Proposal',            date: 'March 2024',    marks: '10%', status: 'completed', evaluator: 'Supervisor + Panel',         desc: 'Initial project proposal outlining the CeylonMate concept, research objectives, and technical approach for the Smart Tourism Companion system.', deliverables: ['Project Charter','Proposal Document','Literature Review Summary','Initial System Architecture'] },
  { id: 'pp1',       title: 'Progress Presentation I',     date: 'June 2024',     marks: '15%', status: 'completed', evaluator: 'Internal Panel',              desc: 'First progress review demonstrating research progress, preliminary literature findings, and proof-of-concept module implementations.', deliverables: ['PP1 Slides','Progress Report','Prototype Demos','Updated Architecture Diagram'] },
  { id: 'pp2',       title: 'Progress Presentation II',    date: 'September 2024',marks: '20%', status: 'completed', evaluator: 'External + Internal Panel',   desc: 'Second review showcasing all four developed modules with integration testing results, user evaluation data, and benchmark measurements.', deliverables: ['PP2 Slides','Integration Report','Testing Results','User Evaluation Summary'] },
  { id: 'paper',     title: 'Research Paper — ICARC 2026', date: 'January 2026',  marks: '—',   status: 'published', evaluator: 'IEEE Peer Reviewers',         desc: 'Full research paper published and presented at the 6th International Conference on Advanced Research in Computing (ICARC 2026), IEEE. DOI: 10.1109/ICARC68737.2026.11453921', deliverables: ['IEEE Published Paper','Conference Presentation'], highlight: true },
  { id: 'final',     title: 'Final Assessment',             date: 'November 2024', marks: '40%', status: 'completed', evaluator: 'External Examiner + Panel',  desc: 'Comprehensive final assessment of the complete CeylonMate ecosystem — all four modules, evaluation benchmarks, and complete documentation.', deliverables: ['Final Thesis Document','Complete System Demo','Full Evaluation Report','Source Code Repository'] },
  { id: 'viva',      title: 'Viva Voce',                   date: 'December 2024', marks: '15%', status: 'completed', evaluator: 'External Examiner',          desc: 'Oral defense demonstrating in-depth understanding of the CeylonMate system, research methodology, results, and implications.', deliverables: ['Defense Presentation','Live Q&A Session'] },
];

type M = typeof milestones[0] & { highlight?: boolean };

const sc: Record<string,{bg:string;color:string;label:string}> = {
  completed: { bg: 'rgba(0,201,167,0.1)',   color: '#00c9a7', label: 'Completed' },
  published: { bg: 'rgba(245,166,35,0.1)',  color: '#f5a623', label: 'Published' },
  pending:   { bg: 'rgba(90,106,128,0.14)', color: '#5a6a80', label: 'Upcoming'  },
};

export default function MilestonesPage() {
  const [open, setOpen] = useState<string|null>('proposal');

  return (
    <>
      <section className="page-top">
        <div className="wrap">
          <div className="eyebrow">Milestones</div>
          <h1 style={{ fontSize: 'clamp(34px,5vw,58px)', fontWeight: 900, color: '#e4ecf7', marginBottom: 18, letterSpacing: '-0.022em' }}>Project Milestones</h1>
          <p style={{ fontSize: 16.5, color: '#7a93b0', maxWidth: 520, lineHeight: 1.72 }}>All assessments, deliverables, and key achievements throughout the CeylonMate research journey.</p>
        </div>
      </section>

      <section style={{ padding: '0 24px 96px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>

          {/* Summary */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 16, marginBottom: 40 }}>
            {[{v:'6',l:'Assessments'},{v:'5',l:'Completed'},{v:'1',l:'IEEE Published'},{v:'100%',l:'Total Weight'}].map((s,i) => (
              <div key={i} className="card" style={{ textAlign: 'center', padding: '20px 16px' }}>
                <div style={{ fontFamily: "'Playfair Display',serif", fontSize: 30, fontWeight: 700, color: '#00c9a7', lineHeight: 1 }}>{s.v}</div>
                <div style={{ fontSize: 12, color: '#415266', marginTop: 5 }}>{s.l}</div>
              </div>
            ))}
            <style>{`@media(max-width:560px){div[style*="repeat(4,1fr)"]{grid-template-columns:repeat(2,1fr)!important}}`}</style>
          </div>

          {/* Dropdown */}
          <div style={{ marginBottom: 20 }}>
            <label style={{ fontFamily: "'DM Mono',monospace", fontSize: 10, letterSpacing: '0.15em', color: '#415266', display: 'block', marginBottom: 7, textTransform: 'uppercase' }}>Jump to milestone</label>
            <select value={open||''} onChange={e => setOpen(e.target.value)}
              style={{ background: 'var(--navy-light)', border: '1px solid var(--border)', borderRadius: 9, padding: '9px 14px', color: '#e4ecf7', fontSize: 13.5, fontFamily: "'DM Sans',sans-serif", cursor: 'pointer', outline: 'none', width: 300 }}>
              {milestones.map(m => <option key={m.id} value={m.id}>{m.title}</option>)}
            </select>
          </div>

          {/* Accordion */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {milestones.map((m: M) => {
              const isOpen = open === m.id;
              const s = sc[m.status] ?? sc.pending;
              return (
                <div key={m.id} style={{ background: m.highlight ? 'linear-gradient(135deg,rgba(245,166,35,0.05),rgba(8,13,26,1))' : 'var(--navy-light)', border: `1px solid ${isOpen ? 'rgba(0,201,167,0.28)' : m.highlight ? 'rgba(245,166,35,0.18)' : 'var(--border)'}`, borderRadius: 15, overflow: 'hidden', transition: 'border-color 0.28s' }}>

                  <button onClick={() => setOpen(isOpen ? null : m.id)}
                    style={{ width: '100%', display: 'flex', alignItems: 'center', gap: 14, padding: '18px 22px', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left' }}>
                    <span style={{ width: 30, height: 30, borderRadius: 9, flexShrink: 0, background: m.status==='completed'?'rgba(0,201,167,0.13)':m.status==='published'?'rgba(245,166,35,0.13)':'rgba(90,106,128,0.13)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily:"'DM Mono',monospace", fontSize: 12, color: m.status==='completed'?'#00c9a7':m.status==='published'?'#f5a623':'#5a6a80', fontWeight: 600 }}>
                      {m.status==='completed'?'✓':m.status==='published'?'★':'○'}
                    </span>
                    <div style={{ flex: 1 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 9, flexWrap: 'wrap' }}>
                        <span style={{ fontSize: 15, fontWeight: 600, color: '#e4ecf7' }}>{m.title}</span>
                        <span style={{ padding: '2px 9px', borderRadius: 100, fontSize: 10.5, fontWeight: 600, background: s.bg, color: s.color }}>{s.label}</span>
                        {m.marks !== '—' && <span style={{ padding: '2px 9px', borderRadius: 100, fontSize: 10.5, background: 'rgba(255,255,255,0.04)', color: '#415266' }}>{m.marks} weight</span>}
                      </div>
                      <div style={{ fontSize: 11.5, color: '#415266', marginTop: 2, fontFamily: "'DM Mono',monospace" }}>{m.date}</div>
                    </div>
                    <span style={{ color: '#415266', fontSize: 17, transition: 'transform 0.28s', transform: isOpen ? 'rotate(180deg)' : 'none', flexShrink: 0 }}>⌄</span>
                  </button>

                  {isOpen && (
                    <div style={{ padding: '0 22px 22px', borderTop: '1px solid rgba(255,255,255,0.04)', paddingTop: 18 }}>
                      <p style={{ fontSize: 13.5, color: '#7a93b0', lineHeight: 1.7, marginBottom: 18 }}>{m.desc}</p>
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18 }}>
                        <div>
                          <div style={{ fontFamily: "'DM Mono',monospace", fontSize: 10, color: '#00c9a7', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 10 }}>Deliverables</div>
                          {m.deliverables.map((d,j) => <div key={j} style={{ display: 'flex', gap: 7, fontSize: 12.5, color: '#96b0c8', marginBottom: 5 }}><span style={{ color: '#00c9a7' }}>›</span>{d}</div>)}
                        </div>
                        <div>
                          <div style={{ fontFamily: "'DM Mono',monospace", fontSize: 10, color: '#f5a623', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 10 }}>Details</div>
                          <div style={{ fontSize: 12.5, color: '#96b0c8', display: 'flex', flexDirection: 'column', gap: 5 }}>
                            <div><span style={{ color: '#415266' }}>Date: </span>{m.date}</div>
                            <div><span style={{ color: '#415266' }}>Weight: </span>{m.marks}</div>
                            <div><span style={{ color: '#415266' }}>Evaluator: </span>{m.evaluator}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}