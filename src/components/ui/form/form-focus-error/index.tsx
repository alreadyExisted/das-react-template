import { useEffect } from 'react'
import { useFormikContext, isObject } from 'formik'
import jump from 'jump.js'

export function FormFocusError() {
  const { errors, isSubmitting, isValidating } = useFormikContext()
  useEffect(() => {
    if (isSubmitting && !isValidating) {
      const keys = Object.keys(errors)
      if (keys.length > 0) {
        const selector = `[id=${JSON.stringify(getFirstKey(errors))}]`
        const errorElement = document.querySelector(selector) as HTMLElement
        if (errorElement) {
          jump(errorElement, {
            offset: -100,
            callback: () => errorElement.focus()
          })
        }
      }
    }
  }, [errors, isSubmitting, isValidating])

  return null
}

// TODO mb add recoursive
function getFirstKey(obj: Record<string, any>) {
  const firstKey = Object.keys(obj)[0]
  const firstItem = obj[firstKey]
  if (!Array.isArray(firstItem) && !isObject(obj[firstKey])) return firstKey
  if (Array.isArray(firstItem)) {
    for (let i = 0; i < firstItem.length; i++) {
      if (firstItem[i] != null) {
        return `${firstKey}[${i}].${Object.keys(firstItem[i])[0]}`
      }
    }
  }
  const secondKey = Object.keys(firstItem)[0]
  return secondKey === 'rid' ? firstKey : `${firstKey}.${secondKey}`
}
