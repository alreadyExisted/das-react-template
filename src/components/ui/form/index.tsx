import { PropsWithChildren } from 'react'
import { Formik, Form as _Form, FormikConfig } from 'formik'
import { FormFocusError } from '@app/components/ui/form/form-focus-error'

interface Props {
  className?: string
}

export type FormWrapperProps<T> = PropsWithChildren<FormikConfig<T> & Props>

export function FormWrapper<Values>({ children, className, ...props }: FormWrapperProps<Values>) {
  return (
    <Formik {...props}>
      <_Form className={className}>
        {children}
        <FormFocusError />
      </_Form>
    </Formik>
  )
}
