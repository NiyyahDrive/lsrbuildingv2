'use client';

import { companyData } from '@/data/companyData';
import { useState } from 'react';

type FormType = 'offerte' | 'contact';

export default function ContactSection() {
  const { company } = companyData;
  const [formType, setFormType] = useState<FormType>('offerte');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    project: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/send-mail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          formType,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to send email');
      }

      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', project: '', message: '' });
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    } catch (err) {
      setError('Er is een fout opgetreden. Probeer het alstublieft opnieuw.');
      console.error('Form error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-white text-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left: Info */}
          <div>
            <p className="text-slate-600 text-sm font-semibold tracking-widest uppercase mb-4">
              Contact
            </p>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-6 text-slate-900">
              Klaar om uw project
              <br />te bespreken?
            </h2>
            <p className="text-slate-600 leading-relaxed mb-10">
              Of u nu een offerte wilt aanvragen of gewoon meer informatie zoekt
              over onze diensten — wij staan voor u klaar. Verwacht een
              reactie binnen 24 uur.
            </p>

            {/* Contact details */}
            <div className="space-y-5">
              <a
                href={`tel:${company.phone}`}
                className="flex items-center gap-4 group"
              >
                <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center group-hover:bg-slate-900 transition">
                  <svg className="w-4 h-4 text-slate-600 group-hover:text-white transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-slate-500 mb-0.5">Telefoon</p>
                  <p className="text-slate-900 font-medium">{company.phone}</p>
                </div>
              </a>

              <a
                href={`tel:${company.phone2}`}
                className="flex items-center gap-4 group"
              >
                <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center group-hover:bg-slate-900 transition">
                  <svg className="w-4 h-4 text-slate-600 group-hover:text-white transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-slate-500 mb-0.5">Telefoon 2</p>
                  <p className="text-slate-900 font-medium">{company.phone2}</p>
                </div>
              </a>

              <a
                href={`mailto:${company.email}`}
                className="flex items-center gap-4 group"
              >
                <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center group-hover:bg-slate-900 transition">
                  <svg className="w-4 h-4 text-slate-600 group-hover:text-white transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-slate-500 mb-0.5">E-mail</p>
                  <p className="text-slate-900 font-medium">{company.email}</p>
                </div>
              </a>
            </div>
          </div>

          {/* Right: Form */}
          <div className="bg-white rounded-2xl p-8">
            {/* Toggle */}
            <div className="flex bg-slate-100 rounded-lg p-1 mb-6">
              <button
                onClick={() => setFormType('offerte')}
                className={`flex-1 text-sm font-semibold py-2 rounded-md transition ${
                  formType === 'offerte'
                    ? 'bg-slate-900 text-white shadow-sm'
                    : 'text-slate-500 hover:text-slate-700'
                }`}
              >
                Offerte Aanvragen
              </button>
              <button
                onClick={() => setFormType('contact')}
                className={`flex-1 text-sm font-semibold py-2 rounded-md transition ${
                  formType === 'contact'
                    ? 'bg-white text-slate-900 shadow-sm'
                    : 'text-slate-500 hover:text-slate-700'
                }`}
              >
                Snel Contact
              </button>
            </div>

            {submitted && !error ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="font-bold text-slate-900 mb-1">Bericht ontvangen!</p>
                <p className="text-slate-500 text-sm">
                  Wij nemen binnen 24 uur contact met u op.
                </p>
              </div>
            ) : error ? (
              <div className="flex flex-col items-center justify-center py-8 text-center">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <p className="font-bold text-red-600 mb-1">Fout</p>
                <p className="text-slate-500 text-sm">{error}</p>
                <button
                  onClick={() => setError(null)}
                  className="mt-4 text-slate-900 font-semibold text-sm hover:text-slate-700"
                >
                  Probeer opnieuw
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Naam *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Uw naam"
                      className="w-full px-3 py-2.5 border border-slate-200 rounded-lg text-sm text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-slate-900 focus:border-transparent outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Telefoon
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+32 ..."
                      className="w-full px-3 py-2.5 border border-slate-200 rounded-lg text-sm text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-slate-900 focus:border-transparent outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    E-mail *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="uw@email.be"
                    className="w-full px-3 py-2.5 border border-slate-200 rounded-lg text-sm text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-slate-900 focus:border-transparent outline-none"
                  />
                </div>

                {formType === 'offerte' && (
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Type project
                    </label>
                    <select
                      name="project"
                      value={formData.project}
                      onChange={handleChange}
                      className="w-full px-3 py-2.5 border border-slate-200 rounded-lg text-sm text-slate-900 focus:ring-2 focus:ring-slate-900 focus:border-transparent outline-none bg-white"
                    >
                      <option value="">Selecteer een type</option>
                      <option>Projectcoördinatie</option>
                      <option>Renovatiewerken</option>
                      <option>Klein bouwproject</option>
                      <option>Veiligheidssupervision</option>
                      <option>Andere</option>
                    </select>
                  </div>
                )}

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    {formType === 'offerte' ? 'Omschrijving project *' : 'Bericht *'}
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    placeholder={
                      formType === 'offerte'
                        ? 'Beschrijf kort uw project, locatie en timing...'
                        : 'Uw vraag of bericht...'
                    }
                    className="w-full px-3 py-2.5 border border-slate-200 rounded-lg text-sm text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-slate-900 focus:border-transparent outline-none resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-slate-900 text-white py-3 rounded-lg font-semibold text-sm hover:bg-slate-800 transition disabled:bg-slate-500 disabled:cursor-not-allowed"
                >
                  {loading ? 'Versturen...' : formType === 'offerte' ? 'Offerte Aanvragen' : 'Bericht Verzenden'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
