import { useMemo } from 'react'
import _TextField, { TextFieldProps } from '@material-ui/core/TextField'
import { Label } from '@app/components/ui/fields/label'
import cn from 'classnames'
import styles from './styles.css'
import { useFieldHandleChange, TextFieldFormat } from '@app/hooks/forms/use-field-handle-change'

export type TextInputProps = TextFieldProps & {
  format?: TextFieldFormat
  maxLength?: number
}

export function TextInput({ className, label, inputProps, value: fieldValue, onChange, ...props }: TextInputProps) {
  const { value, handleChange } = useFieldHandleChange({ fieldValue, onChange })
  const _inputProps = useMemo<TextFieldProps['inputProps']>(() => {
    return {
      ...inputProps,
      className: cn(inputProps?.className, styles.input)
    }
  }, [inputProps, inputProps?.className])
  return (
    <>
      <Label>{label}</Label>
      <_TextField
        {...props}
        fullWidth
        variant="outlined"
        value={value}
        onChange={handleChange}
        className={cn(styles.field, className)}
        inputProps={_inputProps}
        FormHelperTextProps={formHelperTextProps}
      />
    </>
  )
}

const formHelperTextProps = {
  className: styles.error
}
