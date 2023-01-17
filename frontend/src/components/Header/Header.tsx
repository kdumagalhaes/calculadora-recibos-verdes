import { Emoji } from '../Emoji/Emoji'
import { Logo } from '../Logo/Logo'

export function Header() {
  return (
    <header className="container max-w-6xl mx-auto px-2 flex justify-between h-20 items-end max-[980px]:p-4">
      <Logo />
    </header>
  )
}
