"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

const products = [
  {
    id: 1,
    name: "Hydrating Face Serum",
    price: "$48",
    image: "/luxury-face-serum-bottle-minimalist.jpg",
    category: "Serums",
  },
  {
    id: 2,
    name: "Gentle Cleansing Balm",
    price: "$36",
    image: "/cleansing-balm-jar-natural-skincare.jpg",
    category: "Cleansers",
  },
  {
    id: 3,
    name: "Brightening Vitamin C",
    price: "$52",
    image: "/vitamin-c-serum-dropper-bottle-elegant.jpg",
    category: "Serums",
  },
  {
    id: 4,
    name: "Night Recovery Cream",
    price: "$64",
    image: "/luxury-night-cream-jar-minimalist-skincare.jpg",
    category: "Moisturizers",
  },
  {
    id: 5,
    name: "Rose Water Toner",
    price: "$32",
    image: "/rose-water-toner-spray-bottle-elegant.jpg",
    category: "Toners",
  },
  {
    id: 6,
    name: "Eye Renewal Complex",
    price: "$56",
    image: "/eye-cream-tube-luxury-packaging.jpg",
    category: "Eye Care",
  },
]

export default function ProductGrid() {
  return (
    <section id="shop" className="py-24 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title font-serif">Featured Products</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Carefully curated skincare essentials for every skin type
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="product-card border-0 shadow-sm">
                <CardContent className="p-0">
                  <div className="aspect-square overflow-hidden bg-secondary">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">{product.category}</p>
                    <h3 className="text-lg font-medium text-foreground mb-2">{product.name}</h3>
                    <div className="flex items-center justify-between">
                      <p className="text-xl font-semibold text-foreground">{product.price}</p>
                      <button className="px-4 py-2 text-sm font-medium bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
