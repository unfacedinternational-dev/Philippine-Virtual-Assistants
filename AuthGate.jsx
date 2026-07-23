import { useState } from 'react';
import { Mail, Loader2 } from 'lucide-react';
import { supabase } from '../lib/supabaseClient';

export default function AuthGate() {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState('');

  const sendLink = async () => {
    if (!email.trim()) return;
    setSending(true);
    setError('');
    const { error } = await supabase.auth.signInWithOtp({
      email: email.trim(),
      options: { emailRedirectTo: window.location.origin },
    });
    setSending(false);
    if (error) setError(error.message);
    else setSent(true);
  };

  return (
    <div className="overlay">
      <div className="modal" style={{ maxWidth: 380, textAlign: 'center' }}>
        <div className="brand-mark" style={{ margin: '0 auto 14px' }}>PVA</div>
        <h2 className="detail-title" style={{ marginTop: 0 }}>Sign in to continue</h2>
        {sent ? (
          <p className="detail-desc">
            Check <strong>{email}</strong> for a sign-in link. Open it on this device and you'll come right back here, signed in.
          </p>
        ) : (
          <>
            <p className="detail-desc">No password needed — we'll email you a one-tap sign-in link.</p>
            <div className="field" style={{ textAlign: 'left' }}>
              <label>Email</label>
              <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" type="email" />
              {error && <div style={{ color: '#B4523F', fontSize: 12.5, marginTop: 6 }}>{error}</div>}
            </div>
            <button className="btn btn-gold" style={{ width: '100%', justifyContent: 'center' }} onClick={sendLink} disabled={sending}>
              {sending ? <Loader2 size={16} className="spin" /> : <Mail size={16} />} Send sign-in link
            </button>
          </>
        )}
      </div>
    </div>
  );
}
