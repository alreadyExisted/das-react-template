import Snackbar, { SnackbarProps } from '@material-ui/core/Snackbar'

export type ToasterProps = SnackbarProps

export function Toaster({ anchorOrigin = { vertical: 'top', horizontal: 'right' }, ...props }: ToasterProps) {
  return <Snackbar anchorOrigin={anchorOrigin} {...props} />
}
