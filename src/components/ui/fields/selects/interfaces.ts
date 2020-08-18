import type { ReactNode } from 'react'
import type { SelectProps } from '@material-ui/core/Select'

type SelectFieldItem = {
  value: string
  name: string
}

export type SelectFieldItems = SelectFieldItem[]

interface Props {
  items: SelectFieldItems
  helperText?: ReactNode
  theme?: SelectTheme
  hasPlaceholder?: boolean
  renderItem?: (item: SelectFieldItem) => ReactNode
  renderValue?: (items: SelectFieldItems) => ReactNode
}

export type SelectFieldProps = Props & Omit<SelectProps, 'children'>

export interface SelectTheme {
  select?: string
  input?: string
  item?: string
  error?: string
}
