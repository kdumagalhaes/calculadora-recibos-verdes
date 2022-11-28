export const { format: formatMoney } = new Intl.NumberFormat('pt-PT', {
  minimumFractionDigits: 2,
  style: 'currency',
  currency: 'EUR',
})
