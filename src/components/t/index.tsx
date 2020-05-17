import { FormattedMessage } from 'react-intl'

export function T(props: FormattedMessage['props']) {
  return <FormattedMessage {...props} />
}
