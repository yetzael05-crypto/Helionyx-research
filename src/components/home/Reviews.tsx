'use client'

import { motion } from 'framer-motion'
import { FiStar } from 'react-icons/fi'

const reviews = [
  {
    name: 'Dr. Sarah Mitchell',
    role: 'Research Scientist',
    text: 'Exceptional quality and purity. The COAs are thorough and the shipping was incredibly fast.',
    rating: 5
  },
  {
    name: 'Prof. James Chen',
    role: 'Biochemistry Lab Director',
    text: 'Best compounds I\'ve worked with. The precision and consistency across batches is unmatched.',
    rating: 5
  },
  {
    name: 'Dr. Emily Rodriguez',
    role: 'Pharmaceutical Researcher',
    text: 'Premium quality at fair pricing. Their research standards are exactly what we need.',
    rating: 5
  },
  {
    name: 'Prof. Michael Anderson',
    role: 'Chemistry Department Head',
    text: 'Helionyx has become our primary supplier. Reliability and quality are unquestionable.',
    rating: 5
  },
]

export default function Reviews() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mb-16 text-center"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-helionyx-platinum">
            Trusted by Researchers
          </h2>
          <p className="text-helionyx-silver max-w-2xl mx-auto">
            Join thousands of scientists who depend on Helionyx for premium research compounds
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="glass-effect p-8 rounded-xl"
            >
              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <FiStar key={i} size={16} className="fill-helionyx-silver text-helionyx-silver" />
                ))}
              </div>

              {/* Review text */}
              <p className="text-helionyx-platinum mb-6 italic">\"{review.text}\"</p>

              {/* Author */}
              <div>
                <p className="font-medium text-helionyx-platinum">{review.name}</p>
                <p className="text-sm text-helionyx-silver">{review.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
