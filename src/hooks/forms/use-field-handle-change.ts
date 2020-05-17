import { useCallback, ChangeEvent, useState, useEffect } from 'react'

export type TextFieldFormat = 'int'

interface Options<T> {
  fieldValue?: unknown
  onChange?: (e: ChangeEvent<T>, ...args: any[]) => void
}

export function useFieldHandleChange<T extends { value: unknown }>({ fieldValue, onChange }: Options<T>) {
  const [value, setValue] = useState(fieldValue || '')
  const handleChange = useCallback(
    (event: ChangeEvent<T>) => {
      const _value = event.target.value as string | number
      if (typeof _value === 'string') {
        if (_value !== '' && _value?.trim() === '') return
      }
      setValue(_value)
      if (onChange) onChange(event)
    },
    [setValue, onChange]
  )

  useEffect(() => {
    if (fieldValue !== value) setValue(fieldValue == null ? '' : fieldValue)
  }, [fieldValue, value])

  return { value, handleChange }
}
