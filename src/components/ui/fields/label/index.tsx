import { PropsWithChildren } from 'react'
import styles from './styles.css'

export function Label({ children }: PropsWithChildren<unknown>) {
  return children ? <label className={styles.label}>{children}</label> : null
}
