import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'

function AddReview() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    rating: 5,
    comment: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    
    const newReview = {
      ...formData,
      date: new Date().toLocaleDateString()
    }
    
    const savedReviews = localStorage.getItem('portfolioReviews')
    const reviews = savedReviews ? JSON.parse(savedReviews) : []
    reviews.unshift(newReview)
    localStorage.setItem('portfolioReviews', JSON.stringify(reviews))
    
    alert('Review submitted successfully!')
    navigate('/reviews')
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <div className="min-h-screen cyber-grid pt-24 pb-12 px-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold mb-12 text-center glow-text-cyan">
          ADD <span className="text-yellow-400">REVIEW</span>
        </h1>
        
        <form onSubmit={handleSubmit} className="cyber-border neon-box p-8">
          <div className="mb-6">
            <label className="block text-cyan-400 font-semibold mb-2">Name *</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 cyber-input rounded"
              placeholder="Your name"
            />
          </div>
          
          <div className="mb-6">
            <label className="block text-cyan-400 font-semibold mb-2">Email *</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 cyber-input rounded"
              placeholder="your.email@example.com"
            />
          </div>
          
          <div className="mb-6">
            <label className="block text-cyan-400 font-semibold mb-2">Rating *</label>
            <div className="flex gap-2">
              {[1, 2, 3, 4, 5].map(num => (
                <button
                  key={num}
                  type="button"
                  onClick={() => setFormData(prev => ({ ...prev, rating: num }))}
                  className={`text-3xl transition-colors ${
                    num <= formData.rating ? 'text-yellow-400' : 'text-gray-600'
                  }`}
                >
                  ★
                </button>
              ))}
            </div>
          </div>
          
          <div className="mb-6">
            <label className="block text-cyan-400 font-semibold mb-2">Comment *</label>
            <textarea
              name="comment"
              value={formData.comment}
              onChange={handleChange}
              required
              rows="5"
              className="w-full px-4 py-3 cyber-input rounded resize-none"
              placeholder="Share your thoughts..."
            ></textarea>
          </div>
          
          <div className="flex gap-4">
            <button type="submit" className="cyber-button px-8 py-3 flex-1">
              SUBMIT REVIEW
            </button>
            <Link to="/reviews" className="cyber-button px-8 py-3 flex-1 text-center">
              CANCEL
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddReview
