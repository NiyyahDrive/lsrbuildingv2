'use client';

import { useState } from 'react';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    id: 1,
    question: 'Wat is het verschil tussen projectcoördinatie en werfbeheer?',
    answer:
      'Projectcoördinatie omvat de volledige planning, communicatie en oversicht van het project — van voorbereiding tot oplevering. Werfbeheer focust op dagelijks toezicht, veiligheid en aansturing op locatie. LSR Building biedt beide geïntegreerd.',
  },
  {
    id: 2,
    question: 'Hoeveel kost een consultatie?',
    answer:
      'Een eerste consultatie is volledig gratis. We analyseren uw situatie en geven eerlijk advies — zelfs als we denken dat een ander bedrijf beter bij u past. Geen verplichtingen.',
  },
  {
    id: 3,
    question: 'Hoe snel krijgen we reactie?',
    answer:
      'We garanderen een respons binnen 4 uur op alle vragen. Meestal antwoorden we veel sneller — vaak dezelfde dag.',
  },
  {
    id: 4,
    question: 'Wat betekent VOL VCA certificering?',
    answer:
      'VOL VCA is een Nederlands/Belgisch veiligheidscertificaat dat aantoont dat we strenge veiligheidsnormen hanteren. Dit is verplicht voor veel industriële sites en getuigt van professionele worksite-management.',
  },
  {
    id: 5,
    question: 'Kunnen jullie met bestaande contractors werken?',
    answer:
      'Ja, absoluut. Veel clients werken met hun eigen teams. LSR Building coördineert en bewaakt — zodat iedereen op dezelfde pagina staat en deadlines worden gehaald.',
  },
  {
    id: 6,
    question: 'Welke projecten hebben jullie eerder gedaan?',
    answer:
      'We hebben ervaring met residentiële complexen (TerHaven), industriële sites (Raffinaderij Esso) en iconische stadsprojecten (Tour & Taxis Brussel). Zie onze case studies voor details.',
  },
];

export default function FAQSection() {
  const [openId, setOpenId] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-slate-600 text-sm font-semibold tracking-widest uppercase mb-4">
            Veelgestelde Vragen
          </p>
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Vragen? Hier zijn de antwoorden.
          </h2>
          <p className="text-slate-600 text-lg">
            Kun je je vraag niet vinden? Neem direct contact op met ons team.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="border border-slate-200 rounded-lg overflow-hidden hover:border-slate-300 transition"
            >
              <button
                onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                className="w-full px-6 py-4 flex items-center justify-between bg-slate-50 hover:bg-slate-100 transition"
              >
                <span className="font-semibold text-slate-900 text-left">{faq.question}</span>
                <svg
                  className={`w-5 h-5 text-slate-600 transition-transform ${
                    openId === faq.id ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </button>

              {openId === faq.id && (
                <div className="px-6 py-4 bg-white border-t border-slate-200">
                  <p className="text-slate-700 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-slate-600 mb-4">Nog andere vragen?</p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-slate-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-slate-800 transition"
          >
            Direct contact opnemen
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
