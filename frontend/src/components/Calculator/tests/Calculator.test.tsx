import '@testing-library/jest-dom'
import { screen, render, fireEvent } from '@testing-library/react'
import { describe, it } from 'vitest'
import { Calculator } from '../Calculator'

describe('Calculator', () => {
  it('should render Calculator form properly', () => {
    render(<Calculator />)
    const formElement = screen.getByRole('form')
    expect(formElement).toBeInTheDocument()
  })

  it('should be able to type into first input', () => {
    render(<Calculator />)
    const firstInputElement = screen.getByTestId(
      'input-first-month',
    ) as HTMLInputElement
    fireEvent.click(firstInputElement)
    fireEvent.input(firstInputElement, { target: { value: '100' } })
    expect(firstInputElement.value).toBe('100')
  })

  it('should be able to type into second input', () => {
    render(<Calculator />)
    const secondInputElement = screen.getByTestId(
      'input-second-month',
    ) as HTMLInputElement
    fireEvent.click(secondInputElement)
    fireEvent.input(secondInputElement, { target: { value: '200' } })
    expect(secondInputElement.value).toBe('200')
  })

  it('should be able to type into third input', () => {
    render(<Calculator />)
    const thirdInputElement = screen.getByTestId(
      'input-third-month',
    ) as HTMLInputElement
    fireEvent.click(thirdInputElement)
    fireEvent.input(thirdInputElement, { target: { value: '300' } })
    expect(thirdInputElement.value).toBe('300')
  })
})

describe('Calculator result', () => {
  it('should present the right total gross based on user input', () => {
    render(<Calculator />)
    const buttonElement = screen.getByRole('button', { name: 'Calcular' })
    const firstInputElement = screen.getByTestId(
      'input-first-month',
    ) as HTMLInputElement
    fireEvent.click(firstInputElement)
    fireEvent.input(firstInputElement, { target: { value: '300' } })
    const secondInputElement = screen.getByTestId(
      'input-second-month',
    ) as HTMLInputElement
    fireEvent.click(secondInputElement)
    fireEvent.input(secondInputElement, { target: { value: '300' } })
    const thirdInputElement = screen.getByTestId(
      'input-third-month',
    ) as HTMLInputElement
    fireEvent.click(thirdInputElement)
    fireEvent.input(thirdInputElement, { target: { value: '300' } })
    fireEvent.click(buttonElement)
    const totalGrossElement = screen.getByTestId('total-gross')

    expect(totalGrossElement).toHaveTextContent('900,00 €')
  })

  it('should present the right relevant income based on user input', () => {
    render(<Calculator />)
    const buttonElement = screen.getByRole('button', { name: 'Calcular' })
    const firstInputElement = screen.getByTestId(
      'input-first-month',
    ) as HTMLInputElement
    fireEvent.click(firstInputElement)
    fireEvent.input(firstInputElement, { target: { value: '300' } })
    const secondInputElement = screen.getByTestId(
      'input-second-month',
    ) as HTMLInputElement
    fireEvent.click(secondInputElement)
    fireEvent.input(secondInputElement, { target: { value: '300' } })
    const thirdInputElement = screen.getByTestId(
      'input-third-month',
    ) as HTMLInputElement
    fireEvent.click(thirdInputElement)
    fireEvent.input(thirdInputElement, { target: { value: '300' } })
    fireEvent.click(buttonElement)
    const relevantIncome = screen.getByTestId('relevant-income')

    expect(relevantIncome).toHaveTextContent('630,00 €')
  })

  it('should present the right monthly tax based on user input', () => {
    render(<Calculator />)
    const buttonElement = screen.getByRole('button', { name: 'Calcular' })
    const firstInputElement = screen.getByTestId(
      'input-first-month',
    ) as HTMLInputElement
    fireEvent.click(firstInputElement)
    fireEvent.input(firstInputElement, { target: { value: '300' } })
    const secondInputElement = screen.getByTestId(
      'input-second-month',
    ) as HTMLInputElement
    fireEvent.click(secondInputElement)
    fireEvent.input(secondInputElement, { target: { value: '300' } })
    const thirdInputElement = screen.getByTestId(
      'input-third-month',
    ) as HTMLInputElement
    fireEvent.click(thirdInputElement)
    fireEvent.input(thirdInputElement, { target: { value: '300' } })
    fireEvent.click(buttonElement)
    const monthlyTax = screen.getByTestId('monthly-tax')

    expect(monthlyTax).toHaveTextContent('44,94 €')
  })
})
