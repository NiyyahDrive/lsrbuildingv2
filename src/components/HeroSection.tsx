import Link from 'next/link';

const trustItems = [
  { label: '10+ jaar ervaring', sub: 'Palestina & België' },
  { label: 'VOL VCA', sub: 'Veiligheidscertificaat' },
  { label: 'Dethier · Verwater · Van Laere', sub: 'Referentieprojecten' },
  { label: '2 Bachelors', sub: 'Engineering & Bedrijfskunde' },
];

export default function HeroSection() {
  return (
    <section className="bg-white text-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="max-w-3xl">
          {/* Label */}
          <div className="inline-flex items-center gap-2 bg-slate-100 border border-slate-200 text-slate-600 text-xs font-semibold tracking-widest uppercase px-3 py-1.5 rounded-full mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-pulse"></span>
            Actief in België
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight mb-6 text-slate-900">
            Uw bouwproject.
            <br />
            <span className="text-slate-700">Onze regie.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-10 max-w-2xl">
            LSR Building combineert technisch vakmanschap met zakelijke efficiëntie.
            Wij zorgen voor een vlekkeloze uitvoering — van de eerste schets
            tot de definitieve oplevering.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Link
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-slate-900 text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-slate-800 transition text-sm"
            >
              Offerte Aanvragen
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="#diensten"
              className="inline-flex items-center justify-center gap-2 border border-slate-300 text-slate-700 px-8 py-3.5 rounded-lg font-semibold hover:border-slate-400 hover:text-slate-900 transition text-sm"
            >
              Onze diensten
            </Link>
          </div>

          {/* Trust bar */}
          <div className="border-t border-slate-200 pt-8 grid grid-cols-2 md:grid-cols-4 gap-6">
            {trustItems.map((item) => (
              <div key={item.label}>
                <p className="text-slate-900 font-semibold text-sm">{item.label}</p>
                <p className="text-slate-500 text-xs mt-0.5">{item.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
