import { ReactNode } from 'react'
import { Spinner } from '@app/components/ui/spinner'
import cn from 'classnames'
import styles from './styles.css'

interface Props {
  loading?: boolean
  children?: ReactNode
  className?: string
  inline?: boolean
}

export function Loader({ loading, inline, children, className }: Props) {
  return (
    <div
      className={cn(styles.loader, className, {
        [styles.isLoading]: loading,
        [styles.inline]: inline
      })}
    >
      <div className={styles.component}>{children}</div>
      {loading && (
        <div className={styles.spinner}>
          <Spinner />
        </div>
      )}
    </div>
  )
}
