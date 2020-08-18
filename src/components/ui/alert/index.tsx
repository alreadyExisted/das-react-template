import Alert, { AlertProps } from '@material-ui/lab/Alert'

export function UiAlert({ elevation = 6, variant = 'filled', ...props }: AlertProps) {
  return <Alert elevation={elevation} variant={variant} {...props} />
}
