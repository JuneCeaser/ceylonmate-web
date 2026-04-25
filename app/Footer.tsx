'use client';
import Link from 'next/link';

const col1 = [['/', 'Home'],['/domain','Domain'],['/milestones','Milestones'],['/documents','Documents']];
const col2 = [['/presentations','Slides'],['/about','About Us'],['/contact','Contact']];

export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid rgba(0,201,167,0.09)', padding: '48px 24px 28px' }}>
      <div className="wrap">
        <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 32, marginBottom: 36 }}>

          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
              <div style={{ width: 30, height: 30, borderRadius: 8, background: 'linear-gradient(135deg,#00c9a7,#009e84)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 15 }}>🌿</div>
              <span style={{ fontFamily: "'Playfair Display',serif", fontWeight: 700, fontSize: 17, color: '#e4ecf7' }}>
                Ceylon<span style={{ color: '#00c9a7' }}>Mate</span>
              </span>
            </div>
            <p style={{ color: '#415266', fontSize: 12.5, maxWidth: 240, lineHeight: 1.6 }}>
              Smart Tourism Companion for Foreign Travelers in Sri Lanka
            </p>
          </div>

          <div style={{ display: 'flex', gap: 48, flexWrap: 'wrap' }}>
            {[['Pages', col1], ['Team', col2]].map(([heading, items]) => (
              <div key={heading as string}>
                <p style={{ fontFamily: "'DM Mono',monospace", fontSize: 10, letterSpacing: '0.15em', color: '#00c9a7', textTransform: 'uppercase', marginBottom: 12 }}>{heading as string}</p>
                {(items as string[][]).map(([href, label]) => (
                  <Link key={href} href={href} style={{ display: 'block', color: '#415266', fontSize: 13, marginBottom: 7, textDecoration: 'none' }}
                    onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = '#e4ecf7'}
                    onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = '#415266'}
                  >{label}</Link>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.04)', paddingTop: 20, display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 8 }}>
          <p style={{ color: '#283545', fontSize: 12 }}>© 2025 CeylonMate Research Group · SLIIT, Department of Information Technology</p>
          <p style={{ color: '#283545', fontSize: 12, fontFamily: "'DM Mono',monospace" }}>ICARC 2026 · IEEE Published</p>
        </div>
      </div>
    </footer>
  );
}