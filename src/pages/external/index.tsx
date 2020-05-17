import { Suspense, lazy } from 'react'
import { Loader } from '@app/components/ui/loader'

const DynamicExternalPages = lazy(() => import('./dynamic'))

export function ExternalPages() {
  return (
    <Suspense fallback={<Loader />}>
      <DynamicExternalPages />
    </Suspense>
  )
}
