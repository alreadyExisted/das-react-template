import { UiCard } from '@app/components/ui/card'
import { UiLink } from '@app/components/ui/link'

export function AdminPages() {
  return (
    <UiCard style={{ textAlign: 'center', fontSize: 24 }}>
      <div>
        Click on the star {'=>'}{' '}
        <UiLink href="https://github.com/alreadyExisted/das-react-template" rel="noopener noreferrer" target="_blank">
          Repo
        </UiLink>{' '}
        😁
      </div>
    </UiCard>
  )
}
