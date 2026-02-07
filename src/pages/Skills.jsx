function Skills() {
  const skillCategories = [
    {
      category: 'Cybersecurity',
      icon: '💻',
      skills: [
        { name: 'Python', level: 75 },
        { name: 'Nmap', level: 70 },
        { name: 'Kali Linux', level: 67 },
        { name: 'Metasploit', level: 60 },
        { name: 'Wireshark', level: 65 },
        { name: 'Burp Suite', level: 55 }
      ]
    },
    {
      category: 'Technical Skills',
      icon: '🖥️',
      skills: [
        { name: 'Windows OS', level: 83 },
        { name: 'Android OS', level: 82},
        { name: 'Linux OS', level: 74 },
        { name: 'Hardware', level: 86 },
        { name: 'Troubleshooting', level: 88 },
        
      ]
    },
    {
      category: 'Customer Support',
      icon: '🧑',
      skills: [
        { name: 'Chat Support', level: 97 },
        { name: 'Voice Support', level: 95},
        { name: 'Email Support', level:94 },
        
        
      ]
    }
  ]

  return (
    <div className="min-h-screen cyber-grid pt-24 pb-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold mb-12 text-center glow-text-cyan">
          SKILLS & <span className="text-yellow-400">TOOLS</span>
        </h1>
        
        <div className="flex justify-center">
         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl w-full">


            {skillCategories.map((category, idx) => (
              <div key={idx} className="cyber-border neon-box p-8 hover-lift">
                <div className="text-center mb-6">
                  <div className="text-5xl mb-3">{category.icon}</div>
                  <h2 className="text-2xl font-bold text-yellow-400">{category.category}</h2>
                </div>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIdx) => (
                    <div key={skillIdx}>
                      <div className="flex justify-between mb-2">
                        <span className="text-cyan-300 font-medium">{skill.name}</span>
                        <span className="text-purple-400">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-cyan-500 to-yellow-400 transition-all duration-1000"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills