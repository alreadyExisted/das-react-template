import { FieldProps, Field } from 'formik'
import { SelectField } from '@app/components/ui/fields/selects/select'
import { SelectFieldProps } from '@app/components/ui/fields/selects/interfaces'
import { useFormFieldErrorProps } from '@app/components/ui/form/hooks/use-form-field-error-props'

export function SelectFormField(props: SelectFieldProps) {
  return <Field component={FieldComponent} {...props} />
}

function FieldComponent({ field, form, ...props }: FieldProps & SelectFieldProps) {
  const errorProps = useFormFieldErrorProps(form, field)
  return <SelectField {...field} {...props} {...errorProps} id={field.name} />
}
