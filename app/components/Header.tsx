"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ShoppingBagIcon } from "@heroicons/react/24/outline"

export default function Header() {
  const [cartCount] = useState(0)

  return (
    <motion.header
      className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="text-2xl font-serif font-bold tracking-tight text-foreground">Beebee</span>
          </Link>
        </div>
        <div className="flex gap-x-8">
          <Link
            href="#shop"
            className="text-sm font-medium leading-6 text-foreground hover:text-muted-foreground transition-colors"
          >
            Shop
          </Link>
          <Link
            href="#collections"
            className="text-sm font-medium leading-6 text-foreground hover:text-muted-foreground transition-colors"
          >
            Collections
          </Link>
          <Link
            href="#about"
            className="text-sm font-medium leading-6 text-foreground hover:text-muted-foreground transition-colors"
          >
            About
          </Link>
        </div>
        <div className="flex flex-1 justify-end">
          <button className="relative rounded-full p-2 hover:bg-secondary transition-colors">
            <ShoppingBagIcon className="h-6 w-6 text-foreground" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </nav>
    </motion.header>
  )
}
