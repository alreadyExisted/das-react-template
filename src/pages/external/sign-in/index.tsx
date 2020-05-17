import { useCallback, useMemo } from 'react'
import { useDispatch } from 'react-redux'
import * as Yup from 'yup'
import { AuthUserData, RoleType } from '@app/models/user'
import { useT } from '@app/hooks/use-t'
import { UiCard } from '@app/components/ui/card'
import { UiButton } from '@app/components/ui/buttons/button'
import { TextFormField } from '@app/components/ui/form/text-field'
import { authActions } from '@app/state/modules/auth/actions'
import { FormWrapper } from '@app/components/ui/form'
import { Loader } from '@app/components/ui/loader'
import { useShallowEqualSelector } from '@app/hooks/store/use-shallow-equal-selector'
import styles from './styles.css'
import { SelectFormField } from '@app/components/ui/form/select-field'
import { SelectFieldsItems } from '@app/components/ui/fields/selects/select'

const NS = 'pages.sign-in'

export function SignInPage() {
  const t = useT(NS)
  const { loading } = useShallowEqualSelector(state => ({ loading: state.auth.loading }))
  const dispatch = useDispatch()
  const roleItems = useMemo<SelectFieldsItems>(
    () => [
      { name: t('role.user'), value: RoleType.User },
      { name: t('role.admin'), value: RoleType.Admin }
    ],
    [t]
  )
  const handleSubmit = useCallback(
    (values: AuthUserData) => {
      dispatch(authActions.loginRequest(values))
    },
    [dispatch]
  )
  return (
    <UiCard className={styles.card}>
      <Loader loading={loading}>
        <h1 className={styles.title}>{t('title')}</h1>
        <FormWrapper initialValues={formInitialValues} validationSchema={formValidationSchema} onSubmit={handleSubmit}>
          <TextFormField label={t('email')} name="email" />
          <TextFormField type="password" label={t('password')} name="password" />
          <SelectFormField name="role" label={t('role')} items={roleItems} />
          <div className={styles.submit}>
            <UiButton type="submit">{t('submit')}</UiButton>
          </div>
        </FormWrapper>
      </Loader>
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
