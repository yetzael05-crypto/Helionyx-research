'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FiShoppingCart, FiStar } from 'react-icons/fi'

const products = [
  {
    id: 1,
    name: 'Peptide Alpha-1',
    category: 'Peptides',
    price: '$249.99',
    rating: 4.9,
    reviews: 128,
    image: '🧬',
    badge: 'Best Seller'
  },
  {
    id: 2,
    name: 'Research Compound X',
    category: 'Compounds',
    price: '$189.99',
    rating: 4.8,
    reviews: 96,
    image: '⚗️',
    badge: 'Top Rated'
  },
  {
    id: 3,
    name: 'Lab Reagent Pro',
    category: 'Reagents',
    price: '$149.99',
    rating: 4.7,
    reviews: 64,
    image: '🧪',
    badge: 'Popular'
  },
  {
    id: 4,
    name: 'Reference Standard',
    category: 'Standards',
    price: '$299.99',
    rating: 4.9,
    reviews: 112,
    image: '📊',
    badge: 'Premium'
  },
]

export default function BestSellers() {
  return (
    <section className="py-24 bg-helionyx-gunmetal/10">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mb-16 text-center"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-helionyx-platinum">
            Best Sellers
          </h2>
          <p className="text-helionyx-silver max-w-2xl mx-auto">
            Most trusted products from our research community
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group"
            >
              <Link href={`/product/${product.id}`}>
                <div className="glass-effect rounded-xl overflow-hidden h-full flex flex-col">
                  {/* Product image area */}
                  <div className="relative h-48 bg-gradient-to-br from-helionyx-silver/10 to-helionyx-gunmetal/20 flex items-center justify-center overflow-hidden">
                    <span className="text-6xl group-hover:scale-110 transition-transform">{product.image}</span>
                    {product.badge && (
                      <div className="absolute top-4 right-4 bg-helionyx-silver text-helionyx-black px-3 py-1 rounded-lg text-xs font-bold">
                        {product.badge}
                      </div>
                    )}
                  </div>

                  {/* Product info */}
                  <div className="p-6 flex-grow flex flex-col">
                    <p className="text-xs text-helionyx-silver uppercase tracking-wider mb-2">{product.category}</p>
                    <h3 className="font-medium text-helionyx-platinum mb-4 group-hover:text-helionyx-silver transition-colors">
                      {product.name}
                    </h3>

                    {/* Rating */}
                    <div className="flex items-center space-x-2 mb-4">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <FiStar key={i} size={14} className="fill-helionyx-silver text-helionyx-silver" />
                        ))}
                      </div>
                      <span className="text-xs text-helionyx-silver">({product.reviews})</span>
                    </div>

                    {/* Price and CTA */}
                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-helionyx-gunmetal">
                      <span className="font-medium text-helionyx-platinum">{product.price}</span>
                      <button className="p-2 hover:bg-helionyx-gunmetal/50 rounded-lg transition-colors">
                        <FiShoppingCart size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
