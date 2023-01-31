import {
  useState,
  ChangeEvent,
  useEffect,
  Dispatch,
  SetStateAction,
} from 'react'

type InputChangeEvent = ChangeEvent<HTMLInputElement>

export type UseDebouncedInput = (initialValue: string) => {
  debouncedValue: string
  bind: {
    value: string
    onChange: (event: InputChangeEvent) => void
    setValue: Dispatch<SetStateAction<string>>
  }
}

let timeoutId: NodeJS.Timeout

const getInterval = (value: string): number => {
  const length = value.length
  if (length === 0) return 0
  if (length >= 3) return 300
  return 900
}

export const useDebouncedSearchInput: UseDebouncedInput = (
  initialValue: string
) => {
  const [value, setValue] = useState(initialValue)
  const [debouncedValue, setDebouncedValue] = useState(initialValue)

  useEffect(() => {
    if (timeoutId) clearTimeout(timeoutId)

    timeoutId = setTimeout(() => setDebouncedValue(value), getInterval(value))
  }, [value])

  const onChange = (event: InputChangeEvent) => {
    setValue(event.currentTarget.value)
  }

  return {
    debouncedValue,
    bind: {
      value,
      onChange,
      setValue,
    },
  }
}
