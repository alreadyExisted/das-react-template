import { useMemo } from 'react'
import TextField from '@material-ui/core/TextField'
import { Label } from '@app/components/ui/fields/label'
import { commonTextInputProps, UiTextFieldProps } from '@app/components/ui/fields/common'
import cn from 'classnames'
import styles from './styles.css'

export function UiTextField({ className, label, inputProps, multiline, maxLength, ...props }: UiTextFieldProps) {
  const _inputProps = useMemo<UiTextFieldProps['inputProps']>(
    () => ({
      ...inputProps,
      className: cn(styles.input, multiline && styles.multiline, inputProps?.className),
      maxLength
    }),
    [inputProps, multiline, maxLength]
  )
  return (
    <>
      <Label>{label}</Label>
      <TextField
        {...commonTextInputProps}
        {...props}
        multiline={multiline}
        className={cn(styles.field, className)}
        inputProps={_inputProps}
      />
    </>
  )
}
