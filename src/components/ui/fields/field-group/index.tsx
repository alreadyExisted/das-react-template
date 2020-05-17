import { PropsWithChildren } from 'react'
import cn from 'classnames'
import styles from './styles.css'

export function FiedlGroup({ className, children }: PropsWithChildren<{ className?: string }>) {
  return <div className={cn(styles.wrap, className)}>{children}</div>
}
