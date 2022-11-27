import { Emoji } from '../Emoji/Emoji'

export function Hero() {
  return (
    <main className="container max-w-6xl mx-auto px-2 mt-32">
      <h2 className="mb-5 text-3xl font-semibold text-green-900">
        <span className="mr-3">Calcule seus impostos</span>
        <Emoji label="money with wings" symbol="💸" />
      </h2>
      <p className="max-w-lg leading-relaxed text-slate-600">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid
        explicabo aperiam porro eveniet. Officiis neque cumque exercitationem
        non odio sit accusantium voluptates odit sint itaque! Earum debitis
        pariatur illo neque!
      </p>
    </main>
  )
}
