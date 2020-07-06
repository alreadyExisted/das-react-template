import { useAccountUserData } from '@app/hooks/features/use-user-data'
import { UiCard } from '@app/components/ui/card'

export function ProfilePage() {
  const userData = useAccountUserData()

  return (
    <UiCard>
      <h1>Profile</h1>
      <p>
        email: <b>{userData.email}</b>
      </p>
      <p>
        firstName: <b>{userData.firstName}</b>
      </p>
      <p>
        lastName: <b>{userData.lastName}</b>
      </p>
      <p>
        nickname: <b>{userData.nickname}</b>
      </p>
    </UiCard>
  )
}
