function Contact() {
  return (
    <div className="min-h-screen cyber-grid pt-24 pb-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold mb-12 text-center glow-text-cyan">
          CONTACT <span className="text-yellow-400">ME</span>
        </h1>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="cyber-border neon-box p-8 hover-lift">
            <div className="text-5xl mb-4">📧</div>
            <h3 className="text-2xl font-bold text-yellow-400 mb-2">Email</h3>
            <p className="text-cyan-300">cyrusbautista@gmail.com</p>
          </div>
          
          <div className="cyber-border neon-box p-8 hover-lift">
            <div className="text-5xl mb-4">📱</div>
            <h3 className="text-2xl font-bold text-yellow-400 mb-2">Phone</h3>
            <p className="text-cyan-300">+63 (906) 031 4419</p>
          </div>
          
          <div className="cyber-border neon-box p-8 hover-lift">
            <div className="text-5xl mb-4">📍</div>
            <h3 className="text-2xl font-bold text-yellow-400 mb-2">Location</h3>
            <p className="text-cyan-300">Cabanatuan City, Nueva Ecija, Region III, Philippines</p>
          </div>
          
          <div className="cyber-border neon-box p-8 hover-lift">
            <div className="text-5xl mb-4">⏰</div>
            <h3 className="text-2xl font-bold text-yellow-400 mb-2">Availability</h3>
            <p className="text-cyan-300">SAT - SUN , 9AM - 6PM PST</p>
          </div>
        </div>
        
        <div className="cyber-border neon-box p-8">
          <h2 className="text-3xl font-bold text-purple-400 mb-6 text-center">Send me an E-mail for Inquiries and further information.</h2>
          
        </div>
      </div>
    </div>
  )
}

export default Contact
