'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { href: '/',              label: 'Home' },
  { href: '/domain',        label: 'Domain' },
  { href: '/milestones',    label: 'Milestones' },
  { href: '/documents',     label: 'Documents' },
  { href: '/presentations', label: 'Slides' },
  { href: '/about',         label: 'About Us' },
  { href: '/contact',       label: 'Contact' },
];

export default function Nav() {
  const path = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 36);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 200,
        background: scrolled ? 'rgba(8,13,26,0.94)' : 'transparent',
        backdropFilter: scrolled ? 'blur(18px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(0,201,167,0.09)' : '1px solid transparent',
        transition: 'all 0.3s', padding: '0 24px',
      }}>
        <div style={{ maxWidth: 1120, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 66 }}>

          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 9, textDecoration: 'none' }}>
            <div style={{ width: 34, height: 34, borderRadius: 9, background: 'linear-gradient(135deg,#00c9a7,#009e84)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 17 }}>🌿</div>
            <span style={{ fontFamily: "'Playfair Display',serif", fontWeight: 700, fontSize: 19, color: '#e4ecf7' }}>
              Ceylon<span style={{ color: '#00c9a7' }}>Mate</span>
            </span>
          </Link>

          <div style={{ display: 'flex', gap: 2 }} className="desk-nav">
            {links.map(l => {
              const active = path === l.href;
              return (
                <Link key={l.href} href={l.href} style={{
                  padding: '6px 13px', borderRadius: 8, fontSize: 13.5,
                  fontWeight: active ? 600 : 400,
                  color: active ? '#00c9a7' : '#7a93b0',
                  background: active ? 'rgba(0,201,167,0.08)' : 'transparent',
                  textDecoration: 'none', transition: 'all 0.18s',
                }}
                onMouseEnter={e => { if (!active) (e.currentTarget as HTMLElement).style.color = '#e4ecf7'; }}
                onMouseLeave={e => { if (!active) (e.currentTarget as HTMLElement).style.color = '#7a93b0'; }}
                >{l.label}</Link>
              );
            })}
          </div>

          <button onClick={() => setOpen(!open)} className="ham" style={{ display: 'none', background: 'none', border: 'none', cursor: 'pointer', color: '#e4ecf7', padding: 6 }}>
            <svg width="22" height="22" viewBox="0 0 22 22">
              {open
                ? <path d="M4 4L18 18M18 4L4 18" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/>
                : <><line x1="3" y1="6"  x2="19" y2="6"  stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/>
                    <line x1="3" y1="11" x2="19" y2="11" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/>
                    <line x1="3" y1="16" x2="19" y2="16" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/></>
              }
            </svg>
          </button>
        </div>

        {open && (
          <div style={{ background: 'rgba(8,13,26,0.98)', borderTop: '1px solid rgba(0,201,167,0.08)', padding: '12px 24px 20px' }}>
            {links.map(l => (
              <Link key={l.href} href={l.href} onClick={() => setOpen(false)} style={{
                display: 'block', padding: '11px 0',
                borderBottom: '1px solid rgba(255,255,255,0.04)',
                color: path === l.href ? '#00c9a7' : '#7a93b0',
                fontWeight: path === l.href ? 600 : 400,
                fontSize: 15, textDecoration: 'none',
              }}>{l.label}</Link>
            ))}
          </div>
        )}
      </nav>
      <style>{`@media(max-width:720px){.desk-nav{display:none!important}.ham{display:block!important}}`}</style>
    </>
  );
}