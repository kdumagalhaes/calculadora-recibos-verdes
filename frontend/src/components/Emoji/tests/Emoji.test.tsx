import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { describe, it } from 'vitest'
import { Emoji } from '../Emoji'

interface MockedEmojiProps {
  label: string
  symbol: string
}

const MockedEmoji = ({ label, symbol }: MockedEmojiProps) => {
  return <Emoji label={label} symbol={symbol} />
}

describe('Emoji', () => {
  it('should render properly', () => {
    render(<MockedEmoji label="my emoji" symbol="test symbol" />)
    const emojiElement = screen.getByRole('img')
    expect(emojiElement).toBeInTheDocument()
  })

  it('should present correct symbol based on props', () => {
    render(<MockedEmoji label="my emoji" symbol="test symbol" />)
    const emojiElement = screen.getByRole('img')
    expect(emojiElement).toHaveTextContent('test symbol')
  })

  it('should present correct lable based on props', () => {
    render(<MockedEmoji label="my emoji" symbol="test symbol" />)
    const emojiElement = screen.getByLabelText('my emoji')
    expect(emojiElement).toBeInTheDocument()
  })
})
