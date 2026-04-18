'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-slate-100 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-slate-900 rounded flex items-center justify-center">
              <span className="text-white font-bold text-sm">L</span>
            </div>
            <span className="font-bold text-slate-900 text-lg tracking-tight">
              LSR Building
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="#over-ons"
              className="text-slate-600 hover:text-slate-900 transition text-sm font-medium"
            >
              Over Ons
            </Link>
            <Link
              href="#diensten"
              className="text-slate-600 hover:text-slate-900 transition text-sm font-medium"
            >
              Diensten
            </Link>
            <Link
              href="#werken"
              className="text-slate-600 hover:text-slate-900 transition text-sm font-medium"
            >
              Werken
            </Link>
            <Link
              href="#contact"
              className="text-slate-600 hover:text-slate-900 transition text-sm font-medium"
            >
              Contact
            </Link>
          </div>

          {/* CTA */}
          <Link
            href="#contact"
            className="hidden sm:inline-flex items-center gap-2 bg-slate-900 text-white px-5 py-2 rounded-lg text-sm font-semibold hover:bg-slate-800 transition"
          >
            Offerte Aanvragen
          </Link>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-slate-600 hover:bg-slate-100 transition"
            aria-label="Menu openen"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden border-t border-slate-100 py-4 space-y-1">
            {[
              { href: '#over-ons', label: 'Over Ons' },
              { href: '#diensten', label: 'Diensten' },
              { href: '#werken', label: 'Werken' },
              { href: '#contact', label: 'Contact' },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block px-2 py-2 text-slate-700 hover:text-slate-900 font-medium text-sm"
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-3">
              <Link
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="block text-center bg-slate-900 text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-slate-800 transition"
              >
                Offerte Aanvragen
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
