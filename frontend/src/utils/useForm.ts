import { useState } from 'react'

export const useForm = (callback: any, initialState = {}) => {
  const [values, setValues] = useState(initialState)
}
