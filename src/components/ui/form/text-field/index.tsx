import { FieldProps, FastField } from 'formik'
import { UiTextField } from '@app/components/ui/fields/text-field'
import { UiTextFieldProps } from '@app/components/ui/fields/common'
import { useFormFieldErrorProps } from '@app/components/ui/form/hooks/use-form-field-error-props'
import { useCallback, ChangeEvent } from 'react'

export function TextFormField(props: UiTextFieldProps) {
  return <FastField component={FieldComponent} {...props} />
}

function FieldComponent({ field, form, ...props }: FieldProps & UiTextFieldProps) {
  const errorProps = useFormFieldErrorProps(form, field)
  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value
      const trimmedValue = value.trim()
      form.setFieldValue(field.name, trimmedValue ? value : trimmedValue)
    },
    [form, field]
  )
  return <UiTextField {...field} {...props} {...errorProps} id={field.name} onChange={handleChange} />
}
