import { Suspense, lazy } from 'react'
import { UiLoader } from '@app/components/ui/loader'

const DynamicExternalPages = lazy(() => import('./dynamic'))

export function ExternalPages() {
  return (
    <Suspense fallback={<UiLoader />}>
      <DynamicExternalPages />
    </Suspense>
  )
}
