import { getIn, FormikProps, FieldInputProps } from 'formik'
import { useMemo } from 'react'
import { camelCase2Dash } from '@app/utils/format'
import { TProps } from '@app/components/t'

type ErrorTextIdType = 'string' | { rid: string; values?: TProps['values'] } | undefined

export function useErrorTextProps<F, I>(form: FormikProps<F>, field: FieldInputProps<I>) {
  return useMemo(() => {
    const errorTextProps: ErrorTextIdType = getIn(form.touched, field.name) && getIn(form.errors, field.name)
    if (!errorTextProps) return errorTextProps
    const props = typeof errorTextProps === 'string' ? { rid: errorTextProps } : errorTextProps
    return {
      ...props,
      id: camelCase2Dash(props.rid)
    }
  }, [form.touched, form.errors, field.name])
}
