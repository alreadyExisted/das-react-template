import { getIn, FormikProps, FieldInputProps } from 'formik'
import { useMemo } from 'react'
import { PrimitiveType } from 'intl-messageformat'
import { camelCase2Dash } from '@app/utils/format'

type ErrorTextIdType = 'string' | { rid: string; values?: PrimitiveType } | undefined

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
