import { ReactNode, useMemo } from 'react'
import Select, { SelectProps } from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import FormHelperText from '@material-ui/core/FormHelperText/FormHelperText'
import { Label } from '@app/components/ui/fields/label'
import cn from 'classnames'
import styles from './styles.css'
import { useFieldHandleChange } from '@app/hooks/forms/use-field-handle-change'

export type SelectFieldsItems = {
  value: string | number
  name: ReactNode
}[]

interface Props {
  items?: SelectFieldsItems
  helperText?: ReactNode
}

export type SelectFieldProps = Props & SelectProps

export function SelectField({
  items,
  children,
  label,
  className,
  error,
  helperText,
  variant = 'outlined',
  inputProps,
  value: fieldValue,
  onChange,
  ...props
}: SelectFieldProps) {
  const { value, handleChange } = useFieldHandleChange({ fieldValue, onChange })
  const _inputProps = useMemo(() => {
    return {
      ...inputProps,
      className: cn(styles.input, props.displayEmpty && !value && styles.placeholder, inputProps?.className)
    }
  }, [inputProps, inputProps?.className, props.displayEmpty, value])
  const _children = useMemo(() => {
    return items
      ? items.map(item => (
          <MenuItem
            key={item.value}
            value={item.value}
            className={styles.item}
            disabled={item.value === ''}
            children={item.name}
          />
        ))
      : children
  }, [items, children])
  return (
    <>
      <Label>{label}</Label>
      <FormControl fullWidth variant={variant} className={cn(styles.select, className)} error={error}>
        <Select {...props} inputProps={_inputProps} value={value} onChange={handleChange}>
          {_children}
        </Select>
        {error && <FormHelperText error={error}>{helperText}</FormHelperText>}
      </FormControl>
    </>
  )
}
