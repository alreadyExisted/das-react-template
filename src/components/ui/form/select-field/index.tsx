import { FieldProps, Field } from 'formik'
import { T } from '@app/components/t'
import { SelectField, SelectFieldProps } from '@app/components/ui/fields/selects/select'
import { useErrorTextProps } from '@app/hooks/forms/use-error-text-props'

export function SelectFormField(props: SelectFieldProps) {
  return <Field component={_SelectField} {...props} />
}

function _SelectField({ field, form, ...props }: FieldProps & SelectFieldProps) {
  const errorTextProps = useErrorTextProps(form, field)
  return (
    <SelectField
      {...field}
      {...props}
      id={field.name}
      helperText={errorTextProps && <T {...errorTextProps} />}
      error={!!errorTextProps}
    />
  )
}
