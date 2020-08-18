import { PropsWithChildren, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { IntlProvider } from 'react-intl'
import { Toasters } from '@app/components/toasters'
import { GlobalHooksSetuper } from '@app/components/global-hooks'
import { localesActions } from '@app/state/modules/locales'
import { useShallowEqualSelector } from '@app/hooks/store/use-shallow-equal-selector'
import { useUserData } from '@app/hooks/features/use-user-data'
import { UiLoader } from '@app/components/ui/loader'
import { userActions } from '@app/state/modules/user'

interface Props {
  type?: 'external' | 'account'
  localeNamespaces: string[]
}

export function Bootstrap({ type = 'external', localeNamespaces, children }: PropsWithChildren<Props>) {
  const { locale } = useUserData()
  const dispatch = useDispatch()
  const messages = useShallowEqualSelector(state => state.locales.data)
  const userInfo = useShallowEqualSelector(state => state.user.account)

  // fetch user data
  useEffect(() => {
    if (type !== 'account') return
    dispatch(userActions.getUserInfo())
  }, [dispatch, type])

  // fetch locales
  useEffect(() => {
    dispatch(localesActions.getMessages(localeNamespaces))
  }, [dispatch, localeNamespaces])

  if ((type === 'account' && !userInfo) || !messages) return <UiLoader loading />

  return (
    <IntlProvider locale={locale} messages={messages} wrapRichTextChunksInFragment>
      <GlobalHooksSetuper />
      {children}
      <Toasters />
    </IntlProvider>
  )
}
