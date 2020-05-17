import Button, { ButtonProps } from '@material-ui/core/Button'
import cn from 'classnames'
import styles from './styles.css'

export function UiButton({ variant = 'contained', color = 'primary', className, ...props }: ButtonProps) {
  return (
    <Button
      className={cn(
        styles.btn,
        {
          [styles.outlined]: variant === 'outlined'
        },
        className
      )}
      variant={variant}
      color={color}
      {...props}
    />
  )
}
