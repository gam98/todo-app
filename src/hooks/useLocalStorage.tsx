import { useState } from 'react'

export function useLocalStorage(key: string, initialValue: [] | {} | string) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = localStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      return initialValue
    }
  })

  const handleValue = (value: any) => setStoredValue(value)

  const setValue = (value: any) => {
    try {
      setStoredValue(value)
      localStorage.setItem(key, JSON.stringify(value))
    } catch (error) {
      console.log(error)
    }
  }

  return [storedValue, setValue, handleValue]
}
