'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24">
      {/* Background gradient and effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-helionyx-black via-helionyx-gunmetal/10 to-helionyx-black">
        {/* Animated background elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-helionyx-silver/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-helionyx-platinum/5 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="font-serif text-6xl md:text-7xl font-bold mb-6 text-helionyx-platinum leading-tight">
            Engineered For
            <span className="block gradient-text">Excellence</span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-lg md:text-xl text-helionyx-silver mb-12 max-w-2xl mx-auto"
        >
          Premium research compounds with verified certificates of analysis and uncompromising quality standards.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link href="/shop" className="btn-luxury">
            Shop Research Compounds
          </Link>
          <Link href="/coas" className="btn-luxury-outline">
            View COAs
          </Link>
        </motion.div>

        {/* Hero image placeholder - molecular structure */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-20 relative h-80 flex items-center justify-center"
        >
          <div className="w-80 h-80 relative">
            <svg className="w-full h-full" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Molecular structure visualization */}
              <circle cx="100" cy="100" r="80" fill="none" stroke="#c0c0c0" strokeWidth="0.5" opacity="0.3" />
              <circle cx="100" cy="40" r="8" fill="#e8e8e8" />
              <circle cx="150" cy="80" r="8" fill="#c0c0c0" />
              <circle cx="150" cy="130" r="8" fill="#e8e8e8" />
              <circle cx="100" cy="160" r="8" fill="#c0c0c0" />
              <circle cx="50" cy="130" r="8" fill="#e8e8e8" />
              <circle cx="50" cy="80" r="8" fill="#c0c0c0" />
              <circle cx="100" cy="100" r="10" fill="#e8e8e8" />
              
              {/* Connecting lines */}
              <line x1="100" y1="48" x2="100" y2="90" stroke="#c0c0c0" strokeWidth="1" opacity="0.6" />
              <line x1="100" y1="110" x2="100" y2="152" stroke="#c0c0c0" strokeWidth="1" opacity="0.6" />
              <line x1="108" y1="92" x2="142" y2="78" stroke="#c0c0c0" strokeWidth="1" opacity="0.6" />
              <line x1="108" y1="108" x2="142" y2="122" stroke="#c0c0c0" strokeWidth="1" opacity="0.6" />
              <line x1="92" y1="92" x2="58" y2="78" stroke="#c0c0c0" strokeWidth="1" opacity="0.6" />
              <line x1="92" y1="108" x2="58" y2="122" stroke="#c0c0c0" strokeWidth="1" opacity="0.6" />
            </svg>
            <div className="absolute inset-0 bg-gradient-to-t from-helionyx-black via-transparent to-transparent"></div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
