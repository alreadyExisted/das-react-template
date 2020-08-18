import { useMemo } from 'react'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import FormHelperText from '@material-ui/core/FormHelperText/FormHelperText'
import { Label } from '@app/components/ui/fields/label'
import cn from 'classnames'
import styles from './styles.css'
import { SelectFieldProps, SelectFieldItems } from '@app/components/ui/fields/selects/interfaces'
import { useMergeTheme } from '@app/hooks/use-merge-theme'

export function SelectField({
  items,
  label,
  className,
  error,
  helperText,
  variant = 'outlined',
  inputProps,
  theme,
  hasPlaceholder,
  renderItem = defaultRenderItem,
  renderValue,
  ...props
}: SelectFieldProps) {
  const _theme = useMergeTheme(styles, theme)
  const _inputProps = useMemo(() => {
    return {
      ...inputProps,
      className: cn(_theme.input, hasPlaceholder && !props.value && styles.placeholder)
    }
  }, [inputProps, hasPlaceholder, props.value, _theme.input])
  const renderedItems = useMemo(() => {
    return items.map(item => (
      <MenuItem
        key={item.value}
        value={item.value}
        className={_theme.item}
        disabled={item.value === ''}
        children={renderItem(item)}
      />
    ))
  }, [items, renderItem, _theme.item])
  return (
    <>
      <Label>{label}</Label>
      <FormControl fullWidth variant={variant} className={_theme.select} error={error}>
        <Select {...props} inputProps={_inputProps} displayEmpty={hasPlaceholder} renderValue={renderValue}>
          {renderedItems}
        </Select>
        {error && <FormHelperText error={error}>{helperText}</FormHelperText>}
      </FormControl>
    </>
  )
}

function defaultRenderItem(item: SelectFieldItems[0]) {
  return item.name
}
