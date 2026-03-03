import { cvData } from "@/lib/cv-data";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 py-10 px-4 print:bg-white print:py-0">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden print:shadow-none print:rounded-none">
        {/* Header */}
        <header className="bg-slate-800 text-white px-8 py-10">
          <h1 className="text-3xl font-bold tracking-wide">{cvData.name}</h1>
          <p className="text-lg text-slate-300 mt-1">{cvData.title}</p>
          <div className="mt-4 flex flex-wrap gap-x-6 gap-y-1 text-sm text-slate-300">
            <span>{cvData.location}</span>
            <a href={`mailto:${cvData.email}`} className="hover:text-white underline">
              {cvData.email}
            </a>
            <a
              href={cvData.website}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white underline"
            >
              {cvData.website}
            </a>
          </div>
        </header>

        <div className="px-8 py-8 space-y-10">
          {/* Professional Profile */}
          <Section title="Professional Profile">
            <p className="text-gray-700 leading-relaxed">{cvData.profile}</p>
          </Section>

          {/* Technical Stack */}
          <Section title="Technical Stack">
            <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
              {cvData.techStack.map(({ label, value }) => (
                <div key={label} className="flex flex-col">
                  <dt className="font-semibold text-slate-700 text-sm">{label}</dt>
                  <dd className="text-gray-600 text-sm">{value}</dd>
                </div>
              ))}
            </dl>
          </Section>

          {/* Professional Experience */}
          <Section title="Professional Experience">
            {cvData.experience.map((job) => (
              <div key={job.role}>
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-base font-semibold text-slate-800">{job.role}</h3>
                  <span className="text-sm text-gray-500">
                    {job.period} &mdash; {job.location}
                  </span>
                </div>
                <ul className="mt-2 space-y-1 list-disc list-inside text-gray-700">
                  {job.bullets.map((b) => (
                    <li key={b} className="text-sm">
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </Section>

          {/* Selected Projects */}
          <Section title="Selected Projects">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {cvData.projects.map((project) => (
                <div
                  key={project.name}
                  className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-semibold text-slate-800">{project.name}</h3>
                    {project.url && (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-blue-600 hover:underline shrink-0"
                      >
                        {project.url.replace("https://", "")}
                      </a>
                    )}
                  </div>
                  <p className="text-sm text-gray-600 mt-1">{project.description}</p>
                  <ul className="mt-2 space-y-1 list-disc list-inside">
                    {project.bullets.map((b) => (
                      <li key={b} className="text-xs text-gray-700">
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-6">
              <h3 className="text-sm font-semibold text-slate-700 mb-2">Additional Platforms</h3>
              <div className="flex flex-wrap gap-2">
                {cvData.additionalPlatforms.map((p) =>
                  p.url ? (
                    <a
                      key={p.name}
                      href={p.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs bg-slate-100 text-blue-700 hover:bg-slate-200 px-3 py-1 rounded-full"
                    >
                      {p.name}
                    </a>
                  ) : (
                    <span
                      key={p.name}
                      className="text-xs bg-slate-100 text-gray-500 px-3 py-1 rounded-full"
                    >
                      {p.name}
                    </span>
                  )
                )}
              </div>
            </div>
          </Section>

          {/* Education */}
          <Section title="Education">
            {cvData.education.map((edu) => (
              <div
                key={edu.degree}
                className="flex flex-wrap items-baseline justify-between gap-2"
              >
                <div>
                  <h3 className="font-semibold text-slate-800">{edu.degree}</h3>
                  <p className="text-sm text-gray-600">{edu.institution}</p>
                </div>
                <span className="text-sm text-gray-500">{edu.period}</span>
              </div>
            ))}
          </Section>

          {/* Certifications */}
          <Section title="Certifications">
            <ul className="space-y-1">
              {cvData.certifications.map((cert) => (
                <li key={cert} className="text-sm text-gray-700 flex items-start gap-2">
                  <span className="text-slate-400 mt-0.5">✓</span>
                  {cert}
                </li>
              ))}
            </ul>
          </Section>

          {/* Publication */}
          <Section title="Publication">
            <p className="text-sm text-gray-700 italic">{cvData.publication}</p>
          </Section>

          {/* Languages */}
          <Section title="Languages">
            <div className="flex flex-wrap gap-4">
              {cvData.languages.map(({ language, proficiency }) => (
                <div key={language} className="flex items-center gap-2">
                  <span className="font-medium text-slate-800 text-sm">{language}</span>
                  <span className="text-xs text-gray-500 bg-gray-100 px-2 py-0.5 rounded">
                    {proficiency}
                  </span>
                </div>
              ))}
            </div>
          </Section>
        </div>

        <footer className="bg-slate-50 border-t border-gray-200 px-8 py-4 text-center text-xs text-gray-400">
          &copy; {new Date().getFullYear()} {cvData.name} &mdash; All rights reserved
        </footer>
      </div>
    </main>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="text-xs font-bold text-slate-800 border-b-2 border-slate-700 pb-1 mb-4 uppercase tracking-widest">
        {title}
      </h2>
      {children}
    </section>
  );
}
