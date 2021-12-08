import { useState } from 'react'

export function useLocalStorage (key, initialValue) {
  const [stored, setStored] = useState(() => {
    try {
      const item = window.localStorage.getItem(key)
      return item !== null ? JSON.parse(item) : initialValue
    } catch (error) {
      return initialValue
    }
  })

  const setLocalStorage = value => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value))
      setStored(value)
    } catch (error) {
      console.error(error)
    }
  }

  return [stored, setLocalStorage]
}
