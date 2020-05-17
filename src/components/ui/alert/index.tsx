import _Alert, { AlertProps as _AlertProps } from '@material-ui/lab/Alert'

type AlertProps = _AlertProps

export function Alert({ elevation = 6, variant = 'filled', ...props }: AlertProps) {
  return <_Alert elevation={elevation} variant={variant} {...props} />
}
