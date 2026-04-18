import Link from 'next/link';
import { companyData } from '@/data/companyData';

export default function Footer() {
  const { company } = companyData;
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-7 h-7 bg-slate-700 rounded flex items-center justify-center">
                <span className="text-white font-bold text-xs">L</span>
              </div>
              <span className="text-white font-bold">{company.name}</span>
            </div>
            <p className="text-sm leading-relaxed">
              Projectcoördinatie, renovatiewerken en kleine bouwprojecten in België.
              VOL VCA gecertificeerd.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-4">Navigatie</h4>
            <ul className="space-y-2 text-sm">
              {[
                { href: '#over-ons', label: 'Over Ons' },
                { href: '#diensten', label: 'Diensten' },
                { href: '#werken', label: 'Werken' },
                { href: '#contact', label: 'Contact' },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-white transition">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href={`tel:${company.phone}`} className="hover:text-white transition">
                  {company.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${company.email}`} className="hover:text-white transition">
                  {company.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>© {year} {company.name}. Alle rechten voorbehouden.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition">Privacy</a>
            <a href="#" className="hover:text-white transition">Algemene voorwaarden</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
