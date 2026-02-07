import image from '../assets/NOHIKAWGRAY.jpg'





function About() {
  return (
    <div className="min-h-screen cyber-grid pt-24 pb-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold mb-12 text-center glow-text-cyan">
          ABOUT <span className="text-yellow-400">ME</span>
        </h1>
        
        <div className="cyber-border neon-box p-8 md:p-12 hover-lift mb-8">
          <div className="flex flex-col md:flex-row gap-8 items-center mb-8">
            <div className="w-48 h-48 bg-gradient-to-br from-cyan-500/30 to-purple-500/30 rounded-full border-4 border-cyan-400 flex items-center justify-center">
              <span className="text-8xl ">
                     <img 
                       src={image} 
                       alt="Description" 
                       className="w-full h-full object-cover rounded-full" 
                     />
                     </span>
            </div>
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-yellow-400 mb-4">Hi, I'm Cyrus Bautista</h2>
              <p className="text-cyan-300 text-lg leading-relaxed">
               An Aspiring SoC Analyst and Technical Support Representative with a passion for cybersecurity and technology. I specialize in defending digital landscapes and providing top-notch technical support to ensure seamless user experiences. With a strong foundation in cybersecurity principles and a commitment to continuous learning, I am dedicated to safeguarding your online presence and delivering exceptional solutions.
              </p>
            </div>
          </div>
          
          <div className="border-t border-cyan-500/30 pt-8">
            <h3 className="text-2xl font-bold text-purple-400 mb-4">My Journey</h3>
            <p className="text-cyan-300 text-lg leading-relaxed mb-4">
             With over 1 year of Experience in the field of Customer Support Representative handling concerns that are related to 
             technical issues and providing solutions to customers. I have a strong background in cybersecurity, 
             with hands-on experience in threat detection, incident response, and vulnerability management. I am proficient in 
             various security tools and technologies, and I am always eager to stay updated with the latest trends in the cybersecurity 
             landscape.
            </p>
            <p className="text-cyan-300 text-lg leading-relaxed mb-4">
              I believe in providing the best solutions to customers and clients, ensuring that their technical issues are resolved efficiently and effectively. My goal is to create a secure digital environment while delivering exceptional support to users, making technology accessible and safe for everyone.
            </p>
            <p className="text-cyan-300 text-lg leading-relaxed">
              My goal is to create technology that not only solves problems but also delivers 
              exceptional user experiences. I'm always excited to take on new challenges and 
              collaborate with like-minded individuals.
            </p>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="cyber-border neon-box p-6 hover-lift text-center">
            <div className="text-4xl mb-3">🎯</div>
            <h3 className="text-xl font-bold text-yellow-400 mb-2">Mission</h3>
            <p className="text-cyan-300">Provide the best Solutions and Maintain Top-tier and High Standard Performance</p>
          </div>
          <div className="cyber-border neon-box p-6 hover-lift text-center">
            <div className="text-4xl mb-3">💡</div>
            <h3 className="text-xl font-bold text-yellow-400 mb-2">Vision</h3>
            <p className="text-cyan-300">Continuously Improve and hone Abilities, Never stop learning and Improving</p>
          </div>
          <div className="cyber-border neon-box p-6 hover-lift text-center">
            <div className="text-4xl mb-3">⚡</div>
            <h3 className="text-xl font-bold text-yellow-400 mb-2">Values</h3>
            <p className="text-cyan-300">Integrity, Resilience and Intelligence</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
