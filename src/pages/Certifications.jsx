import { useState, useEffect } from 'react'
import MIMO from '../assets/mimopython.png'
import ISC2 from '../assets/isc2-candidate.png'
import ITC from '../assets/itc.png'
import IMA from '../assets/ima.png'
import CHB from '../assets/chb.png'
import NFC from '../assets/nfc.png'

function Certifications() {
  const [activeCert, setActiveCert] = useState(null)
  const [showModal, setShowModal] = useState(false)

  // Open modal with animation
  const openModal = (cert) => {
    setActiveCert(cert)
    setShowModal(true)
  }

  // Close modal with animation
  const closeModal = () => {
    setShowModal(false)
    setTimeout(() => setActiveCert(null), 300) // wait for animation
  }

  // Close modal on ESC key
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') closeModal()
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [])

  const certifications = [
    {
      title: 'MIMO Python Programming Certificate',
      issuer: 'MIMO',
      date: '2025',
      image: MIMO,
      isImage: true,
      description:
        'Certification in Python programming, covering fundamentals, data structures, and practical applications.'
    },
    {
      title: 'Introduction to Cybersecurity',
      issuer: 'Cisco Networking Academy',
      date: '2025',
      image: ITC,
      isImage: true,
      description:
        'Cisco verifies the earner of this badge successfully completed the Introduction to Cybersecurity course. The holder of this student-level credential has introductory knowledge of cybersecurity, including the global implications of cyber threats on industries, and why cybersecurity is a growing profession. They understand vulnerabilities and threat detection and defense. They also have insight into opportunities available with pursuing cybersecurity certifications.'
    },
    {
      title: 'Introduction to Modern AI',
      issuer: 'Cisco Networking Academy',
      date: '2025',
      image: IMA,
      isImage: true,
      description:
        'Cisco verifies the earner of this badge successfully completed the Introduction to Modern AI course. The learner will have practiced using AI enabled features on free apps, such as photo apps, translation services, and chatbots. They will have had in depth practice in prompting a chatbot, and understand fundamentals of how the models work, which informs how they prompt chatbots.'
    },
    {
      title: 'Computer Hardware Basics',
      issuer: 'Cisco Networking Academy',
      date: '2025',
      image: CHB,
      isImage: true,
      description:
        'Cisco verifies the earner of this badge successfully completed the Computer Hardware Basics course and achieved this student level credential. Earner has fundamentals knowledge of computers and mobile devices, how they work, as well as the basic concepts and skills needed to install components to build, repair, upgrade personal computers and and basic troubleshooting tools and techniques.'
    },
    {
      title: 'ISC2 Candidate',
      issuer: 'ISC2',
      date: '2025',
      image: ISC2,
      isImage: true,
      description:
        'ISC2 Candidates are individuals pursuing or considering a cybersecurity certification. To become a Candidate, the individual must apply online and provide minimum identifying information, as well as affirm that they will abide by the ISC2 Code of Ethics and Privacy Policy.'
    },
    {
      title: 'Network Fundamentals Certificate',
      issuer: 'Cybrary',
      date: '2025',
      image: NFC,
      isImage: true,
      description:
        'an entry-level, self-paced, online training course designed for individuals looking to start a career in IT or Cybersecurity. It covers foundational concepts of network infrastructure, security, and hardware, including the OSI and TCP/IP models. '
    }
  ]

  return (
    <div className="min-h-screen cyber-grid pt-24 pb-12 px-4 relative">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <h1 className="text-5xl md:text-6xl font-bold mb-2 text-center glow-text-cyan">
          CERTIFICATIONS
        </h1>

        {/* Click hint below header */}
        <p className="text-cyan-400 text-center italic mb-12">
          CLICK A CERTIFICATE TO VIEW FULL SIZE
        </p>

        {/* Grid of certifications */}
        <div className="grid md:grid-cols-2 gap-8">
          {certifications.map((cert, idx) => (
            <div
              key={idx}
              onClick={() => cert.isImage && openModal(cert)}
              className={`cyber-border neon-box p-6 hover-lift flex gap-6 cursor-pointer ${
                cert.isImage ? 'hover:scale-105 transition-transform' : ''
              }`}
            >
              <div className="w-32 h-32 bg-gradient-to-br from-yellow-500/20 to-cyan-500/20 flex items-center justify-center flex-shrink-0 border-2 border-cyan-400/30">
                {cert.isImage ? (
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-20 h-20 object-contain"
                  />
                ) : (
                  <span className="text-5xl">{cert.image}</span>
                )}
              </div>

              <div className="flex-1">
                <h3 className="text-xl font-bold text-yellow-400 mb-2">
                  {cert.title}
                </h3>
                <p className="text-purple-400 text-sm mb-2">{cert.issuer}</p>
                <p className="text-cyan-500 text-sm mb-3 font-semibold">
                  {cert.date}
                </p>
                <p className="text-cyan-300 text-sm">{cert.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Overlay with Fade + Zoom */}
      {activeCert && (
        <div
          className={`fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 transition-opacity duration-300 ${
            showModal ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
          onClick={closeModal}
        >
          <div
            className={`relative bg-black p-6 border-2 border-cyan-400 neon-box transform transition-transform duration-300 ${
              showModal ? 'scale-100' : 'scale-90'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={activeCert.image}
              alt={activeCert.title}
              className="max-w-[90vw] max-h-[80vh] object-contain"
            />
            <p className="text-center text-cyan-300 mt-4 text-sm">
              {activeCert.title}
            </p>
          </div>
        </div>
      )}
    </div>
  )
}

export default Certifications
