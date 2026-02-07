import { Link } from 'react-router-dom'
import port from '../assets/portfolio.webp'
import tech from '../assets/cutting.avif'

function Home() {
  return (
    <div className="min-h-screen cyber-grid pt-24 pb-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 glitch glow-text-cyan" data-text="CYRUS PADILLA BAUTISTA">
            CYRUS PADILLA BAUTISTA
          </h1>
          <p className="text-2xl md:text-4xl text-yellow-400 glow-text-yellow mb-4">
            SoC ANALYST & TECHNICAL SUPPORT REPRESENTATIVE
          </p>
          <p className="text-xl text-purple-400 opacity-80">
            DEFENDING YOUR CYBERSPACE WITH CUTTING-EDGE SOLUTIONS
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="cyber-border neon-box p-8 hover-lift">
            <div className="w-full h-64 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 mb-4 flex items-center justify-center">
                     <img 
                       src={port} 
                       alt="Description" 
                       className="w-full h-full object-cover" 
                     />
            </div>
            <h3 className="text-2xl font-bold text-yellow-400 mb-3">Welcome to My Showcase</h3>
            <p className="text-cyan-300">
              Explore my Abilities and talents in cybersecurity and technical support, where I combine expertise with a passion for innovation to create secure and efficient digital solutions.
            </p>
          </div>
          
          <div className="cyber-border neon-box p-8 hover-lift">
            <div className="w-full h-64 bg-gradient-to-br from-yellow-500/20 to-cyan-500/20 mb-4 flex items-center justify-center">
               <img 
                       src={tech} 
                       alt="Description" 
                       className="w-full h-full object-cover" 
                     />
            </div>
            <h3 className="text-2xl font-bold text-cyan-400 mb-3">Cutting Edge Tech</h3>
            <p className="text-cyan-300">
              Modern Solutions to safeguard your digital world. From advanced threat detection to seamless technical support, I leverage the latest technologies to protect and empower your online presence.
            </p>
          </div>
        </div>
        
        <div className="text-center">
          <Link to="/projects" className="cyber-button px-8 py-4 inline-block text-lg">
            VIEW MY WORK
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home
