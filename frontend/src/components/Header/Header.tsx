import { Emoji } from '../Emoji/Emoji'

export function Header() {
  return (
    <header className="container mx-auto px-2 flex justify-between h-16 items-center">
      <h1 className="flex gap-2">
        Calculadora • Recibos Verdes
        <Emoji label="money-mouth face" symbol="🤑" />
      </h1>
      <div className="flex gap-3">
        <span>kdumagalhaes</span>
        <a href="#">sair</a>
      </div>
    </header>
  )
}
