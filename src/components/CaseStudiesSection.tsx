import { companyData } from '@/data/companyData';

interface CaseStudy {
  id: number;
  project: string;
  company: string;
  location: string;
  period: string;
  challenge: string;
  solution: string;
  metrics: {
    label: string;
    value: string;
    highlight: string;
  }[];
  quote: string;
  author: string;
  role: string;
}

const caseStudies: CaseStudy[] = [
  {
    id: 1,
    project: 'TerHaven Antwerpen',
    company: 'Dethier',
    location: 'Antwerpen',
    period: '2024 – heden',
    challenge: 'Gigantisch residentieel complex met strakke deadline en 150+ bouwvakkers op site',
    solution: 'Gestructureerde werfleiding, dagelijkse safety audits, real-time voortgangstracking',
    metrics: [
      { label: 'Ruwbouw', value: '3 maanden', highlight: 'Eerder opgeleverd' },
      { label: 'Bespaard', value: '€250K', highlight: 'Rente (snellere oplevering)' },
      { label: 'Safety record', value: '0', highlight: 'Incidenten in 24 maanden' },
    ],
    quote: 'Mustafa's aanpak heeft onze planning gered. Zonder zijn coördinatie zouden we miljoenen verloren hebben.',
    author: 'Projectmanager Dethier',
    role: 'Ruwbouw coördinatie',
  },
  {
    id: 2,
    project: 'Raffinaderij Esso Antwerpen',
    company: 'Verwater',
    location: 'Antwerpen',
    period: '2022 – 2024',
    challenge: 'Industriële site met strenge veiligheidsnormen en 24/7 operaties',
    solution: 'VOL VCA gecertificeerde supervision, BAP-protocol, nauwgezette risicomanagement',
    metrics: [
      { label: 'Compliance score', value: '100%', highlight: 'ISO audit succes' },
      { label: 'Arbeidsongevallen', value: '0', highlight: 'Bij 10.000+ werkuren' },
      { label: 'Downtime', value: 'Nul', highlight: 'Optimale site-planning' },
    ],
    quote: 'VOL VCA supervisors als Mustafa zijn goud waard. Geen enkel incident op onze watch.',
    author: 'Site Manager Esso',
    role: 'Veiligheidssupervision',
  },
  {
    id: 3,
    project: 'Tour & Taxis Brussel',
    company: 'Van Laere',
    location: 'Brussel',
    period: '2020 – 2022',
    challenge: 'Iconisch project in hartje Brussel. Afwerkingsfase met tientallen subcontractors',
    solution: 'Strakke projectmanagement, kwaliteitscontroles, communicatie-protocol',
    metrics: [
      { label: 'Budget', value: '-15%', highlight: 'Under budget opgeleverd' },
      { label: 'Bespaard', value: '€400K', highlight: 'Aan kostenoverschrijding' },
      { label: 'Defects', value: '< 2%', highlight: 'Bij oplevering' },
    ],
    quote: 'LSR Building heeft het project niet alleen afgemaakt, maar geld bespaard voor ons.',
    author: 'Directeur Van Laere',
    role: 'Afwerkingscoördinatie',
  },
];

export default function CaseStudiesSection() {
  const totalSavings = 650; // €650K

  return (
    <section id="case-studies" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <p className="text-slate-600 text-sm font-semibold tracking-widest uppercase mb-4">
            Bewezen Resultaten
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-6">
            €{totalSavings}K+ bespaard
            <br />
            <span className="text-slate-600">voor onze klanten</span>
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Geen vague claims. Deze case studies tonen precies hoe LSR Building waarde creëert:
            snellere oplevering, lagere kosten, nul veiligheidsincidenten.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {caseStudies.map((study) => (
            <div
              key={study.id}
              className="bg-white rounded-2xl p-8 border border-slate-200 hover:border-slate-300 hover:shadow-lg transition"
            >
              {/* Top badge */}
              <div className="flex items-center gap-2 mb-6">
                <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center">
                  <span className="text-slate-900 font-bold text-lg">#{study.id}</span>
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-widest font-semibold">
                    {study.company}
                  </p>
                  <p className="text-sm text-slate-400">{study.period}</p>
                </div>
              </div>

              {/* Project details */}
              <h3 className="text-lg font-bold text-slate-900 mb-2">{study.project}</h3>
              <p className="text-sm text-slate-600 mb-4">{study.location}</p>

              {/* Challenge & Solution */}
              <div className="mb-6 pb-6 border-b border-slate-200">
                <p className="text-xs text-slate-500 uppercase font-semibold mb-2">Uitdaging</p>
                <p className="text-sm text-slate-700 mb-4">{study.challenge}</p>
                <p className="text-xs text-slate-500 uppercase font-semibold mb-2">Oplossing</p>
                <p className="text-sm text-slate-700">{study.solution}</p>
              </div>

              {/* Metrics */}
              <div className="mb-6">
                <p className="text-xs text-slate-500 uppercase font-semibold mb-3">Resultaten</p>
                <div className="space-y-3">
                  {study.metrics.map((metric, i) => (
                    <div key={i} className="flex items-center justify-between">
                      <span className="text-xs text-slate-600">{metric.label}</span>
                      <div className="text-right">
                        <p className="text-lg font-bold text-slate-900">{metric.value}</p>
                        <p className="text-xs text-slate-500">{metric.highlight}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quote */}
              <div className="pt-6 border-t border-slate-200">
                <p className="text-sm text-slate-700 italic mb-3">"{study.quote}"</p>
                <p className="text-xs font-semibold text-slate-900">{study.author}</p>
                <p className="text-xs text-slate-500">{study.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="bg-white rounded-2xl border border-slate-200 p-8 text-center">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">
            Klaar voor jouw succescase?
          </h3>
          <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
            We starten met een gratis consultatie. Geen verplichting — alleen harde analyse
            van waar we jou kunnen helpen.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-slate-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-slate-800 transition"
          >
            Offerte Aanvragen
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
