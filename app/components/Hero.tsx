"use client"

import { motion } from "framer-motion"

export default function Hero() {
  return (
    <div className="relative isolate overflow-hidden bg-background">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:gap-x-16 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:flex-shrink-0">
          <motion.h1
            className="mt-10 text-5xl font-serif font-light tracking-tight text-foreground sm:text-7xl text-balance"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Nourish your skin naturally
          </motion.h1>
          <motion.p
            className="mt-6 text-lg leading-relaxed text-muted-foreground text-pretty"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Discover luxurious, natural skincare products crafted with care. Transform your daily routine into a ritual
            of self-care with Beebee.
          </motion.p>
          <motion.div
            className="mt-10 flex items-center gap-x-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <a href="#shop" className="shop-button">
              Shop Now
            </a>
            <a href="#about" className="text-sm font-semibold leading-6 text-foreground hover:text-muted-foreground">
              Learn more <span aria-hidden="true">→</span>
            </a>
          </motion.div>
        </div>
        <motion.div
          className="mx-auto mt-16 lg:mt-0"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="relative">
            <img
              src="/luxury-skincare-products-on-clean-white-surface-wi.jpg"
              alt="Beebee skincare products"
              width={600}
              height={600}
              className="w-full max-w-[500px] rounded-2xl shadow-2xl"
            />
          </div>
        </motion.div>
      </div>
    </div>
  )
}
