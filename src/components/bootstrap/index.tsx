import { PropsWithChildren } from 'react'
import { LocaleProvider } from '@app/components/locale-provider'
import { Toasters } from '@app/components/toasters'
import { GlobalHooksSetuper } from '@app/components/global-hooks'

interface Props {
  isExternal?: boolean
}

export function Bootstrap({ isExternal, children }: PropsWithChildren<Props>) {
  return (
    <>
      <LocaleProvider isExternal={isExternal}>
        <GlobalHooksSetuper />
        {children}
        <Toasters />
      </LocaleProvider>
    </>
  )
}
