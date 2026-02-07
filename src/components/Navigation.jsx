import { useState } from 'react'
import { Link } from 'react-router-dom'

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  
  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/skills', label: 'Skills' },
    { path: '/projects', label: 'Projects' },
    { path: '/certifications', label: 'Certifications' },
    { path: '/experience', label: 'Experience' },
    { path: '/reviews', label: 'Reviews' },
    { path: '/add-review', label: 'Add Review' },
    { path: '/contact', label: 'Contact' }
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-[#0a0e27] via-[#1a1e3f] to-[#0a0e27] border-b border-cyan-500/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-2xl font-bold glow-text-cyan tracking-wider">
            CYBERSECURITY<span className="text-yellow-400">CY</span>
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-1">
            {navItems.map(item => (
              <Link
                key={item.path}
                to={item.path}
                className="px-3 py-2 text-cyan-400 hover:text-yellow-400 transition-colors duration-300 text-sm font-medium tracking-wide"
              >
                {item.label}
              </Link>
            ))}
          </div>
          
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-cyan-400 hover:text-yellow-400"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#0a0e27] border-t border-cyan-500/30">
          {navItems.map(item => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setIsMenuOpen(false)}
              className="block px-4 py-3 text-cyan-400 hover:text-yellow-400 hover:bg-cyan-500/10 transition-colors duration-300"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  )
}

export default Navigation