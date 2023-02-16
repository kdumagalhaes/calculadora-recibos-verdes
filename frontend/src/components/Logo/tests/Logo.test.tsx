import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { describe, it } from 'vitest'
import { Logo } from '../Logo'

describe('Logo', () => {
  it('should present the correct text', () => {
    render(<Logo />)
    const titleElement = screen.getByRole('heading', {
      name: /calculadora de recibos verdes/i,
    })
    expect(titleElement).toBeInTheDocument()
  })
})
