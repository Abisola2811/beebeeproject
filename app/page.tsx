import Hero from "./components/Hero"
import ProductGrid from "./components/ProductGrid"
import Collections from "./components/Collections"
import About from "./components/About"
import Newsletter from "./components/Newsletter"

export default function Home() {
  return (
    <>
      <Hero />
      <ProductGrid />
      <Collections />
      <About />
      <Newsletter />
    </>
  )
}
