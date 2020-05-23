import { FormattedMessage } from 'react-intl'

export type TProps = FormattedMessage['props']

export function T(props: FormattedMessage['props']) {
  return <FormattedMessage {...props} />
}
