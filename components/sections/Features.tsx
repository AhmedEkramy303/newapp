'use client'
import { motion } from 'framer-motion'

export default function Features() {
  const featuresData = [
    {
      icon: "🤖",
      title: "AI Content Generator",
      description: "Create viral content in seconds with advanced AI technology that understands trends and engagement patterns."
    },
    {
      icon: "📈",
      title: "Viral Post Templates",
      description: "Pre-made templates proven to boost engagement and reach across all social media platforms."
    },
    {
      icon: "🚀",
      title: "Multi-Platform Auto-Posting",
      description: "Publish to all social platforms instantly with optimized formatting for each platform."
    }
  ]

  return (
    <section className="features" id="features">
      <div className="container">
        <div className="section-header">
          <h2>Powerful Features for Viral Content</h2>
          <p>Everything you need to create engaging content that drives results</p>
        </div>
        <div className="features-grid">
          {featuresData.map((feature, index) => (
            <motion.div
              key={index}
              className="feature-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -5,
                transition: { duration: 0.2 }
              }}
            >
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
