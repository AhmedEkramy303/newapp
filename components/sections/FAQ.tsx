'use client'
import { useState } from 'react'

const faqData = [
  {
    question: "Is my payment information secure?",
    answer:
      "Yes! We use NOWPayments and Bybit Card for secure crypto payments with enterprise-grade encryption. Your financial information is never stored on our servers.",
  },
  {
    question: "What if I'm not satisfied with the results?",
    answer:
      "We offer a 30-day satisfaction guarantee. If you're not happy with the results, we'll provide a full refund, no questions asked.",
  },
  {
    question: "How quickly can I generate content?",
    answer:
      "Our AI generates viral-ready content in under 30 seconds. No waiting, instant results that you can use immediately.",
  },
  {
    question: "Is my generated content private?",
    answer:
      "Absolutely! All generated content is private, secure, and belongs to you. We never share, analyze, or store your ideas beyond the generation process.",
  },
  {
    question: "What platforms are supported?",
    answer:
      "We support all major social platforms including Twitter, Instagram, TikTok, LinkedIn, Facebook, and more. Content is optimized for each platform automatically.",
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i)
  }

  return (
    <section className="faq" id="faq">
      <div className="container">
        <div className="section-header">
          <h2>Frequently Asked Questions</h2>
          <p>Everything you need to know about security, payments, and results</p>
        </div>
        <div className="faq-list">
          {faqData.map((item, idx) => (
            <div className="faq-item" key={idx}>
              <button
                className="faq-question"
                onClick={() => toggle(idx)}
              >
                <span>{item.question}</span>
                <span className="faq-icon">
                  {openIndex === idx ? '–' : '+'}
                </span>
              </button>
              {openIndex === idx && (
                <div className="faq-answer">
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
