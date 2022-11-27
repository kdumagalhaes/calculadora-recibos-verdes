import { Calculator } from '../Calculator/Calculator'
import { Hero } from '../Hero/Hero'

export function Wrapper() {
  return (
    <main className="max-h-fit grid grid-cols-2 container max-w-6xl mx-auto px-2 mt-28 max-[980px]:grid-cols-1 mb-10">
      <Hero />
      <Calculator />
    </main>
  )
}
