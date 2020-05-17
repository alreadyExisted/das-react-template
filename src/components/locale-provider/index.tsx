import { PropsWithChildren } from 'react'
import { IntlProvider } from 'react-intl'
import { api } from '@app/api'
import { useRemoteDataOnMount } from '@app/hooks/use-remote-data-on-mount'
import { Loader } from '@app/components/ui/loader'
import { appConfig } from '@app/config'
import { useUserData } from '@app/hooks/store/use-user-data'

interface Props {
  isExternal?: boolean
}

export function LocaleProvider({ isExternal, children }: PropsWithChildren<Props>) {
  const { locale } = useUserData()
  const { data: messages, isLoading } = useRemoteDataOnMount(
    () => api.self.locales.getLocales(isExternal ? 'external' : locale),
    null,
    [isExternal, locale]
  )

  if (messages == null || isLoading) return <Loader />

  return (
    <IntlProvider
      locale={isExternal ? appConfig.defaultLang : locale}
      messages={messages!}
      wrapRichTextChunksInFragment
    >
      {children}
    </IntlProvider>
  )
}
