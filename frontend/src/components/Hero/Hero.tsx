import { Emoji } from '../Emoji/Emoji'

export function Hero() {
  return (
    <div className="max-[980px]:mb-8 max-[980px]:p-4">
      <h2 className="text-3xl font-semibold text-green-900 max-[980px]:text-2xl mb-3">
        <span className="mr-3">Calcule seus impostos</span>
        <Emoji label="money with wings" symbol="💸" />
      </h2>
      <p className="max-w-lg leading-relaxed text-slate-600 max-[980px]:max-w-none">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid
        explicabo aperiam porro eveniet. Officiis neque cumque exercitationem
        non odio sit accusantium voluptates odit sint itaque! Earum debitis
        pariatur illo neque!
      </p>
    </div>
  )
}
