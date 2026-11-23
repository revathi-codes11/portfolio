import reference from '../data/referencePortfolio.json';

const slugs = {
  'AI Study Companion': 'ai-study-companion',
  'Intelligent Development Platform (IDP)': 'intelligent-development-platform',
  'Personal Portfolio': 'personal-portfolio',
};

const Projects = () => (
  <section id="projects" className="relative bg-[#0b0b0b] text-white py-24 md:py-32 px-6 md:px-12 overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-red-950/20 via-transparent to-transparent pointer-events-none" />
    <div className="relative max-w-7xl mx-auto">
      <p className="text-red-500 text-xs font-mono tracking-widest mb-4">EPISODE 04 // SELECTED WORK</p>
      <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-12">FEATURED <span className="text-red-600">PROJECTS.</span></h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {reference.projects.map((project) => (
          <article key={project.num} className="rounded-3xl border border-white/15 bg-[#141414] overflow-hidden hover:border-red-600/70 transition-colors shadow-2xl">
            <img src={`/images/${project.image.split('/').pop()}`} alt={`${project.name} project preview`} loading="lazy" className="w-full aspect-video object-cover" />
            <div className="p-6 md:p-8 space-y-4">
              <p className="font-mono text-xs text-red-400">S01 E{project.num} · {project.category}</p>
              <h3 className="text-2xl md:text-3xl font-black">{project.name}</h3>
              <p className="text-sm text-white/80">{project.role}</p>
              <div className="flex flex-wrap gap-2">
                {project.stack.split(', ').map(tag => <span key={tag} className="text-xs px-2 py-1 bg-white/5 rounded border border-white/10">{tag}</span>)}
              </div>
              <ul className="space-y-3 text-sm text-white/70 leading-relaxed">
                {project.bullets.map(bullet => <li key={bullet}>{bullet}</li>)}
              </ul>
              <a href={`https://vishalsuhas-dev.vercel.app/projects/${slugs[project.name]}`} target="_blank" rel="noopener noreferrer" className="inline-flex py-3 text-red-400 hover:text-red-300 font-bold text-sm">Explore project details ↗</a>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
