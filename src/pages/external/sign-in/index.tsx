import { useCallback, useMemo } from 'react'
import { useDispatch } from 'react-redux'
import * as Yup from 'yup'
import { AuthUserData, RoleType } from '@app/models/user'
import { useT } from '@app/hooks/use-t'
import { UiCard } from '@app/components/ui/card'
import { UiButton } from '@app/components/ui/buttons/button'
import { TextFormField } from '@app/components/ui/form/text-field'
import { userActions } from '@app/state/modules/user'
import { FormWrapper } from '@app/components/ui/form'
import { useLoadingState } from '@app/hooks/store/use-loading-state'
import { SelectFormField } from '@app/components/ui/form/select-field'
import { SelectFieldItems } from '@app/components/ui/fields/selects/interfaces'
import styles from './styles.css'

const NS = 'pages.sign-in'

export function SignInPage() {
  const t = useT(NS)
  const loading = useLoadingState(userActions.login)
  const dispatch = useDispatch()
  const roleItems = useMemo<SelectFieldItems>(
    () => [
      { name: t('role.user') as string, value: RoleType.User },
      { name: t('role.admin') as string, value: RoleType.Admin }
    ],
    [t]
  )
  const handleSubmit = useCallback(
    (values: AuthUserData) => {
      dispatch(userActions.login(values))
    },
    [dispatch]
  )
  return (
    <UiCard className={styles.card}>
      <h1 className={styles.title}>{t('title')}</h1>
      <FormWrapper
        loading={loading}
        initialValues={formInitialValues}
        validationSchema={formValidationSchema}
        onSubmit={handleSubmit}
      >
        <TextFormField label={t('email')} name="email" />
        <TextFormField type="password" label={t('password')} name="password" />
        <SelectFormField name="role" label={t('role')} items={roleItems} />
        <div className={styles.submit}>
          <UiButton type="submit">{t('submit')}</UiButton>
        </div>
      </FormWrapper>
    </UiCard>
  )
}

const formInitialValues: AuthUserData = {
  email: '',
  password: '',
  role: RoleType.User
}

const formValidationSchema = Yup.object().shape<AuthUserData>({
  email: Yup.string().required(`${NS}.email!required`),
  password: Yup.string().required(`${NS}.password!required`),
  role: Yup.string().required(`${NS}.role!required`) as Yup.Schema<RoleType>
})
