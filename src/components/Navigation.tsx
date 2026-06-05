'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FiSearch, FiUser, FiShoppingCart, FiMenu, FiX } from 'react-icons/fi'
import { motion } from 'framer-motion'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { label: 'Shop', href: '/shop' },
    { label: 'COAs', href: '/coas' },
    { label: 'About', href: '/about' },
    { label: 'Wholesale', href: '/wholesale' },
    { label: 'Resources', href: '/resources' },
    { label: 'Contact', href: '/contact' },
  ]

  return (
    <nav className="fixed top-0 w-full z-50 bg-helionyx-black/95 backdrop-blur border-b border-helionyx-gunmetal">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <div className="w-12 h-12 bg-gradient-to-br from-helionyx-platinum to-helionyx-silver rounded-lg flex items-center justify-center">
              <span className="font-serif text-lg font-bold text-helionyx-black">HX</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-helionyx-platinum hover:text-helionyx-silver transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-helionyx-gunmetal rounded-lg transition-colors">
              <FiSearch size={20} />
            </button>
            <Link href="/account" className="p-2 hover:bg-helionyx-gunmetal rounded-lg transition-colors">
              <FiUser size={20} />
            </Link>
            <Link href="/cart" className="p-2 hover:bg-helionyx-gunmetal rounded-lg transition-colors relative">
              <FiShoppingCart size={20} />
              <span className="absolute top-1 right-1 w-2 h-2 bg-helionyx-silver rounded-full"></span>
            </Link>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 hover:bg-helionyx-gunmetal rounded-lg transition-colors"
            >
              {isOpen ? <FiX size={20} /> : <FiMenu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 pt-4 border-t border-helionyx-gunmetal"
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block py-2 text-sm font-medium text-helionyx-platinum hover:text-helionyx-silver transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </motion.div>
        )}
      </div>
    </nav>
  )
}
