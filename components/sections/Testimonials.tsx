'use client'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const testimonialsData = [
  {
    text: "ViralyticsPro helped me grow my following by 300% in just 2 months! The AI generates content that actually resonates with my audience.",
    author: "Sarah Johnson",
    role: "Content Creator",
    avatar: "👩‍💼"
  },
  {
    text: "The AI generates content that actually goes viral. Amazing results and so easy to use. My engagement rates have never been higher!",
    author: "Mike Chen",
    role: "Digital Marketer",
    avatar: "👨‍💻"
  },
  {
    text: "Safe, fast, and incredibly effective. The security features give me peace of mind while the results speak for themselves!",
    author: "Emma Davis",
    role: "Influencer",
    avatar: "👩‍🎨"
  }
]

export default function Testimonials() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prev => (prev + 1) % testimonialsData.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="testimonials">
      <div className="container">
        <div className="section-header">
          <h2>Trusted by Content Creators Worldwide</h2>
          <p>See what our users are saying about their success with ViralyticsPro</p>
        </div>

        <div className="testimonials-carousel">
          {testimonialsData.map((t, idx) => (
            <motion.div
              key={idx}
              className={`testimonial-card ${idx === index ? 'active' : ''}`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: idx === index ? 1 : 0, scale: idx === index ? 1 : 0.8 }}
              transition={{ duration: 0.5 }}
            >
              <div className="testimonial-content">
                <p>&quot;{t.text}&quot;</p>
              </div>
              <div className="testimonial-author">
                <div className="author-avatar">{t.avatar}</div>
                <div className="author-info">
                  <h4>{t.author}</h4>
                  <p>{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="carousel-indicators">
          {testimonialsData.map((_, idx) => (
            <button
              key={idx}
              className={`indicator ${idx === index ? 'active' : ''}`}
              onClick={() => setIndex(idx)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
