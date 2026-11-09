import { useEffect, useState } from 'react'

export function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    try {
      const savedValue = window.localStorage.getItem(key)
      if (savedValue !== null) return JSON.parse(savedValue)
    } catch (error) {
      console.error(`Не удалось прочитать localStorage по ключу "${key}"`, error)
    }

    return typeof initialValue === 'function' ? initialValue() : initialValue
  })

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value))
    } catch (error) {
      console.error(`Не удалось сохранить данные в localStorage по ключу "${key}"`, error)
    }
  }, [key, value])

  return [value, setValue]
}
