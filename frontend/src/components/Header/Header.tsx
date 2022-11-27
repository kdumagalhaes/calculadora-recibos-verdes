import { Emoji } from '../Emoji/Emoji'
import { Logo } from '../Logo/Logo'

export function Header() {
  return (
    <header className="container max-w-6xl mx-auto px-2 flex justify-between h-20 items-end max-[980px]:p-4">
      <Logo />
      <div className="flex gap-3 items-center">
        <p className="font-thin">kdumagalhaes</p>
        <a
          className="text-emerald-400 py-1 px-2 rounded bg-emerald-700 hover:bg-emerald-900 transition-colors"
          href="#"
        >
          Sair
        </a>
      </div>
    </header>
  )
}
