import datamatics from '../assets/datamatics.png'
import taskus from '../assets/TaskUs.webp'

function Experience() {
  const experiences = [
    {
      company: 'Datamatics (Non-Voice)',
      position: 'Executive - Customer Support Representative',
      period: '2021 - 2022',
      image: datamatics,
      description:
        'Alibaba E-commerce Customer Support Representative handling technical issues and providing solutions to customers.'
    },
    {
      company: 'Datamatics (Voice)',
      position: 'Executive - Customer Support Representative',
      period: '2021 - 2022',
      image: datamatics,
      description:
        'Temu E-commerce Customer Support Representative handling technical issues and providing solutions to customers.'
    },
    {
      company: 'TaskUs (Voice)',
      position: 'Executive - Customer Support Representative',
      period: '2026 - Present',
      image: taskus,
      description:
        'US-Based Food-delivery Customer Support Representative handling technical issues and providing solutions to customers.'
    }
  ]

  return (
    <div className="min-h-screen cyber-grid pt-24 pb-12 px-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold mb-12 text-center glow-text-cyan">
          WORK <span className="text-yellow-400">EXPERIENCE</span>
        </h1>

        <div className="space-y-8">
          {experiences.map((exp, idx) => (
            <div key={idx} className="cyber-border neon-box p-8 hover-lift">
              <div className="flex flex-col md:flex-row gap-6">
                {/* Image */}
                <div className="w-24 h-24 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center flex-shrink-0 border-2 border-yellow-400/30">
                  <img
                    src={exp.image}
                    alt={exp.company}
                    className="w-20 h-20 object-contain"
                  />
                </div>

                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                    <div>
                      <h3 className="text-2xl font-bold text-yellow-400 mb-1">
                        {exp.position}
                      </h3>
                      <p className="text-purple-400 text-lg">{exp.company}</p>
                    </div>
                    <span className="text-cyan-400 font-semibold mt-2 md:mt-0">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-cyan-300 leading-relaxed">{exp.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Experience
