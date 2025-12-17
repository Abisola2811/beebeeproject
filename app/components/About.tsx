"use client"

import { motion } from "framer-motion"

export default function About() {
  return (
    <section id="about" className="py-24 bg-accent/20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-serif font-light text-foreground mb-6 text-balance">
              Crafted with care, designed for you
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                At Beebee, we believe skincare should be as natural as it is effective. Every product is thoughtfully
                formulated with plant-based ingredients that work in harmony with your skin.
              </p>
              <p>
                Our commitment to sustainability extends beyond our ingredients. We use eco-friendly packaging and
                partner with organizations dedicated to protecting our planet.
              </p>
              <p>
                Founded by skincare enthusiasts who understand the power of simplicity, Beebee is more than a
                brand—it&apos;s a philosophy of mindful beauty.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <img
              src="/natural-botanical-skincare-ingredients-on-white-ba.jpg"
              alt="Natural skincare ingredients"
              className="rounded-2xl shadow-xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
