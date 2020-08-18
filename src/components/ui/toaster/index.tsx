import Snackbar, { SnackbarProps } from '@material-ui/core/Snackbar'

export function UiToaster({ anchorOrigin = { vertical: 'top', horizontal: 'right' }, ...props }: SnackbarProps) {
  return <Snackbar anchorOrigin={anchorOrigin} {...props} />
}
