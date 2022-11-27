interface EmojiProps {
  label: string
  symbol: string
}

export function Emoji({ label, symbol }: EmojiProps) {
  return (
    <span
      role="img"
      aria-label={label || ''}
      aria-hidden={label ? 'false' : 'true'}
    >
      {symbol}
    </span>
  )
}
