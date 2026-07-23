import { useState, useEffect, useRef } from 'react';
import { Send } from 'lucide-react';
import { supabase } from '../lib/supabaseClient';

export default function ChatPanel({ orderId, myId }) {
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState('');
  const bottomRef = useRef(null);

  useEffect(() => {
    let active = true;

    supabase
      .from('messages')
      .select('*')
      .eq('order_id', orderId)
      .order('created_at', { ascending: true })
      .then(({ data }) => { if (active && data) setMessages(data); });

    const channel = supabase
      .channel(`messages:${orderId}`)
      .on('postgres_changes', {
        event: 'INSERT', schema: 'public', table: 'messages', filter: `order_id=eq.${orderId}`,
      }, (payload) => {
        setMessages((prev) => prev.some(m => m.id === payload.new.id) ? prev : [...prev, payload.new]);
      })
      .subscribe();

    return () => { active = false; supabase.removeChannel(channel); };
  }, [orderId]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages.length]);

  const send = async () => {
    const body = text.trim();
    if (!body) return;
    setText('');
    const { error } = await supabase.from('messages').insert({ order_id: orderId, sender_id: myId, body });
    if (error) console.error('Failed to send message', error);
  };

  return (
    <div className="chat-panel">
      <div className="chat-log">
        {messages.length === 0 && <div className="chat-empty">No messages yet — say hello.</div>}
        {messages.map((m) => (
          <div key={m.id} className={`chat-bubble ${m.sender_id === myId ? 'mine' : ''}`}>
            {m.body}
          </div>
        ))}
        <div ref={bottomRef} />
      </div>
      <div className="chat-input-row">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && send()}
          placeholder="Write a message…"
        />
        <button className="chat-send" onClick={send} aria-label="Send"><Send size={16} /></button>
      </div>
    </div>
  );
}
