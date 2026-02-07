import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function Reviews() {
  const [reviews, setReviews] = useState([])

  useEffect(() => {
    const savedReviews = localStorage.getItem('portfolioReviews')
    if (savedReviews) {
      setReviews(JSON.parse(savedReviews))
    }
  }, [])

  return (
    <div className="min-h-screen cyber-grid pt-24 pb-12 px-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold mb-12 text-center glow-text-cyan">
          REVIEWS & <span className="text-yellow-400">COMMENTS</span>
        </h1>
        
        {reviews.length === 0 ? (
          <div className="cyber-border neon-box p-12 text-center">
            <p className="text-cyan-300 text-xl mb-6">No reviews yet. Be the first to leave a comment!</p>
            <Link to="/add-review" className="cyber-button px-6 py-3 inline-block">
              ADD REVIEW
            </Link>
          </div>
        ) : (
          <>
            <div className="space-y-6 mb-8">
              {reviews.map((review, idx) => (
                <div key={idx} className="cyber-border neon-box p-6 hover-lift">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-yellow-400">{review.name}</h3>
                      <p className="text-cyan-500 text-sm">{review.email}</p>
                    </div>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className={i < review.rating ? 'text-yellow-400' : 'text-gray-600'}>
                          ★
                        </span>
                      ))}
                    </div>
                  </div>
                  <p className="text-cyan-300 mb-2">{review.comment}</p>
                  <p className="text-purple-400 text-xs">{review.date}</p>
                </div>
              ))}
            </div>
            <div className="text-center">
              <Link to="/add-review" className="cyber-button px-6 py-3 inline-block">
                ADD YOUR REVIEW
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default Reviews
