import { useState, ChangeEvent, FormEvent, useRef, useEffect } from 'react'
import { formatMoney } from '../../utils/formatMoney'
import autoAnimate from '@formkit/auto-animate'

export function Calculator() {
  const [data, setData] = useState({
    firstMonth: 0,
    secondMonth: 0,
    thirdMonth: 0,
  })
  const [isResult, setIsResult] = useState(false)
  const parent = useRef<HTMLDivElement>(null)
  const bottomDiv = useRef<HTMLDivElement>(null)

  useEffect(() => {
    parent.current && autoAnimate(parent.current)
  }, [parent])

  const scrollToBottom = () => {
    const timer = setTimeout(() => {
      parent.current?.scrollIntoView({
        behavior: 'smooth',
      })
    }, 300)
    return () => clearTimeout(timer)
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsResult(true)
  }

  const handleData = (prop: string, event: ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [prop]: Number(event.target.value) })
  }

  const totalGross = data.firstMonth + data.secondMonth + data.thirdMonth
  const relevantIncome = totalGross * 0.7
  const monthlyTax = (relevantIncome * (21.4 / 100)) / 3

  return (
    <div>
      <form
        role="form"
        onSubmit={handleSubmit}
        className="bg-emerald-50 h-max p-4 text-emerald-800 font-light rounded-t-lg flex flex-col gap-2 border border-emerald-100"
      >
        <label htmlFor="first-month">
          <strong>Primeiro</strong> mês
        </label>
        <input
          className="p-3 placeholder:text-emerald-600/40 rounded border border-emerald-100"
          id="first-month"
          name="first-month"
          type="number"
          placeholder="Insira o faturamento mensal"
          onChange={(e) => handleData('firstMonth', e)}
          autoFocus
          required
          data-testid="input-first-month"
        />

        <label htmlFor="second-month">
          <strong>Segundo</strong> mês
        </label>
        <input
          className="p-3 placeholder:text-emerald-600/40 rounded border border-emerald-100"
          id="second-month"
          name="second-month"
          type="number"
          placeholder="Insira o faturamento mensal"
          onChange={(e) => handleData('secondMonth', e)}
          required
          data-testid="input-second-month"
        />

        <label htmlFor="third-month">
          <strong>Terceiro</strong> mês
        </label>
        <input
          className="p-3 placeholder:text-emerald-600/40 rounded border border-emerald-100"
          id="third-month"
          name="third-month"
          type="number"
          placeholder="Insira o faturamento mensal"
          onChange={(e) => handleData('thirdMonth', e)}
          required
          data-testid="input-third-month"
        />
        <button
          onClick={scrollToBottom}
          className="bg-emerald-500 rounded p-3 hover:bg-emerald-900 transition-colors text-emerald-100 mt-5"
        >
          Calcular
        </button>
      </form>
      <div ref={parent}>
        {isResult && (
          <div className="bg-emerald-100 p-4 text-emerald-800 flex flex-col gap-2 rounded-b-lg">
            <div className="flex justify-between items-center border-b-2 border-emerald-200/60 mb-3 pb-1">
              <p className="font-light">Faturamento trimestral bruto</p>
              <span className="font-light" data-testid="total-gross">
                {formatMoney(totalGross)}
              </span>
            </div>
            <div className="flex justify-between items-center border-b-2 border-emerald-200/60 mb-3 pb-1">
              <p className="font-light">Rendimento relevante</p>
              <span className="font-light" data-testid="relevant-income">
                {formatMoney(relevantIncome)}
              </span>
            </div>
            <div className="flex justify-between items-center border-b-2 border-emerald-200/60 mb-3 pb-1">
              <p className="font-light">Taxa</p>
              <span className="font-light">21,40%</span>
            </div>
            <div className="flex justify-between items-center">
              <p className="font-semibold">Imposto mensal a reter</p>
              <span
                className="bg-emerald-900 p-1 text-emerald-300 rounded"
                data-testid="monthly-tax"
              >
                {formatMoney(monthlyTax)}
              </span>
            </div>
          </div>
        )}
      </div>
      <div id="bottom" ref={bottomDiv}></div>
    </div>
  )
}
