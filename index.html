import { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import { Search, Clock, Star, X, Plus, ShoppingBag, Briefcase, Check, ChevronRight, Loader2, LayoutGrid, Inbox, ArrowLeft, BadgeCheck, ShieldCheck, Lock, Hourglass, XCircle } from 'lucide-react';

const FONT_IMPORT = "@import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,600;9..144,700&family=Inter:wght@400;500;600;700&family=Space+Mono:wght@400;700&display=swap');";

const CATEGORIES = [
  { id: 'legal', label: 'Legal Support', icon: '⚖️' },
  { id: 'medical', label: 'Medical Admin', icon: '🩺' },
  { id: 'realestate', label: 'Real Estate', icon: '🏠' },
  { id: 'ecommerce', label: 'E-commerce Support', icon: '🛍️' },
  { id: 'socmed', label: 'Social Media Management', icon: '📱' },
  { id: 'leadgen', label: 'Lead Generation', icon: '🎯' },
  { id: 'graphicdesign', label: 'Graphic Design', icon: '🎨' },
  { id: 'emailmarketing', label: 'Email Marketing', icon: '✉️' },
  { id: 'admin', label: 'General Admin', icon: '🗂️' },
];

// Client-side only — anyone who reads the source can see this. Good enough for
// a prototype gate, not real security. A production version needs a real backend.
const ADMIN_PASSCODE = 'PVA-ADMIN-2026';

const TIMEZONES = [
  { tz: 'Asia/Manila', label: 'Manila, PH' },
  { tz: 'America/New_York', label: 'New York, US' },
  { tz: 'America/Los_Angeles', label: 'Los Angeles, US' },
  { tz: 'Europe/London', label: 'London, UK' },
  { tz: 'Australia/Sydney', label: 'Sydney, AU' },
];

const SEED_SERVICES = [
  { id: 'seed_1', sellerId: 'seed_seller_1', sellerName: 'Marisol T.', category: 'legal', title: 'Legal document prep & case file organizing', description: 'Drafting, formatting, and organizing pleadings, contracts, and case files. Experienced with law office intake and calendaring.', rate: 8, rateType: 'hourly', delivery: '24-48 hrs', tz: 'Asia/Manila', rating: 4.9, reviews: 27, createdAt: Date.now() - 8.64e7 * 40 },
  { id: 'seed_2', sellerId: 'seed_seller_2', sellerName: 'Jhon Carlo R.', category: 'medical', title: 'Medical admin & patient scheduling support', description: 'EHR data entry, appointment scheduling, insurance verification, and patient follow-up calls for clinics and private practices.', rate: 7, rateType: 'hourly', delivery: '24 hrs', tz: 'Asia/Manila', rating: 4.8, reviews: 19, createdAt: Date.now() - 8.64e7 * 35 },
  { id: 'seed_3', sellerId: 'seed_seller_3', sellerName: 'Angeli F.', category: 'realestate', title: 'Real estate listing & transaction coordination', description: 'MLS listing entry, buyer/seller CRM follow-ups, transaction paperwork, and open house scheduling.', rate: 9, rateType: 'hourly', delivery: '48 hrs', tz: 'America/Los_Angeles', rating: 5.0, reviews: 33, createdAt: Date.now() - 8.64e7 * 60 },
  { id: 'seed_4', sellerId: 'seed_seller_4', sellerName: 'Kier D.', category: 'ecommerce', title: 'Shopify product uploads + short-form ad edits', description: 'Product page builds, listing optimization, and short video edits for TikTok/Meta ads. Fast turnaround.', rate: 6, rateType: 'hourly', delivery: '24 hrs', tz: 'Asia/Manila', rating: 4.7, reviews: 14, createdAt: Date.now() - 8.64e7 * 12 },
  { id: 'seed_5', sellerId: 'seed_seller_5', sellerName: 'Ruth A.', category: 'admin', title: 'Inbox zero: email & calendar management', description: 'Daily inbox triage, meeting scheduling, travel booking, and light bookkeeping for busy founders.', rate: 7, rateType: 'hourly', delivery: 'Same day', tz: 'Europe/London', rating: 4.9, reviews: 41, createdAt: Date.now() - 8.64e7 * 90 },
  { id: 'seed_6', sellerId: 'seed_seller_6', sellerName: 'Paolo S.', category: 'legal', title: 'Paralegal support & legal research', description: 'Case law research, memo drafting, and deposition summaries for busy solo practitioners.', rate: 10, rateType: 'hourly', delivery: '48-72 hrs', tz: 'Australia/Sydney', rating: 4.6, reviews: 9, createdAt: Date.now() - 8.64e7 * 5 },
  { id: 'seed_7', sellerId: 'seed_seller_7', sellerName: 'Dianne M.', category: 'socmed', title: 'Social media management (IG, FB, TikTok)', description: 'Content calendars, scheduling, community replies, and monthly performance reports for small brands.', rate: 8, rateType: 'hourly', delivery: '24-48 hrs', tz: 'Asia/Manila', rating: 4.8, reviews: 22, createdAt: Date.now() - 8.64e7 * 20 },
  { id: 'seed_8', sellerId: 'seed_seller_8', sellerName: 'Rafael N.', category: 'leadgen', title: 'B2B lead generation & list building', description: 'Prospect research, verified email lists, and CRM data entry using LinkedIn Sales Navigator and Apollo.', rate: 9, rateType: 'hourly', delivery: '48 hrs', tz: 'America/New_York', rating: 4.7, reviews: 16, createdAt: Date.now() - 8.64e7 * 18 },
  { id: 'seed_9', sellerId: 'seed_seller_9', sellerName: 'Cristina L.', category: 'graphicdesign', title: 'Graphic design for social & print', description: 'Branded social templates, carousel posts, flyers, and Canva/Figma design systems for small teams.', rate: 8, rateType: 'hourly', delivery: '24-48 hrs', tz: 'Asia/Manila', rating: 4.9, reviews: 30, createdAt: Date.now() - 8.64e7 * 50 },
  { id: 'seed_10', sellerId: 'seed_seller_10', sellerName: 'Ben T.', category: 'emailmarketing', title: 'Email marketing & newsletter management', description: 'Klaviyo/Mailchimp flows, campaign copy, segmentation, and weekly send reporting.', rate: 9, rateType: 'hourly', delivery: '48 hrs', tz: 'Asia/Manila', rating: 4.8, reviews: 12, createdAt: Date.now() - 8.64e7 * 8 },
];

const SEED_ACCOUNTS = SEED_SERVICES.reduce((acc, s) => {
  if (!acc.some(a => a.id === s.sellerId)) {
    acc.push({ id: s.sellerId, name: s.sellerName, email: '—', portfolio: '—', note: 'Seed profile', status: 'approved', createdAt: s.createdAt });
  }
  return acc;
}, []);

function uid(prefix = 'id') { return prefix + '_' + Math.random().toString(36).slice(2, 10); }

function initials(name) {
  return name.split(' ').map(w => w[0]).filter(Boolean).slice(0, 2).join('').toUpperCase();
}

function useLocalClock(tz) {
  const [time, setTime] = useState('--:--');
  useEffect(() => {
    const update = () => {
      try {
        setTime(new Intl.DateTimeFormat('en-US', { hour: 'numeric', minute: '2-digit', timeZone: tz }).format(new Date()));
      } catch (e) { setTime('--:--'); }
    };
    update();
    const id = setInterval(update, 30000);
    return () => clearInterval(id);
  }, [tz]);
  return time;
}

function isOnlineHour(tz) {
  try {
    const hour = parseInt(new Intl.DateTimeFormat('en-US', { hour: 'numeric', hour12: false, timeZone: tz }).format(new Date()), 10);
    return hour >= 7 && hour < 21;
  } catch (e) { return true; }
}

function timeAgo(ts) {
  const days = Math.floor((Date.now() - ts) / 8.64e7);
  if (days < 1) return 'today';
  if (days === 1) return '1 day ago';
  if (days < 30) return `${days} days ago`;
  return `${Math.floor(days / 30)} mo ago`;
}

function catLabel(id) { return CATEGORIES.find(c => c.id === id)?.label || id; }
function catIcon(id) { return CATEGORIES.find(c => c.id === id)?.icon || '💼'; }

function RosterCard({ s }) {
  const time = useLocalClock(s.tz);
  const online = isOnlineHour(s.tz);
  return (
    <div className="roster-card">
      <div className="roster-avatar" style={{ background: `hsl(${(s.sellerName.charCodeAt(0) * 37) % 360},45%,32%)` }}>
        {initials(s.sellerName)}
        <span className={`roster-dot ${online ? 'on' : 'off'}`} />
      </div>
      <div className="roster-name">{s.sellerName}{s.verified && <BadgeCheck size={12} className="verified-mark" />}</div>
      <div className="roster-role">{catIcon(s.category)} {catLabel(s.category)}</div>
      <div className="roster-clock"><Clock size={11} strokeWidth={2.5} /> {time} local</div>
    </div>
  );
}

function Stars({ rating }) {
  return (
    <span className="stars">
      <Star size={13} fill="#D9A544" stroke="#D9A544" /> {rating.toFixed(1)}
    </span>
  );
}

function ServiceCard({ s, onOpen }) {
  return (
    <button className="service-card" onClick={() => onOpen(s)}>
      <div className="service-card-top">
        <div className="mini-avatar" style={{ background: `hsl(${(s.sellerName.charCodeAt(0) * 37) % 360},45%,32%)` }}>{initials(s.sellerName)}</div>
        <div>
          <div className="seller-name">{s.sellerName}{s.verified && <BadgeCheck size={13} className="verified-mark" />}</div>
          <div className="seller-cat">{catIcon(s.category)} {catLabel(s.category)}</div>
        </div>
      </div>
      <h3 className="service-title">{s.title}</h3>
      <p className="service-desc">{s.description}</p>
      <div className="service-card-bottom">
        <Stars rating={s.rating} />
        <span className="dot-sep">·</span>
        <span className="reviews">{s.reviews} orders</span>
      </div>
      <div className="service-card-footer">
        <span className="rate">${s.rate}<span className="rate-unit">/hr</span></span>
        <span className="delivery">{s.delivery} delivery</span>
      </div>
    </button>
  );
}

export default function App() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [view, setView] = useState('home'); // home | browse | dashboard
  const [query, setQuery] = useState('');
  const [activeCat, setActiveCat] = useState('all');
  const [detail, setDetail] = useState(null);
  const [showSell, setShowSell] = useState(false);
  const [showInquire, setShowInquire] = useState(false);
  const [myId, setMyId] = useState(null);
  const [orders, setOrders] = useState([]);
  const [toast, setToast] = useState(null);
  const [dashTab, setDashTab] = useState('listings');
  const [sellerAccounts, setSellerAccounts] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [showAdminAuth, setShowAdminAuth] = useState(false);
  const logoClicks = useRef(0);
  const lastLogoClick = useRef(0);

  useEffect(() => {
    (async () => {
      try {
        let sid;
        try {
          const r = await window.storage.get('my-seller-id', false);
          sid = r?.value;
        } catch (e) { sid = null; }
        if (!sid) {
          sid = uid('seller');
          await window.storage.set('my-seller-id', sid, false);
        }
        setMyId(sid);

        let svc;
        try {
          const r = await window.storage.get('services', true);
          svc = r?.value ? JSON.parse(r.value) : null;
        } catch (e) { svc = null; }
        if (!svc || !Array.isArray(svc) || svc.length === 0) {
          svc = SEED_SERVICES;
          await window.storage.set('services', JSON.stringify(svc), true);
        }
        setServices(svc);

        let ords;
        try {
          const r = await window.storage.get('orders', true);
          ords = r?.value ? JSON.parse(r.value) : [];
        } catch (e) { ords = []; }
        setOrders(ords);

        let accts;
        try {
          const r = await window.storage.get('seller-accounts', true);
          accts = r?.value ? JSON.parse(r.value) : null;
        } catch (e) { accts = null; }
        if (!accts || !Array.isArray(accts) || accts.length === 0) {
          accts = SEED_ACCOUNTS;
          await window.storage.set('seller-accounts', JSON.stringify(accts), true);
        }
        setSellerAccounts(accts);

        try {
          const r = await window.storage.get('is-admin', false);
          setIsAdmin(r?.value === 'true');
        } catch (e) { setIsAdmin(false); }
      } catch (e) {
        setServices(SEED_SERVICES);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const showToast = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(null), 2600);
  };

  const persistServices = async (next) => {
    setServices(next);
    try { await window.storage.set('services', JSON.stringify(next), true); } catch (e) {}
  };

  const persistOrders = async (next) => {
    setOrders(next);
    try { await window.storage.set('orders', JSON.stringify(next), true); } catch (e) {}
  };

  const persistAccounts = async (next) => {
    setSellerAccounts(next);
    try { await window.storage.set('seller-accounts', JSON.stringify(next), true); } catch (e) {}
  };

  const myAccount = sellerAccounts.find(a => a.id === myId) || null;

  const handleSellClick = () => {
    if (!myAccount) { setShowRegister(true); return; }
    if (myAccount.status === 'pending') { showToast('Your seller application is still under review by the PVA admin team.'); return; }
    if (myAccount.status === 'rejected') { showToast('Your seller application was not approved. Contact the PVA admin team.'); return; }
    setShowSell(true);
  };

  const registerSeller = async (data) => {
    const account = { id: myId, name: data.name, email: data.email, portfolio: data.portfolio, note: data.note, status: 'pending', createdAt: Date.now() };
    await persistAccounts([account, ...sellerAccounts.filter(a => a.id !== myId)]);
    setShowRegister(false);
    showToast('Application submitted — the PVA admin team will verify your credentials before you can post.');
  };

  const setAccountStatus = async (id, status) => {
    await persistAccounts(sellerAccounts.map(a => a.id === id ? { ...a, status } : a));
  };

  const tryAdminAuth = (passcode) => {
    if (passcode === ADMIN_PASSCODE) {
      setIsAdmin(true);
      try { window.storage.set('is-admin', 'true', false); } catch (e) {}
      setShowAdminAuth(false);
      setView('admin');
      return true;
    }
    return false;
  };

  const handleLogoClick = () => {
    const now = Date.now();
    logoClicks.current = (now - lastLogoClick.current > 900) ? 1 : logoClicks.current + 1;
    lastLogoClick.current = now;
    if (logoClicks.current >= 5) {
      logoClicks.current = 0;
      if (isAdmin) setView('admin'); else setShowAdminAuth(true);
    } else {
      setView('home');
    }
  };

  const withVerified = (arr) => arr.map(s => ({ ...s, verified: sellerAccounts.some(a => a.id === s.sellerId && a.status === 'approved') }));

  const addService = async (data) => {
    const newSvc = {
      id: uid('svc'), sellerId: myId, sellerName: data.sellerName, category: data.category,
      title: data.title, description: data.description, rate: Number(data.rate) || 0,
      rateType: 'hourly', delivery: data.delivery, tz: data.tz, rating: 5.0, reviews: 0, createdAt: Date.now(),
    };
    await persistServices([newSvc, ...services]);
    setShowSell(false);
    showToast('Your service is live on the marketplace.');
    setView('dashboard');
    setDashTab('listings');
  };

  const addOrder = async (data) => {
    const order = {
      id: uid('ord'), serviceId: detail.id, serviceTitle: detail.title, sellerId: detail.sellerId, sellerName: detail.sellerName,
      buyerId: myId, buyerName: data.buyerName, contact: data.contact, message: data.message, createdAt: Date.now(), status: 'sent',
    };
    await persistOrders([order, ...orders]);
    const bumped = services.map(s => s.id === detail.id ? { ...s, reviews: s.reviews + 1 } : s);
    await persistServices(bumped);
    setShowInquire(false);
    setDetail(null);
    showToast('Inquiry sent to ' + detail.sellerName + '.');
  };

  const markReplied = async (orderId) => {
    await persistOrders(orders.map(o => o.id === orderId ? { ...o, status: 'replied' } : o));
  };

  const sentOrders = useMemo(() => orders.filter(o => o.buyerId === myId).sort((a, b) => b.createdAt - a.createdAt), [orders, myId]);
  const receivedOrders = useMemo(() => orders.filter(o => o.sellerId === myId).sort((a, b) => b.createdAt - a.createdAt), [orders, myId]);

  const filtered = useMemo(() => {
    const list = services.filter(s => {
      const matchesCat = activeCat === 'all' || s.category === activeCat;
      const q = query.trim().toLowerCase();
      const matchesQ = !q || s.title.toLowerCase().includes(q) || s.description.toLowerCase().includes(q) || s.sellerName.toLowerCase().includes(q);
      return matchesCat && matchesQ;
    }).sort((a, b) => b.createdAt - a.createdAt);
    return withVerified(list);
  }, [services, activeCat, query, sellerAccounts]);

  const rosterSample = useMemo(() => {
    const shuffled = [...services].sort((a, b) => a.sellerName.localeCompare(b.sellerName));
    return withVerified(shuffled.slice(0, 6));
  }, [services, sellerAccounts]);

  const myListings = withVerified(services.filter(s => s.sellerId === myId));

  if (loading) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#101C2C' }}>
        <Loader2 className="spin" color="#D9A544" size={28} />
      </div>
    );
  }

  return (
    <div className="app">
      <style>{`
        ${FONT_IMPORT}
        :root {
          --navy: #101C2C; --navy-2: #16243A; --navy-3: #1E3049;
          --gold: #D9A544; --gold-dim: #E9CE9B; --teal: #4C9A8E;
          --paper: #EFF1E9; --paper-2: #E5E8DD; --ink: #16243A; --ink-soft: #4B5A6B;
          --line: #D8DBCE;
        }
        * { box-sizing: border-box; }
        .app { font-family: 'Inter', sans-serif; background: var(--paper); color: var(--ink); min-height: 100vh; }
        .mono { font-family: 'Space Mono', monospace; }
        .display { font-family: 'Fraunces', serif; }
        button { font-family: inherit; cursor: pointer; }
        :focus-visible { outline: 2px solid var(--gold); outline-offset: 2px; }
        .spin { animation: spin 1s linear infinite; }
        @keyframes spin { to { transform: rotate(360deg); } }

        /* HEADER */
        .header { position: sticky; top: 0; z-index: 40; background: var(--navy); border-bottom: 1px solid #24354d; }
        .header-inner { max-width: 1180px; margin: 0 auto; padding: 14px 20px; display: flex; align-items: center; justify-content: space-between; gap: 12px; }
        .brand { display: flex; align-items: center; gap: 9px; cursor: pointer; background: none; border: none; }
        .brand-mark { width: 46px; height: 32px; border-radius: 8px; background: var(--gold); display: flex; align-items: center; justify-content: center; font-family: 'Space Mono', monospace; font-weight: 700; color: var(--navy); font-size: 13px; letter-spacing: 0.3px; }
        .brand-name { font-family: 'Fraunces', serif; font-weight: 600; font-size: 16px; color: #F4F1E8; letter-spacing: 0.2px; }
        @media (max-width: 560px) { .brand-name { display: none; } }
        .nav-actions { display: flex; align-items: center; gap: 8px; }
        .nav-btn { display: flex; align-items: center; gap: 6px; background: transparent; border: 1px solid #2C4058; color: #C9D2DD; padding: 8px 14px; border-radius: 100px; font-size: 13.5px; font-weight: 500; transition: all .15s; }
        .nav-btn:hover { border-color: var(--gold); color: #F4F1E8; }
        .nav-btn.active { background: #1E3049; color: #F4F1E8; border-color: #2C4058; }
        .nav-btn.primary { background: var(--gold); border-color: var(--gold); color: var(--navy); font-weight: 600; }
        .nav-btn.primary:hover { background: var(--gold-dim); }

        /* HERO */
        .hero { background: var(--navy); padding: 56px 20px 40px; }
        .hero-inner { max-width: 1180px; margin: 0 auto; }
        .hero-eyebrow { font-family: 'Space Mono', monospace; color: var(--gold); font-size: 12.5px; letter-spacing: 1.5px; text-transform: uppercase; margin-bottom: 14px; }
        .hero h1 { font-family: 'Fraunces', serif; font-weight: 600; font-size: clamp(30px, 5vw, 48px); color: #F7F4EA; line-height: 1.08; margin: 0 0 16px; max-width: 720px; }
        .hero h1 em { font-style: italic; color: var(--gold); }
        .hero p { color: #A9B4C2; font-size: 16px; max-width: 520px; line-height: 1.6; margin: 0 0 28px; }
        .hero-cta { display: flex; gap: 10px; flex-wrap: wrap; margin-bottom: 44px; }
        .btn { padding: 12px 22px; border-radius: 100px; font-size: 14.5px; font-weight: 600; border: none; display: inline-flex; align-items: center; gap: 7px; transition: all .15s; }
        .btn-gold { background: var(--gold); color: var(--navy); }
        .btn-gold:hover { background: var(--gold-dim); transform: translateY(-1px); }
        .btn-outline { background: transparent; border: 1px solid #33475F; color: #E7E2D3; }
        .btn-outline:hover { border-color: var(--gold); }

        /* LIVE ROSTER — signature element */
        .roster-label { display: flex; align-items: center; gap: 8px; color: #8493A5; font-size: 12px; font-family: 'Space Mono', monospace; letter-spacing: 0.5px; text-transform: uppercase; margin-bottom: 12px; }
        .roster-pulse { width: 7px; height: 7px; border-radius: 50%; background: #5FBF9A; box-shadow: 0 0 0 0 rgba(95,191,154,.6); animation: pulse 2s infinite; }
        @keyframes pulse { 0% { box-shadow: 0 0 0 0 rgba(95,191,154,.5);} 70% { box-shadow: 0 0 0 8px rgba(95,191,154,0);} 100% { box-shadow: 0 0 0 0 rgba(95,191,154,0);} }
        .roster-strip { display: flex; gap: 12px; overflow-x: auto; padding-bottom: 6px; }
        .roster-card { flex: 0 0 128px; background: var(--navy-2); border: 1px solid #263C56; border-radius: 12px; padding: 14px 12px; text-align: center; }
        .roster-avatar { position: relative; width: 42px; height: 42px; border-radius: 50%; margin: 0 auto 8px; display: flex; align-items: center; justify-content: center; color: #F4F1E8; font-weight: 600; font-size: 14px; font-family: 'Fraunces', serif; }
        .roster-dot { position: absolute; bottom: -1px; right: -1px; width: 11px; height: 11px; border-radius: 50%; border: 2px solid var(--navy-2); }
        .roster-dot.on { background: #5FBF9A; }
        .roster-dot.off { background: #64707E; }
        .roster-name { font-size: 12.5px; font-weight: 600; color: #F0EDE2; margin-bottom: 2px; }
        .roster-role { font-size: 10.5px; color: #8493A5; margin-bottom: 6px; }
        .roster-clock { font-family: 'Space Mono', monospace; font-size: 10px; color: var(--gold); display: flex; align-items: center; gap: 3px; justify-content: center; }

        /* SEARCH BAR */
        .search-bar { max-width: 1180px; margin: -26px auto 0; padding: 0 20px; position: relative; z-index: 10; }
        .search-box { background: #fff; border-radius: 14px; box-shadow: 0 10px 30px rgba(16,28,44,0.18); display: flex; align-items: center; gap: 10px; padding: 14px 18px; }
        .search-box input { border: none; outline: none; flex: 1; font-size: 15px; font-family: 'Inter', sans-serif; background: transparent; color: var(--ink); }
        .search-box input::placeholder { color: #9AA5B1; }

        /* CATEGORY PILLS */
        .cat-row { max-width: 1180px; margin: 26px auto 0; padding: 0 20px; display: flex; gap: 8px; overflow-x: auto; }
        .cat-pill { flex: 0 0 auto; display: flex; align-items: center; gap: 6px; background: #fff; border: 1px solid var(--line); padding: 9px 15px; border-radius: 100px; font-size: 13.5px; font-weight: 500; color: var(--ink-soft); }
        .cat-pill.active { background: var(--navy); border-color: var(--navy); color: #F4F1E8; }

        /* GRID */
        .section { max-width: 1180px; margin: 0 auto; padding: 28px 20px 60px; }
        .section-title { font-family: 'Fraunces', serif; font-size: 22px; font-weight: 600; margin: 0 0 4px; }
        .section-sub { color: var(--ink-soft); font-size: 13.5px; margin: 0 0 20px; }
        .grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: 16px; }
        .service-card { text-align: left; background: #fff; border: 1px solid var(--line); border-radius: 14px; padding: 16px; display: flex; flex-direction: column; gap: 10px; transition: all .15s; }
        .service-card:hover { border-color: var(--gold); transform: translateY(-2px); box-shadow: 0 8px 20px rgba(16,28,44,0.08); }
        .service-card-top { display: flex; align-items: center; gap: 9px; }
        .mini-avatar { width: 34px; height: 34px; border-radius: 50%; color: #fff; font-weight: 600; font-size: 12.5px; font-family: 'Fraunces', serif; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
        .seller-name { font-size: 13px; font-weight: 600; }
        .seller-cat { font-size: 11px; color: var(--ink-soft); }
        .service-title { font-family: 'Fraunces', serif; font-size: 16.5px; font-weight: 600; margin: 0; line-height: 1.3; }
        .service-desc { font-size: 13px; color: var(--ink-soft); line-height: 1.5; margin: 0; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
        .service-card-bottom { display: flex; align-items: center; gap: 6px; font-size: 12px; color: var(--ink-soft); }
        .stars { display: flex; align-items: center; gap: 3px; font-weight: 600; color: var(--ink); }
        .dot-sep { opacity: 0.5; }
        .service-card-footer { display: flex; align-items: center; justify-content: space-between; padding-top: 8px; border-top: 1px dashed var(--line); }
        .rate { font-family: 'Space Mono', monospace; font-weight: 700; font-size: 15px; }
        .rate-unit { font-size: 11px; font-weight: 400; color: var(--ink-soft); }
        .delivery { font-size: 11.5px; color: var(--teal); font-weight: 600; }

        .empty { text-align: center; padding: 60px 20px; color: var(--ink-soft); }

        /* MODAL */
        .overlay { position: fixed; inset: 0; background: rgba(16,28,44,0.55); display: flex; align-items: flex-end; justify-content: center; z-index: 100; }
        @media (min-width: 640px) { .overlay { align-items: center; } }
        .modal { background: #fff; width: 100%; max-width: 560px; max-height: 90vh; overflow-y: auto; border-radius: 20px 20px 0 0; padding: 26px 24px 30px; position: relative; }
        @media (min-width: 640px) { .modal { border-radius: 18px; } }
        .modal-close { position: absolute; top: 18px; right: 18px; background: var(--paper); border: none; width: 32px; height: 32px; border-radius: 50%; display: flex; align-items: center; justify-content: center; }
        .field { margin-bottom: 16px; }
        .field label { display: block; font-size: 12.5px; font-weight: 600; margin-bottom: 6px; color: var(--ink-soft); text-transform: uppercase; letter-spacing: 0.4px; }
        .field input, .field textarea, .field select { width: 100%; border: 1px solid var(--line); border-radius: 10px; padding: 11px 13px; font-size: 14.5px; font-family: 'Inter', sans-serif; color: var(--ink); background: var(--paper); }
        .field input:focus, .field textarea:focus, .field select:focus { outline: 2px solid var(--gold); border-color: var(--gold); }
        .field textarea { resize: vertical; min-height: 80px; }
        .field-row { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }

        /* DETAIL MODAL */
        .detail-head { display: flex; align-items: center; gap: 12px; margin-bottom: 6px; }
        .detail-avatar { width: 48px; height: 48px; border-radius: 50%; color: #fff; font-weight: 700; font-family: 'Fraunces', serif; display: flex; align-items: center; justify-content: center; font-size: 16px; }
        .detail-title { font-family: 'Fraunces', serif; font-size: 21px; font-weight: 600; margin: 14px 0 8px; }
        .detail-desc { color: var(--ink-soft); font-size: 14.5px; line-height: 1.6; margin-bottom: 18px; }
        .detail-stats { display: flex; gap: 18px; padding: 14px 0; border-top: 1px solid var(--line); border-bottom: 1px solid var(--line); margin-bottom: 20px; }
        .stat-label { font-size: 10.5px; text-transform: uppercase; letter-spacing: 0.4px; color: var(--ink-soft); margin-bottom: 3px; }
        .stat-value { font-family: 'Space Mono', monospace; font-weight: 700; font-size: 15px; }

        /* DASHBOARD */
        .tabs { display: flex; gap: 6px; margin-bottom: 20px; }
        .tab { padding: 9px 16px; border-radius: 100px; border: 1px solid var(--line); background: #fff; font-size: 13.5px; font-weight: 600; color: var(--ink-soft); }
        .tab.active { background: var(--navy); color: #F4F1E8; border-color: var(--navy); }
        .order-row { background: #fff; border: 1px solid var(--line); border-radius: 12px; padding: 14px 16px; margin-bottom: 10px; }
        .order-row-top { display: flex; justify-content: space-between; align-items: flex-start; gap: 10px; margin-bottom: 6px; }
        .order-title { font-weight: 600; font-size: 14px; }
        .order-meta { font-size: 12px; color: var(--ink-soft); }
        .order-status { font-family: 'Space Mono', monospace; font-size: 10.5px; text-transform: uppercase; background: #E7F3EF; color: var(--teal); padding: 4px 9px; border-radius: 100px; font-weight: 700; flex-shrink: 0; }
        .order-status.pending { background: #FBF0DC; color: #A9781E; }
        .order-status.rejected { background: #F7E5E1; color: #B4523F; }
        .order-msg { font-size: 13px; color: var(--ink-soft); margin-top: 6px; font-style: italic; }

        /* VERIFIED BADGE */
        .seller-name, .roster-name { display: flex; align-items: center; gap: 4px; }
        .verified-mark { color: var(--teal); flex-shrink: 0; }

        /* SELLER STATUS BANNER */
        .status-banner { display: flex; align-items: center; gap: 9px; padding: 12px 16px; border-radius: 12px; font-size: 13.5px; font-weight: 600; margin-bottom: 20px; }
        .status-approved { background: #E7F3EF; color: #2D6E62; }
        .status-pending { background: #FBF0DC; color: #A9781E; }
        .status-rejected { background: #F7E5E1; color: #B4523F; }

        /* ADMIN PANEL */
        .admin-row { background: #fff; border: 1px solid var(--line); border-radius: 12px; padding: 14px 16px; margin-bottom: 10px; }
        .admin-row-top { display: flex; justify-content: space-between; align-items: flex-start; gap: 10px; margin-bottom: 6px; }
        .admin-detail { font-size: 12.5px; color: var(--ink-soft); margin-top: 4px; }
        .admin-actions { display: flex; gap: 8px; margin-top: 12px; }
        .admin-actions .btn { padding: 8px 16px; font-size: 13px; }
        .btn-outline.dark { border-color: var(--line); color: var(--ink-soft); }
        .btn-outline.dark:hover { border-color: #B4523F; color: #B4523F; }

        .toast { position: fixed; bottom: 22px; left: 50%; transform: translateX(-50%); background: var(--navy); color: #F4F1E8; padding: 13px 20px; border-radius: 100px; font-size: 13.5px; display: flex; align-items: center; gap: 8px; z-index: 200; box-shadow: 0 10px 30px rgba(0,0,0,0.3); }

        .footer { text-align: center; padding: 30px 20px 40px; color: var(--ink-soft); font-size: 12.5px; }
      `}</style>

      <header className="header">
        <div className="header-inner">
          <button className="brand" onClick={handleLogoClick}>
            <div className="brand-mark">PVA</div>
            <div className="brand-name">Philippine Virtual Assistants</div>
          </button>
          <nav className="nav-actions">
            <button className={`nav-btn ${view === 'browse' ? 'active' : ''}`} onClick={() => setView('browse')}>
              <LayoutGrid size={14} /> Browse
            </button>
            <button className={`nav-btn ${view === 'dashboard' ? 'active' : ''}`} onClick={() => setView('dashboard')}>
              <Inbox size={14} /> Dashboard
            </button>
            <button className="nav-btn primary" onClick={handleSellClick}>
              <Plus size={14} /> Post a service
            </button>
          </nav>
        </div>
      </header>

      {view === 'home' && (
        <>
          <div className="hero">
            <div className="hero-inner">
              <div className="hero-eyebrow">Philippine Virtual Assistants · Verified marketplace</div>
              <h1>Hire — or become — <em>the assistant</em> a business runs on.</h1>
              <p>Legal, medical, real estate, e-commerce, social media, lead generation, graphic design, email marketing, and general admin support, sold directly by verified Filipino VAs. Every seller is reviewed by the PVA admin team before they can list.</p>
              <div className="hero-cta">
                <button className="btn btn-gold" onClick={() => setView('browse')}>
                  Browse services <ChevronRight size={16} />
                </button>
                <button className="btn btn-outline" onClick={handleSellClick}>
                  Sell your services
                </button>
              </div>
              <div className="roster-label"><span className="roster-pulse" /> On the roster right now</div>
              <div className="roster-strip">
                {rosterSample.map(s => <RosterCard key={s.id} s={s} />)}
              </div>
            </div>
          </div>
          <div className="section" style={{ paddingTop: 40 }}>
            <h2 className="section-title">Browse by specialty</h2>
            <p className="section-sub">Every category is staffed by assistants who've actually done the job before.</p>
            <div className="grid">
              {CATEGORIES.map(c => (
                <button key={c.id} className="service-card" style={{ alignItems: 'flex-start' }}
                  onClick={() => { setActiveCat(c.id); setView('browse'); }}>
                  <div style={{ fontSize: 26 }}>{c.icon}</div>
                  <h3 className="service-title">{c.label}</h3>
                  <p className="service-desc">
                    {services.filter(s => s.category === c.id).length} assistant{services.filter(s => s.category === c.id).length === 1 ? '' : 's'} available
                  </p>
                </button>
              ))}
            </div>
          </div>
        </>
      )}

      {view === 'browse' && (
        <div className="section" style={{ paddingTop: 24 }}>
          <div className="search-bar" style={{ margin: '0 0 0', padding: 0, position: 'static' }}>
            <div className="search-box">
              <Search size={18} color="#9AA5B1" />
              <input autoFocus placeholder="Search services or assistants…" value={query} onChange={e => setQuery(e.target.value)} />
            </div>
          </div>
          <div className="cat-row" style={{ margin: '18px 0 0', padding: 0 }}>
            <button className={`cat-pill ${activeCat === 'all' ? 'active' : ''}`} onClick={() => setActiveCat('all')}>All</button>
            {CATEGORIES.map(c => (
              <button key={c.id} className={`cat-pill ${activeCat === c.id ? 'active' : ''}`} onClick={() => setActiveCat(c.id)}>
                {c.icon} {c.label}
              </button>
            ))}
          </div>
          <div style={{ height: 24 }} />
          <p className="section-sub">{filtered.length} service{filtered.length === 1 ? '' : 's'} found</p>
          {filtered.length === 0 ? (
            <div className="empty">
              <p>Nothing matches yet. Try a different search, or be the first to list this service.</p>
              <button className="btn btn-gold" style={{ marginTop: 14 }} onClick={handleSellClick}>Post a service</button>
            </div>
          ) : (
            <div className="grid">
              {filtered.map(s => <ServiceCard key={s.id} s={s} onOpen={setDetail} />)}
            </div>
          )}
        </div>
      )}

      {view === 'dashboard' && (
        <div className="section" style={{ paddingTop: 24 }}>
          <h2 className="section-title">My Dashboard</h2>
          <p className="section-sub">Your listings, inquiries sent to sellers, and inquiries buyers have sent you.</p>
          {myAccount && (
            <div className={`status-banner status-${myAccount.status}`}>
              {myAccount.status === 'approved' && <><BadgeCheck size={15} /> Verified seller — you can post services.</>}
              {myAccount.status === 'pending' && <><Hourglass size={15} /> Application under review by the PVA admin team.</>}
              {myAccount.status === 'rejected' && <><XCircle size={15} /> Application not approved. Contact the PVA admin team.</>}
            </div>
          )}
          <div className="tabs">
            <button className={`tab ${dashTab === 'listings' ? 'active' : ''}`} onClick={() => setDashTab('listings')}>My Listings ({myListings.length})</button>
            <button className={`tab ${dashTab === 'received' ? 'active' : ''}`} onClick={() => setDashTab('received')}>Received Inquiries ({receivedOrders.length})</button>
            <button className={`tab ${dashTab === 'sent' ? 'active' : ''}`} onClick={() => setDashTab('sent')}>My Inquiries ({sentOrders.length})</button>
          </div>
          {dashTab === 'listings' && (
            myListings.length === 0 ? (
              <div className="empty">
                <p>You haven't posted a service yet.</p>
                <button className="btn btn-gold" style={{ marginTop: 14 }} onClick={handleSellClick}>Post your first service</button>
              </div>
            ) : (
              <div className="grid">{myListings.map(s => <ServiceCard key={s.id} s={s} onOpen={setDetail} />)}</div>
            )
          )}
          {dashTab === 'received' && (
            receivedOrders.length === 0 ? (
              <div className="empty"><p>No inquiries yet. They'll show up here as soon as a buyer reaches out to one of your listings.</p></div>
            ) : (
              <div>
                {receivedOrders.map(o => (
                  <div className="order-row" key={o.id}>
                    <div className="order-row-top">
                      <div>
                        <div className="order-title">{o.buyerName} — {o.serviceTitle}</div>
                        <div className="order-meta">reach them at {o.contact} · {timeAgo(o.createdAt)}</div>
                      </div>
                      <span className={`order-status ${o.status === 'replied' ? '' : 'pending'}`}>{o.status}</span>
                    </div>
                    <div className="order-msg">"{o.message}"</div>
                    {o.status !== 'replied' && (
                      <button className="btn btn-outline dark" style={{ marginTop: 10, padding: '7px 14px', fontSize: 12.5 }} onClick={() => markReplied(o.id)}>
                        Mark as replied
                      </button>
                    )}
                  </div>
                ))}
              </div>
            )
          )}
          {dashTab === 'sent' && (
            sentOrders.length === 0 ? (
              <div className="empty"><p>No inquiries sent yet. Browse services and reach out to an assistant.</p></div>
            ) : (
              <div>
                {sentOrders.map(o => (
                  <div className="order-row" key={o.id}>
                    <div className="order-row-top">
                      <div>
                        <div className="order-title">{o.serviceTitle}</div>
                        <div className="order-meta">to {o.sellerName} · {timeAgo(o.createdAt)}</div>
                      </div>
                      <span className={`order-status ${o.status === 'replied' ? '' : 'pending'}`}>{o.status}</span>
                    </div>
                    <div className="order-msg">"{o.message}"</div>
                  </div>
                ))}
              </div>
            )
          )}
        </div>
      )}

      {view === 'admin' && isAdmin && (
        <div className="section" style={{ paddingTop: 24 }}>
          <h2 className="section-title"><ShieldCheck size={19} style={{ verticalAlign: -3 }} /> Admin — Seller Review</h2>
          <p className="section-sub">Check each applicant's credibility and legality before approving. Approved sellers can post services and access their dashboard.</p>
          {sellerAccounts.filter(a => a.status === 'pending').length === 0 ? (
            <div className="empty"><p>No pending applications right now.</p></div>
          ) : (
            sellerAccounts.filter(a => a.status === 'pending').map(a => (
              <div className="admin-row" key={a.id}>
                <div className="admin-row-top">
                  <div>
                    <div className="order-title">{a.name}</div>
                    <div className="order-meta">{a.email} · applied {timeAgo(a.createdAt)}</div>
                  </div>
                  <span className="order-status pending">pending</span>
                </div>
                {a.portfolio && a.portfolio !== '—' && <div className="admin-detail">Portfolio / proof: {a.portfolio}</div>}
                {a.note && a.note !== '—' && <div className="admin-detail">Notes: {a.note}</div>}
                <div className="admin-actions">
                  <button className="btn btn-gold" onClick={() => setAccountStatus(a.id, 'approved')}><Check size={14} /> Approve</button>
                  <button className="btn btn-outline dark" onClick={() => setAccountStatus(a.id, 'rejected')}><X size={14} /> Reject</button>
                </div>
              </div>
            ))
          )}
          <h3 className="section-title" style={{ fontSize: 17, marginTop: 30 }}>All sellers</h3>
          {sellerAccounts.filter(a => a.status !== 'pending').map(a => (
            <div className="admin-row" key={a.id}>
              <div className="admin-row-top">
                <div>
                  <div className="order-title">{a.name}</div>
                  <div className="order-meta">{a.email}</div>
                </div>
                <span className={`order-status ${a.status}`}>{a.status}</span>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* SERVICE DETAIL MODAL */}
      {detail && !showInquire && (
        <div className="overlay" onClick={() => setDetail(null)}>
          <div className="modal" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setDetail(null)}><X size={16} /></button>
            <div className="detail-head">
              <div className="detail-avatar" style={{ background: `hsl(${(detail.sellerName.charCodeAt(0) * 37) % 360},45%,32%)` }}>{initials(detail.sellerName)}</div>
              <div>
                <div style={{ fontWeight: 700, fontSize: 15 }}>{detail.sellerName}</div>
                <div style={{ fontSize: 12.5, color: 'var(--ink-soft)' }}>{catIcon(detail.category)} {catLabel(detail.category)} · {TIMEZONES.find(t => t.tz === detail.tz)?.label || detail.tz}</div>
              </div>
            </div>
            <h2 className="detail-title">{detail.title}</h2>
            <p className="detail-desc">{detail.description}</p>
            <div className="detail-stats">
              <div><div className="stat-label">Rate</div><div className="stat-value">${detail.rate}/hr</div></div>
              <div><div className="stat-label">Delivery</div><div className="stat-value">{detail.delivery}</div></div>
              <div><div className="stat-label">Rating</div><div className="stat-value"><Stars rating={detail.rating} /></div></div>
              <div><div className="stat-label">Orders</div><div className="stat-value">{detail.reviews}</div></div>
            </div>
            <button className="btn btn-gold" style={{ width: '100%', justifyContent: 'center' }} onClick={() => setShowInquire(true)}>
              <ShoppingBag size={16} /> Send inquiry
            </button>
          </div>
        </div>
      )}

      {/* INQUIRE MODAL */}
      {showInquire && detail && (
        <InquireModal service={detail} onClose={() => setShowInquire(false)} onSubmit={addOrder} />
      )}

      {/* SELL MODAL */}
      {showSell && (
        <SellModal onClose={() => setShowSell(false)} onSubmit={addService} defaultName={myAccount?.name || ''} />
      )}

      {/* SELLER REGISTRATION MODAL */}
      {showRegister && (
        <RegisterModal onClose={() => setShowRegister(false)} onSubmit={registerSeller} />
      )}

      {/* ADMIN AUTH MODAL */}
      {showAdminAuth && (
        <AdminAuthModal onClose={() => setShowAdminAuth(false)} onSubmit={tryAdminAuth} />
      )}

      {toast && <div className="toast"><Check size={15} /> {toast}</div>}

      <footer className="footer">PVA — Philippine Virtual Assistants, a marketplace prototype. Listings persist in this app; no real payments are processed.</footer>
    </div>
  );
}

function InquireModal({ service, onClose, onSubmit }) {
  const [buyerName, setBuyerName] = useState('');
  const [contact, setContact] = useState('');
  const [message, setMessage] = useState(`Hi ${service.sellerName}, I'd like to talk about "${service.title}".`);
  const canSubmit = buyerName.trim() && contact.trim() && message.trim();
  return (
    <div className="overlay" onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}><X size={16} /></button>
        <h2 className="detail-title" style={{ marginTop: 4 }}>Inquire about this service</h2>
        <p className="detail-desc" style={{ marginBottom: 18 }}>Sent directly to {service.sellerName}. They'll follow up using the contact info you provide.</p>
        <div className="field"><label>Your name</label><input value={buyerName} onChange={e => setBuyerName(e.target.value)} placeholder="Full name" /></div>
        <div className="field"><label>Email or WhatsApp</label><input value={contact} onChange={e => setContact(e.target.value)} placeholder="How should they reach you?" /></div>
        <div className="field"><label>Message</label><textarea value={message} onChange={e => setMessage(e.target.value)} /></div>
        <button className="btn btn-gold"
          style={{ width: '100%', justifyContent: 'center', opacity: canSubmit ? 1 : 0.5 }}
          onClick={() => canSubmit && onSubmit({ buyerName, contact, message })}>
          Send inquiry
        </button>
      </div>
    </div>
  );
}

function RegisterModal({ onClose, onSubmit }) {
  const [form, setForm] = useState({ name: '', email: '', portfolio: '', note: '' });
  const set = (k, v) => setForm(f => ({ ...f, [k]: v }));
  const canSubmit = form.name.trim() && form.email.trim();
  return (
    <div className="overlay" onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}><X size={16} /></button>
        <h2 className="detail-title" style={{ marginTop: 4 }}>Register as a seller</h2>
        <p className="detail-desc" style={{ marginBottom: 18 }}>
          The PVA admin team checks every applicant's credibility and legality before they can post services or access their seller dashboard.
        </p>
        <div className="field"><label>Full name</label><input value={form.name} onChange={e => set('name', e.target.value)} placeholder="As it appears on your ID" /></div>
        <div className="field"><label>Email or WhatsApp</label><input value={form.email} onChange={e => set('email', e.target.value)} placeholder="How the admin team can reach you" /></div>
        <div className="field"><label>Portfolio or proof of experience</label><input value={form.portfolio} onChange={e => set('portfolio', e.target.value)} placeholder="LinkedIn, portfolio link, past employer, etc." /></div>
        <div className="field"><label>Anything else the admin should know</label><textarea value={form.note} onChange={e => set('note', e.target.value)} placeholder="Certifications, years of experience, specialties…" /></div>
        <button className="btn btn-gold" style={{ width: '100%', justifyContent: 'center', opacity: canSubmit ? 1 : 0.5 }}
          onClick={() => canSubmit && onSubmit(form)}>
          Submit for review
        </button>
      </div>
    </div>
  );
}

function AdminAuthModal({ onClose, onSubmit }) {
  const [code, setCode] = useState('');
  const [error, setError] = useState(false);
  return (
    <div className="overlay" onClick={onClose}>
      <div className="modal" style={{ maxWidth: 380 }} onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}><X size={16} /></button>
        <h2 className="detail-title" style={{ marginTop: 4 }}><Lock size={17} style={{ verticalAlign: -3 }} /> Admin sign-in</h2>
        <p className="detail-desc" style={{ marginBottom: 18 }}>Enter the admin passcode to review seller applications.</p>
        <div className="field">
          <label>Passcode</label>
          <input type="password" value={code} onChange={e => { setCode(e.target.value); setError(false); }} placeholder="••••••••" />
          {error && <div style={{ color: '#B4523F', fontSize: 12.5, marginTop: 6 }}>That passcode isn't right.</div>}
        </div>
        <button className="btn btn-gold" style={{ width: '100%', justifyContent: 'center' }}
          onClick={() => { if (!onSubmit(code)) setError(true); }}>
          Sign in
        </button>
      </div>
    </div>
  );
}

function SellModal({ onClose, onSubmit, defaultName }) {
  const [form, setForm] = useState({ sellerName: defaultName || '', category: 'admin', title: '', description: '', rate: '', delivery: '24 hrs', tz: 'Asia/Manila' });
  const set = (k, v) => setForm(f => ({ ...f, [k]: v }));
  const canSubmit = form.sellerName.trim() && form.title.trim() && form.description.trim() && form.rate;
  return (
    <div className="overlay" onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}><X size={16} /></button>
        <h2 className="detail-title" style={{ marginTop: 4 }}>Post a service</h2>
        <p className="detail-desc" style={{ marginBottom: 18 }}>This goes live on the marketplace immediately, visible to every buyer.</p>
        <div className="field"><label>Your name</label><input value={form.sellerName} onChange={e => set('sellerName', e.target.value)} placeholder="How buyers will see you" /></div>
        <div className="field-row">
          <div className="field"><label>Category</label>
            <select value={form.category} onChange={e => set('category', e.target.value)}>
              {CATEGORIES.map(c => <option key={c.id} value={c.id}>{c.label}</option>)}
            </select>
          </div>
          <div className="field"><label>Timezone</label>
            <select value={form.tz} onChange={e => set('tz', e.target.value)}>
              {TIMEZONES.map(t => <option key={t.tz} value={t.tz}>{t.label}</option>)}
            </select>
          </div>
        </div>
        <div className="field"><label>Service title</label><input value={form.title} onChange={e => set('title', e.target.value)} placeholder="e.g. Legal document prep & filing" /></div>
        <div className="field"><label>Description</label><textarea value={form.description} onChange={e => set('description', e.target.value)} placeholder="What you do, your experience, and how you work" /></div>
        <div className="field-row">
          <div className="field"><label>Rate (USD/hr)</label><input type="number" min="1" value={form.rate} onChange={e => set('rate', e.target.value)} placeholder="8" /></div>
          <div className="field"><label>Typical delivery</label><input value={form.delivery} onChange={e => set('delivery', e.target.value)} placeholder="24 hrs" /></div>
        </div>
        <button className="btn btn-gold" style={{ width: '100%', justifyContent: 'center', opacity: canSubmit ? 1 : 0.5 }}
          onClick={() => canSubmit && onSubmit(form)}>
          Publish listing
        </button>
      </div>
    </div>
  );
}
