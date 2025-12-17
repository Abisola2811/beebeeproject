"use client"

import { motion } from "framer-motion"

const collections = [
  {
    title: "Daily Essentials",
    description: "Your everyday skincare routine, simplified",
    image: "/skincare-routine-products-on-marble-surface.jpg",
  },
  {
    title: "Anti-Aging",
    description: "Turn back time with powerful ingredients",
    image: "/luxury-anti-aging-skincare-products-elegant.jpg",
  },
  {
    title: "Natural Glow",
    description: "Radiance from within, naturally",
    image: "/glowing-skin-skincare-products-botanical.jpg",
  },
]

export default function Collections() {
  return (
    <section id="collections" className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title font-serif">Our Collections</h2>
          <p className="mt-4 text-lg text-muted-foreground">Expertly curated sets for your unique skincare journey</p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {collections.map((collection, index) => (
            <motion.div
              key={collection.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-lg aspect-[4/3] bg-secondary">
                <img
                  src={collection.image || "/placeholder.svg"}
                  alt={collection.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-primary-foreground">
                  <h3 className="text-2xl font-serif font-light mb-2">{collection.title}</h3>
                  <p className="text-sm">{collection.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
