import { useFormikContext } from 'formik'

export function useFormContext<T>() {
  return useFormikContext<T>()
}
