import { Emoji } from '../Emoji/Emoji'

export function Header() {
  return (
    <header className="container max-w-6xl mx-auto px-2 flex justify-between h-20 items-center">
      <h1 className="flex gap-2 text-4xl">
        <Emoji label="euro banknote" symbol="💶" />
      </h1>
      <div className="flex gap-3 items-center">
        <p className="font-thin">kdumagalhaes</p>
        <a
          className="text-emerald-400 py-1 px-2 rounded bg-emerald-700 hover:bg-emerald-900 transition-colors"
          href="#"
        >
          sair
        </a>
      </div>
    </header>
  )
}
