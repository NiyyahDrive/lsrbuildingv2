import { companyData } from '@/data/companyData';

const typeStyles: Record<string, string> = {
  Residentieel: 'bg-slate-50 text-slate-700 border-slate-200',
  Industrieel: 'bg-slate-100 text-slate-700 border-slate-200',
};

export default function ProjectsSection() {
  const { projects } = companyData;

  return (
    <section id="werken" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-14">
          <p className="text-slate-600 text-sm font-semibold tracking-widest uppercase mb-4">
            Referentieprojecten
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight mb-4">
            Bewezen resultaten bij
            <br />grote Belgische spelers.
          </h2>
          <p className="text-slate-500 text-lg">
            Van industriële raffinaderijen tot iconische stadsprojecten — onze
            ervaring spreekt voor zich.
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="border border-slate-100 rounded-xl p-6 hover:border-slate-200 hover:shadow-sm transition"
            >
              {/* Top row */}
              <div className="flex items-start justify-between mb-4">
                <span
                  className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${typeStyles[project.type] ?? 'bg-slate-100 text-slate-600 border-slate-200'}`}
                >
                  {project.type}
                </span>
                <span className="text-slate-400 text-xs">{project.period}</span>
              </div>

              {/* Name + location */}
              <h3 className="text-slate-900 font-bold text-lg leading-tight mb-1">
                {project.name}
              </h3>
              <p className="text-slate-500 text-sm mb-3">{project.location}</p>

              {/* Description */}
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                {project.description}
              </p>

              {/* Company badge */}
              <div className="flex items-center gap-1.5 text-xs text-slate-500">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5" />
                </svg>
                {project.company}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
