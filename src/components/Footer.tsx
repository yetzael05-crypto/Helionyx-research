'use client'

import Link from 'next/link'
import { FiPhone, FiMail, FiMapPin } from 'react-icons/fi'

export default function Footer() {
  return (
    <footer className="bg-helionyx-black border-t border-helionyx-gunmetal mt-24">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-xl font-bold mb-4 gradient-text">Helionyx</h3>
            <p className="text-sm text-helionyx-silver mb-4">Premium scientific compounds engineered for excellence.</p>
            <div className="flex space-x-4">
              {['twitter', 'linkedin', 'instagram'].map((social) => (
                <button key={social} className="w-10 h-10 rounded-lg bg-helionyx-gunmetal hover:bg-helionyx-silver/20 transition-colors flex items-center justify-center">
                  <span className="text-xs font-bold">{social[0].toUpperCase()}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-medium mb-4">Shop</h4>
            <ul className="space-y-2 text-sm text-helionyx-silver">
              <li><Link href="/shop" className="hover:text-helionyx-platinum transition-colors">All Products</Link></li>
              <li><Link href="/shop?category=peptides" className="hover:text-helionyx-platinum transition-colors">Peptides</Link></li>
              <li><Link href="/shop?category=compounds" className="hover:text-helionyx-platinum transition-colors">Compounds</Link></li>
              <li><Link href="/shop?category=reagents" className="hover:text-helionyx-platinum transition-colors">Reagents</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-medium mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-helionyx-silver">
              <li><Link href="/about" className="hover:text-helionyx-platinum transition-colors">About Us</Link></li>
              <li><Link href="/research" className="hover:text-helionyx-platinum transition-colors">Research</Link></li>
              <li><Link href="/coas" className="hover:text-helionyx-platinum transition-colors">COAs</Link></li>
              <li><Link href="/contact" className="hover:text-helionyx-platinum transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-medium mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-helionyx-silver">
              <li className="flex items-center space-x-3">
                <FiPhone size={16} />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <FiMail size={16} />
                <span>support@helionyx.com</span>
              </li>
              <li className="flex items-start space-x-3">
                <FiMapPin size={16} className="mt-0.5" />
                <span>San Francisco, CA</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-helionyx-gunmetal pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-xs text-helionyx-silver">
            <p>&copy; 2026 Helionyx Research. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="hover:text-helionyx-platinum transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-helionyx-platinum transition-colors">Terms of Service</Link>
              <Link href="/shipping" className="hover:text-helionyx-platinum transition-colors">Shipping Info</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
