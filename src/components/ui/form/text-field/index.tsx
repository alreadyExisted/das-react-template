import { FieldProps, Field } from 'formik'
import { T } from '@app/components/t'
import { TextInput, TextInputProps } from '@app/components/ui/fields/text-input'
import { useErrorTextProps } from '@app/hooks/forms/use-error-text-props'

export function TextFormField(props: TextInputProps) {
  return <Field component={TextField} {...props} />
}

function TextField({ field, form, ...props }: FieldProps & TextInputProps) {
  const errorTextProps = useErrorTextProps(form, field)
  return (
    <TextInput
      {...field}
      {...props}
      id={field.name}
      helperText={errorTextProps && <T {...errorTextProps} />}
      error={!!errorTextProps}
    />
  )
}
