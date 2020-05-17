import { PropsWithChildren } from 'react'
import cn from 'classnames'
import styles from './styles.css'

interface Props {
  className?: string
}

export function Container({ className, children }: PropsWithChildren<Props>) {
  return <div className={cn(styles.container, className)}>{children}</div>
}
