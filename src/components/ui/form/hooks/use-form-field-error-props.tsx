import { getIn, FormikProps, FieldInputProps } from 'formik'
import { useMemo } from 'react'
import { camelCaseToKebabCase } from '@app/utils/format'
import { TProps, T } from '@app/components/t'

type ErrorTextIdType = 'string' | { rid: string; values?: TProps['values'] } | undefined

export function useFormFieldErrorProps<F, I>(form: FormikProps<F>, field: FieldInputProps<I>) {
  const errorTextProps = useMemo(() => {
    const errorTextProps: ErrorTextIdType = getIn(form.touched, field.name) && getIn(form.errors, field.name)
    if (!errorTextProps) return errorTextProps
    const props = typeof errorTextProps === 'string' ? { rid: errorTextProps } : errorTextProps
    return {
      ...props,
      id: camelCaseToKebabCase(props.rid),
    }
  }, [form.touched, form.errors, field.name])

  return { helperText: errorTextProps && <T {...errorTextProps} />, error: !!errorTextProps }
}
