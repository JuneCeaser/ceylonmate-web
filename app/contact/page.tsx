'use client';
import { useState } from 'react';

const teamEmails = [
  { name: 'J C De Soysa', email: 'jcdsoysa@gmail.com' },
  { name: 'K K T Thathsarani', email: 'tharushikk9@gmail.com' },
  { name: 'J W P D Pathiraja', email: 'dinushipathiraja1@gmail.com' },
  { name: 'M R K A Moragaspitiya', email: 'kanjalimoragaspitiya0925@gmail.com' },
];

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [f, setF] = useState({ name: '', email: '', subject: '', message: '' });

  const inp: React.CSSProperties = { 
    width: '100%', 
    background: 'rgba(255,255,255,0.025)', 
    border: '1px solid rgba(0,201,167,0.14)', 
    borderRadius: 10, 
    padding: '11px 14px', 
    color: '#e4ecf7', 
    fontSize: 13.5, 
    fontFamily: "'DM Sans',sans-serif", 
    outline: 'none', 
    transition: 'border-color 0.2s', 
    boxSizing: 'border-box' 
  };
  
  const lbl: React.CSSProperties = { 
    display: 'block', 
    fontSize: 10, 
    fontFamily: "'DM Mono',monospace", 
    color: '#415266', 
    letterSpacing: '0.12em', 
    textTransform: 'uppercase', 
    marginBottom: 7 
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("https://formspree.io/f/xwpkyglv", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(f),
      });

      if (response.ok) {
        setSent(true);
        setF({ name: '', email: '', subject: '', message: '' });
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      alert("Error sending message. Check your connection.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section className="page-top">
        <div className="wrap">
          <div className="eyebrow">Contact</div>
          <h1 style={{ fontSize: 'clamp(34px,5vw,58px)', fontWeight: 900, color: '#e4ecf7', marginBottom: 18, letterSpacing: '-0.022em' }}>Get In Touch</h1>
          <p style={{ fontSize: 16.5, color: '#7a93b0', maxWidth: 480, lineHeight: 1.72 }}>Reach out with questions, collaboration ideas, or feedback about CeylonMate.</p>
        </div>
      </section>

      <section style={{ padding: '0 24px 96px' }}>
        <div className="wrap" style={{ display: 'grid', gridTemplateColumns: '1fr 1.55fr', gap: 44, alignItems: 'start' }}>

          {/* Info column */}
          <div>
            <h2 style={{ fontSize: 20, color: '#e4ecf7', marginBottom: 22, fontFamily: "'Playfair Display',serif" }}>Contact Details</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 28 }}>
              {[
                { icon: '🏫', lbl: 'Institution', val: 'SLIIT – Sri Lanka Institute of Information Technology' },
                { icon: '📍', lbl: 'Location',    val: 'New Kandy Road, Malabe, Western Province, Sri Lanka' },
                { icon: '🌐', lbl: 'Website',     val: 'www.sliit.lk' },
              ].map((c, i) => (
                <div key={i} style={{ display: 'flex', gap: 13, background: 'var(--navy-light)', border: '1px solid var(--border)', borderRadius: 11, padding: '14px 16px' }}>
                  <span style={{ fontSize: 18, flexShrink: 0 }}>{c.icon}</span>
                  <div>
                    <div style={{ fontSize: 9.5, fontFamily: "'DM Mono',monospace", color: '#415266', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 2 }}>{c.lbl}</div>
                    <div style={{ fontSize: 12.5, color: '#96b0c8' }}>{c.val}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="hr" style={{ margin: '0 0 22px' }} />

            <div className="eyebrow" style={{ marginBottom: 14 }}>Team Emails</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {teamEmails.map((m, i) => (
                <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12, flexWrap: 'wrap' }}>
                  <span style={{ fontSize: 13, color: '#7a93b0' }}>{m.name}</span>
                  <a href={`mailto:${m.email}`} style={{ fontSize: 11.5, color: '#415266', fontFamily: "'DM Mono',monospace", textDecoration: 'none' }}
                    onMouseEnter={e => (e.currentTarget as HTMLElement).style.color='#00c9a7'}
                    onMouseLeave={e => (e.currentTarget as HTMLElement).style.color='#415266'}
                  >{m.email}</a>
                </div>
              ))}
            </div>
          </div>

          {/* Form column */}
          <div style={{ background: 'var(--navy-light)', border: '1px solid var(--border)', borderRadius: 18, padding: '36px' }}>
            {sent ? (
              <div style={{ textAlign: 'center', padding: '36px 16px' }}>
                <div style={{ fontSize: 44, marginBottom: 16 }}>✅</div>
                <h3 style={{ fontSize: 20, color: '#e4ecf7', marginBottom: 8 }}>Message Sent!</h3>
                <p style={{ color: '#7a93b0', fontSize: 14, marginBottom: 22 }}>Thank you for reaching out. We&apos;ll get back to you soon.</p>
                <button onClick={() => setSent(false)} className="btn btn-ghost" style={{ cursor: 'pointer' }}>Send Another</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <h3 style={{ fontSize: 19, color: '#e4ecf7', marginBottom: 24, fontFamily: "'Playfair Display',serif" }}>Send a Message</h3>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }}>
                  <div>
                    <label style={lbl}>Your Name</label>
                    <input name="name" type="text" required placeholder="Full Name" value={f.name} onChange={e => setF({...f,name:e.target.value})} style={inp}
                      onFocus={e => (e.target as HTMLElement).style.borderColor='rgba(0,201,167,0.4)'}
                      onBlur={e  => (e.target as HTMLElement).style.borderColor='rgba(0,201,167,0.14)'} />
                  </div>
                  <div>
                    <label style={lbl}>Email</label>
                    <input name="email" type="email" required placeholder="your@email.com" value={f.email} onChange={e => setF({...f,email:e.target.value})} style={inp}
                      onFocus={e => (e.target as HTMLElement).style.borderColor='rgba(0,201,167,0.4)'}
                      onBlur={e  => (e.target as HTMLElement).style.borderColor='rgba(0,201,167,0.14)'} />
                  </div>
                </div>

                <div style={{ marginBottom: 16 }}>
                  <label style={lbl}>Subject</label>
                  <select name="subject" required value={f.subject} onChange={e => setF({...f,subject:e.target.value})} style={{ ...inp, cursor: 'pointer' }}>
                    <option value="">Select a subject</option>
                    <option value="general">General Enquiry</option>
                    <option value="collab">Research Collaboration</option>
                    <option value="feedback">Project Feedback</option>
                    <option value="media">Media / Press</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div style={{ marginBottom: 24 }}>
                  <label style={lbl}>Message</label>
                  <textarea name="message" required rows={5} placeholder="Your message…" value={f.message} onChange={e => setF({...f,message:e.target.value})} style={{ ...inp, resize: 'vertical', minHeight: 110 }}
                    onFocus={e => (e.target as HTMLElement).style.borderColor='rgba(0,201,167,0.4)'}
                    onBlur={e  => (e.target as HTMLElement).style.borderColor='rgba(0,201,167,0.14)'} />
                </div>

                <button type="submit" disabled={loading} className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', opacity: loading ? 0.7 : 1 }}>
                  {loading ? 'Sending...' : 'Send Message →'}
                </button>
              </form>
            )}
          </div>
        </div>
        <style>{`@media(max-width:720px){div[style*="1.55fr"]{grid-template-columns:1fr!important}}`}</style>
      </section>
    </>
  );
}