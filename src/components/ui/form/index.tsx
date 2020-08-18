import { PropsWithChildren, useCallback } from 'react'
import { Formik, Form as _Form, FormikConfig, FormikHelpers } from 'formik'
import { FormFocusError } from '@app/components/ui/form/form-focus-error'
import { UiLoader } from '@app/components/ui/loader'

interface Props {
  className?: string
  loading?: boolean
  hasCast?: boolean
}

export type FormWrapperProps<T> = PropsWithChildren<FormikConfig<T> & Props>
export type FormHelpers<T = unknown> = FormikHelpers<T>

export function FormWrapper<Values>({
  children,
  className,
  loading,
  onSubmit,
  validationSchema,
  hasCast,
  ...props
}: FormWrapperProps<Values>) {
  const handleSubmit = useCallback(
    (values: Values, helpers: FormikHelpers<Values>) => {
      onSubmit(hasCast && validationSchema ? validationSchema.cast(values) : values, helpers)
    },
    [hasCast, onSubmit, validationSchema]
  )
  return (
    <UiLoader loading={loading} className={className}>
      <Formik {...props} validationSchema={validationSchema} onSubmit={handleSubmit}>
        <_Form>
          {children}
          <FormFocusError />
        </_Form>
      </Formik>
    </UiLoader>
  )
}
