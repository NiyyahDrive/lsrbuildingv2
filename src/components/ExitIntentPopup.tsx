'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function ExitIntentPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      // Only trigger if mouse moves toward top (potential tab close)
      if ((e as any).clientY <= 0 && !isVisible) {
        setIsVisible(true);
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [isVisible]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production: send to mailing list service
    console.log('Email captured:', email);
    setSubmitted(true);
    setTimeout(() => {
      setIsVisible(false);
      setSubmitted(false);
      setEmail('');
    }, 2000);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4 p-8 animate-in fade-in duration-300">
        {submitted ? (
          <div className="text-center">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Bedankt!</h3>
            <p className="text-slate-600 text-sm">We sturen je het archief van bewezen projecten.</p>
          </div>
        ) : (
          <>
            <button
              onClick={() => setIsVisible(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600"
            >
              ✕
            </button>

            <div className="mb-6">
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Wacht! Bekijk onze succesmeldingen.
              </h3>
              <p className="text-slate-600 text-sm">
                3 case studies hoe wij €650K+ hebben bespaard voor onze klanten.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="je@bedrijf.be"
                required
                className="w-full px-4 py-2.5 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-slate-900"
              />
              <button
                type="submit"
                className="w-full bg-slate-900 text-white py-2.5 rounded-lg font-semibold hover:bg-slate-800 transition text-sm"
              >
                Case Studies Ontvangen
              </button>
            </form>

            <div className="mt-4 text-center">
              <Link href="#contact" onClick={() => setIsVisible(false)} className="text-slate-600 text-xs hover:text-slate-900 transition">
                Of direct een offerte aanvragen →
              </Link>
            </div>

            <p className="text-xs text-slate-400 text-center mt-4">
              Geen spam. Slechts 2 e-mails per maand.
            </p>
          </>
        )}
      </div>
    </div>
  );
}
