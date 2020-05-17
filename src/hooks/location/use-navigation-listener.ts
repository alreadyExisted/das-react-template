import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export function useNavigationListener() {
  const location = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
    document.body.focus()
  }, [location.pathname])
}
