import portscanner from '../assets/portscan.jpg'
import sshbruteforcer from '../assets/sshbruteforcer.jpg'





function Projects() {
  const projects = [
    {
      title: 'Portscanner Pentester',
      description: 'Gathering Info with Python and Nmap to identify open ports and potential vulnerabilities in target systems.',
      tech: ['Python', 'Nmap', 'Cybersecurity'],
      image: portscanner
    },

    {
      title: 'Threaded SSH Bruteforcer',
      description: 'a security scripting technique used for testing the strength of SSH credentials by attempting multiple logins simultaneously, rather than sequentially. ',
      tech: ['Python', 'Paramiko', 'pwntools', 'Cybersecurity'],
      image: sshbruteforcer
    }
    
  ]

  return (
    <div className="min-h-screen cyber-grid pt-24 pb-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold mb-12 text-center glow-text-cyan">
          MY <span className="text-yellow-400">PROJECTS</span>
        </h1>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div key={idx} className="cyber-border neon-box p-6 hover-lift">
              <div className="w-full h-48 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 mb-4 flex items-center justify-center overflow-hidden">
                {typeof project.image === 'string' && project.image.length < 5 ? (
                  <span className="text-7xl">{project.image}</span>
                ) : (
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
              <h3 className="text-xl font-bold text-yellow-400 mb-3">{project.title}</h3>
              <p className="text-cyan-300 mb-4 text-sm">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, techIdx) => (
                  <span 
                    key={techIdx} 
                    className="px-3 py-1 bg-cyan-500/20 border border-cyan-500/50 text-cyan-400 text-xs rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects