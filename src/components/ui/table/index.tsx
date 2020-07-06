import TableContainer from '@material-ui/core/TableContainer'
import Table from '@material-ui/core/Table'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import TableCell, { TableCellProps } from '@material-ui/core/TableCell'
import TableBody from '@material-ui/core/TableBody'
import { UiCard } from '@app/components/ui/card'
import { ReactNode, useMemo } from 'react'
import styles from './styles.css'

export interface UiTableProps {
  columns: {
    headers: ReactNode[]
    rows: Array<Array<ReactNode>>
    align?: TableCellProps['align']
  }
}

export function UiTable({ columns }: UiTableProps) {
  const thItems = useMemo(() => columns.headers.map((header, index) => <TableCell key={index}>{header}</TableCell>), [
    columns
  ])
  const rowItems = useMemo(
    () =>
      columns.rows.map((row, rowIndex) => (
        <TableRow key={rowIndex}>
          {row.map((item, itemIndex) => (
            <TableCell key={itemIndex}>{item}</TableCell>
          ))}
        </TableRow>
      )),
    [columns]
  )
  return (
    <TableContainer className={styles.wrap} component={UiCard}>
      <Table aria-label="table">
        <TableHead>
          <TableRow>{thItems}</TableRow>
        </TableHead>
        <TableBody>{rowItems}</TableBody>
      </Table>
    </TableContainer>
  )
}
