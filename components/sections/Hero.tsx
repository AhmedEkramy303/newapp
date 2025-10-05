'use client'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'

export default function Hero() {
  const router = useRouter()

  return (
    <motion.section
      className="hero"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Turn Your Ideas into Viral Content Instantly – Safe & Fast
            </h1>
            <p className="hero-subtitle">
              Create engaging social media content with AI-powered technology.
              Secure payments, instant results, and 30-day satisfaction guarantee.
            </p>
            <div className="hero-cta">
              <button
                className="btn btn--primary btn--lg cta-pulse"
                onClick={() => router.push('/auth/signup')}
              >
                Generate Your First Viral Post
              </button>
              <div className="trust-badges">
                <span className="trust-badge">🔒 Secured Payments</span>
                <span className="trust-badge">✅ 30-Day Guarantee</span>
              </div>
            </div>
          </div>
          <div className="hero-visual">
            <div className="ai-illustration">
              <div className="ai-icon">🤖</div>
              <div className="pulse-rings">
                <div className="pulse-ring"></div>
                <div className="pulse-ring"></div>
                <div className="pulse-ring"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
