import _TextField, { TextFieldProps } from '@material-ui/core/TextField'
import styles from './common.css'

export const commonTextInputProps: UiTextFieldProps = {
  fullWidth: true,
  variant: 'outlined',
  FormHelperTextProps: {
    className: styles.error
  }
}

export type UiTextFieldProps = TextFieldProps & {
  maxLength?: number
}
