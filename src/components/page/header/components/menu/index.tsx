import { useRouteMatch, NavLink } from 'react-router-dom'
import { useT } from '@app/hooks/use-t'
import styles from './styles.css'

interface Props {
  items: string[]
}

export function HeaderMenu({ items }: Props) {
  const t = useT('common.navs')
  const { path } = useRouteMatch()
  return (
    <nav>
      <ul className={styles.list}>
        {items.map(item => (
          <li key={item} className={styles.item}>
            <NavLink to={`${path}/${item}`} className={styles.link} activeClassName={styles.active}>
              {t(item)}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}
