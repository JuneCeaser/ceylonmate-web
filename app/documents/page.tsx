'use client';

const docs = [
  {
    cat: 'Project Charter', icon: '📋', rgb: '0,201,167',
    files: [
      { title: 'Project Charter', type: 'PDF', size: '', date: 'March 2024', status: 'available', href: '/docs/project-charter.pdf', external: false },
    ],
  },
  {
    cat: 'Proposal Document', icon: '📄', rgb: '124,107,255',
    files: [
      { title: 'Project Proposal Document', type: 'PDF', size: '', date: 'March 2024', status: 'available', href: 'https://mysliit.sharepoint.com/:f:/s/CDAPSubmissionCloud/IgCwZs4toOq6RZwfZIZvUmxzAWFdLONWUzUlnf9bt2OAgnk?e=m109w2', external: true },
    ],
  },
  {
    cat: 'Check List Documents', icon: '✅', rgb: '245,166,35',
    files: [
      { title: 'CheckList Set 1 — Proposal', type: 'Folder', size: '', date: 'March 2024',     status: 'available', href: 'https://mysliit.sharepoint.com/:f:/s/CDAPSubmissionCloud/IgBzvaTZx6eDR7TLUgdgrbTUAeD5UxGXfTYf12c7p5pThws?e=zhCcXa', external: true },
      { title: 'CheckList Set 2 — PP1',      type: 'Folder', size: '', date: 'June 2024',      status: 'available', href: 'https://mysliit.sharepoint.com/:f:/s/CDAPSubmissionCloud/IgBZtJrDL7gVTaeSYJmNfuTLASNf7TYLWBS7sA3-4c_PgMI?e=MYCfSB', external: true },
    ],
  },
  {
    cat: 'Research Paper', icon: '🔬', rgb: '255,107,157',
    files: [
      { title: 'CeylonMate — IEEE ICARC 2026', type: 'PDF', size: '', date: 'January 2026', status: 'published', href: '/docs/research-paper.pdf', external: false, badge: 'IEEE Published' },
    ],
  },
];

function getBadge(status: string, b?: string) {
  if (b)                      return { text: b,           bg: 'rgba(245,166,35,0.1)',   color: '#f5a623' };
  if (status === 'available') return { text: 'Available', bg: 'rgba(0,201,167,0.1)',    color: '#00c9a7' };
  return                             { text: 'Pending',   bg: 'rgba(90,106,128,0.12)', color: '#5a6a80' };
}

export default function DocumentsPage() {
  return (
    <>
      <section className="page-top">
        <div className="wrap">
          <div className="eyebrow">Documents</div>
          <h1 style={{ fontSize: 'clamp(34px,5vw,58px)', fontWeight: 900, color: '#e4ecf7', marginBottom: 18, letterSpacing: '-0.022em' }}>
            Project Documents
          </h1>
          <p style={{ fontSize: 16.5, color: '#7a93b0', maxWidth: 500, lineHeight: 1.72 }}>
            All deliverables and documentation produced throughout the CeylonMate research project.
          </p>
        </div>
      </section>

      <section style={{ padding: '0 24px 96px' }}>
        <div className="wrap" style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
          {docs.map((cat, i) => (
            <div key={i}>
              {/* Category header */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
                <div style={{ width: 34, height: 34, borderRadius: 9, background: `rgba(${cat.rgb},0.1)`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 17 }}>
                  {cat.icon}
                </div>
                <h2 style={{ fontSize: 17, fontWeight: 700, color: '#e4ecf7', fontFamily: "'Playfair Display',serif" }}>{cat.cat}</h2>
                <span style={{ fontSize: 11, color: '#415266', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 100, padding: '2px 10px' }}>
                  {cat.files.length} {cat.files.length === 1 ? 'file' : 'files'}
                </span>
              </div>

              {/* File rows */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 9 }}>
                {cat.files.map((f, j) => {
                  const b = getBadge(f.status, (f as any).badge);
                  return (
                    <div key={j}
                      style={{ background: 'var(--navy-light)', border: '1px solid var(--border)', borderRadius: 11, padding: '15px 20px', display: 'flex', alignItems: 'center', gap: 14, transition: 'border-color 0.25s, background 0.25s' }}
                      onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(0,201,167,0.28)'; (e.currentTarget as HTMLElement).style.background = 'rgba(0,201,167,0.025)'; }}
                      onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(0,201,167,0.14)'; (e.currentTarget as HTMLElement).style.background = 'var(--navy-light)'; }}
                    >
                      {/* Icon */}
                      <div style={{ width: 38, height: 38, borderRadius: 9, background: 'rgba(255,255,255,0.04)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18, flexShrink: 0 }}>
                        {f.type === 'Folder' ? '📁' : '📕'}
                      </div>

                      {/* Title + meta */}
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{ fontSize: 13.5, fontWeight: 500, color: '#e4ecf7', marginBottom: 2 }}>{f.title}</div>
                        <div style={{ fontSize: 11.5, color: '#415266', fontFamily: "'DM Mono',monospace", display: 'flex', alignItems: 'center', gap: 8 }}>
                          <span>{f.type}</span>
                          {f.size && <><span>·</span><span>{f.size}</span></>}
                          <span>·</span>
                          <span>{f.date}</span>
                          {f.external && (
                            <span style={{ padding: '1px 7px', borderRadius: 4, fontSize: 10, background: 'rgba(124,107,255,0.1)', color: '#7c6bff', border: '1px solid rgba(124,107,255,0.2)' }}>
                              SharePoint
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Status badge */}
                      <span style={{ padding: '3px 10px', borderRadius: 100, fontSize: 10.5, fontWeight: 600, background: b.bg, color: b.color, flexShrink: 0 }}>
                        {b.text}
                      </span>

                      {/* View button */}
                      <a
                        href={f.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ display: 'flex', alignItems: 'center', gap: 5, padding: '6px 14px', background: 'rgba(0,201,167,0.07)', border: '1px solid rgba(0,201,167,0.18)', borderRadius: 7, fontSize: 12, color: '#00c9a7', textDecoration: 'none', fontWeight: 600, flexShrink: 0, transition: 'background 0.2s' }}
                        onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = 'rgba(0,201,167,0.14)'}
                        onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = 'rgba(0,201,167,0.07)'}
                      >
                        {f.external ? '↗ Open' : '↓ View'}
                      </a>

                      {/* Download button — only for local files */}
                      {!f.external && (
                        <a
                          href={f.href}
                          download
                          style={{ display: 'flex', alignItems: 'center', gap: 5, padding: '6px 14px', background: 'rgba(245,166,35,0.07)', border: '1px solid rgba(245,166,35,0.18)', borderRadius: 7, fontSize: 12, color: '#f5a623', textDecoration: 'none', fontWeight: 600, flexShrink: 0, transition: 'background 0.2s' }}
                          onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = 'rgba(245,166,35,0.14)'}
                          onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = 'rgba(245,166,35,0.07)'}
                        >
                          ⬇ Save
                        </a>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}