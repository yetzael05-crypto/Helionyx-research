'use client'

import { motion } from 'framer-motion'
import { FiCheck, FiLock, FiTrendingUp, FiZap } from 'react-icons/fi'

const trustItems = [
  {
    icon: FiZap,
    title: '99.9% Purity',
    description: 'Verified laboratory analysis'
  },
  {
    icon: FiCheck,
    title: 'Quality Testing',
    description: 'Triple verification process'
  },
  {
    icon: FiLock,
    title: 'Secure Shipping',
    description: 'Discreet & insured delivery'
  },
  {
    icon: FiTrendingUp,
    title: 'Research Standard',
    description: 'ISO certified compounds'
  },
]

export default function TrustBar() {
  return (
    <section className="py-16 bg-helionyx-gunmetal/20 border-y border-helionyx-gunmetal">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trustItems.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start space-x-4"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-helionyx-silver/10 flex items-center justify-center">
                  <Icon className="text-helionyx-silver" size={24} />
                </div>
                <div>
                  <h3 className="font-medium text-helionyx-platinum mb-1">{item.title}</h3>
                  <p className="text-sm text-helionyx-silver">{item.description}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
