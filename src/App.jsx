import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Skills from './pages/Skills.jsx'
import Projects from './pages/Projects.jsx'
import Certifications from './pages/Certifications.jsx'
import Experience from './pages/Experience.jsx'
import Reviews from './pages/Reviews.jsx'
import AddReview from './pages/AddReview.jsx'
import Contact from './pages/Contact.jsx'

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#0a0e27] text-white">
        <Navigation />
        <div className="scan-line"></div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/certifications" element={<Certifications />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/add-review" element={<AddReview />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App