import { companyData } from '@/data/companyData';

export default function AboutSection() {
  const { credentials } = companyData;

  return (
    <section id="over-ons" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: Story */}
          <div>
            <p className="text-slate-600 text-sm font-semibold tracking-widest uppercase mb-4">
              Over LSR Building
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight mb-6">
              De brug tussen techniek
              <br />en organisatie.
            </h2>
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                Bij LSR Building vormt jarenlange praktijkervaring in complexe
                bouwprojecten de fundering van onze dienstverlening. Onder leiding
                van <strong className="text-slate-900">Mustafa Alrubaei</strong> combineren
                wij technisch vernuft met een strakke projectmatige aanpak.
              </p>
              <p>
                Mustafa's unieke troef: een dubbele bachelor in zowel{' '}
                <strong className="text-slate-900">Civil Engineering</strong> als{' '}
                <strong className="text-slate-900">Bedrijfskunde</strong>. In de
                bouwsector betekent dit dat wij niet alleen begrijpen hoe er
                gebouwd moet worden, maar ook hoe het financieel en organisatorisch
                efficiënt moet verlopen.
              </p>
              <p>
                Als werfleider bij gerenommeerde spelers zoals Dethier, Verwater
                en Van Laere bouwden wij diepgaande kennis op van industriële sites,
                residentiële projecten en civiele werken — en de hoge standaarden
                die daarmee gepaard gaan.
              </p>
            </div>

            {/* Reference companies */}
            <div className="mt-8">
              <p className="text-xs text-slate-400 uppercase tracking-widest font-semibold mb-4">
                Ervaring opgedaan bij
              </p>
              <div className="flex flex-wrap gap-3">
                {['Dethier', 'Verwater', 'Van Laere'].map((co) => (
                  <span
                    key={co}
                    className="px-4 py-2 border border-slate-200 text-slate-700 text-sm font-medium rounded-lg bg-slate-50"
                  >
                    {co}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Credentials */}
          <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
            <h3 className="text-lg font-bold mb-6 text-slate-900">Certificaten & Expertise</h3>
            <ul className="space-y-4">
              {credentials.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-slate-200 border border-slate-300 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-slate-700 text-sm">{item}</span>
                </li>
              ))}
            </ul>

            {/* The golden combination callout */}
            <div className="mt-8 pt-8 border-t border-slate-200">
              <div className="flex gap-3 items-start">
                <div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <p className="text-slate-900 font-semibold text-sm">De gouden combinatie</p>
                  <p className="text-slate-600 text-xs mt-1 leading-relaxed">
                    Civil Engineering + Bedrijfskunde. Wij spreken de taal van
                    de bouwplaats én die van de opdrachtgever.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
