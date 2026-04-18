interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  credentials: string[];
  image?: string; // In production: next/image
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: 'Mustafa Alrubaei',
    role: 'Oprichter & Werfleider',
    bio: 'Met meer dan 10 jaar ervaring in complexe bouwprojecten, combineert Mustafa technische expertise met zakelijke efficiëntie. Zijn unieke achtergrond in zowel Civil Engineering als Bedrijfskunde maakt hem ideaal voor projectcoördinatie op alle niveaus.',
    credentials: [
      'B.Sc. Civil Engineering',
      'B.Sc. Bedrijfskunde',
      'VOL VCA gecertificeerd',
      'Steigercontroleur AV-002',
      'IS-006 (kritieke lasten)',
      'AutoCAD & MS Project expert',
    ],
    image: '/images/mustafa.jpg', // Placeholder
  },
];

export default function TeamSection() {
  return (
    <section id="team" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-14">
          <p className="text-slate-600 text-sm font-semibold tracking-widest uppercase mb-4">
            Het Team
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-6">
            Achter LSR Building:
            <br />
            <span className="text-slate-600">De mensen die het mogelijk maken</span>
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            LSR Building wordt geleid door experts met diepgaande kennis van de Belgische
            bouwsector. Geen managers — praktiserende professionals met handen van steen.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="bg-slate-50 rounded-2xl overflow-hidden border border-slate-200 hover:border-slate-300 hover:shadow-lg transition"
            >
              {/* Image placeholder */}
              <div className="h-64 bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-slate-900 rounded-full mx-auto flex items-center justify-center mb-4">
                    <span className="text-white text-3xl font-bold">
                      {member.name.charAt(0)}
                    </span>
                  </div>
                  <p className="text-slate-500 text-xs">Foto beschikbaar</p>
                </div>
              </div>

              {/* Info */}
              <div className="p-8">
                <h3 className="text-xl font-bold text-slate-900 mb-1">{member.name}</h3>
                <p className="text-sm text-slate-600 font-semibold mb-4 uppercase tracking-widest">
                  {member.role}
                </p>

                <p className="text-slate-700 text-sm leading-relaxed mb-6">{member.bio}</p>

                {/* Credentials */}
                <div>
                  <p className="text-xs text-slate-500 uppercase font-semibold mb-3 tracking-widest">
                    Certificaten & Vaardigheden
                  </p>
                  <ul className="space-y-2">
                    {member.credentials.map((cred, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-slate-700">
                        <svg className="w-4 h-4 text-slate-900 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {cred}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Social / Contact CTA */}
                <div className="mt-6 pt-6 border-t border-slate-200">
                  <a
                    href="#contact"
                    className="text-sm font-semibold text-slate-900 hover:text-slate-600 transition"
                  >
                    Direct contact →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Guarantee section */}
        <div className="mt-16 bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-12 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Onze Garantie</h3>
          <p className="text-lg text-slate-200 mb-6 max-w-2xl mx-auto">
            Reactie op alle vragen binnen 4 uur. Consultatie volledig gratis. Als wij denken
            dat een ander bedrijf beter bij je past, zeggen we dat eerlijk.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <div>
              <p className="text-3xl font-bold">4h</p>
              <p className="text-slate-300 text-sm">Garantie reactietijd</p>
            </div>
            <div>
              <p className="text-3xl font-bold">0€</p>
              <p className="text-slate-300 text-sm">Consultatie kosten</p>
            </div>
            <div>
              <p className="text-3xl font-bold">100%</p>
              <p className="text-slate-300 text-sm">Eerlijkheid</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
