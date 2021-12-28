import { cn } from '@/__private__/utils/bem'
import { PropSize } from '@/rcTableAdapter/helper'

import './RcTable.css'

export const cnTable = cn('RcTable')

type CnRcTableProps = {
  size?: PropSize
  zebraStriped?: 'odd' | 'even'
  borderBetweenColumns?: boolean
  borderBetweenRows?: boolean
  verticalAlign?: 'top' | 'center' | 'bottom'
  headerVerticalAlign?: 'center' | 'bottom'
  prefixCls?: string
}

type CnRcTable = (props?: CnRcTableProps) => string

export const cnRcTable: CnRcTable = props => {
  const params = props || ({} as CnRcTableProps)
  const {
    size = 's',
    zebraStriped,
    borderBetweenColumns = true,
    borderBetweenRows = true,
    verticalAlign = 'top',
    headerVerticalAlign = 'center',
    prefixCls,
  } = params
  return cnTable(
    {
      size,
      zebraStriped,
      borderBetweenColumns,
      borderBetweenRows,
      verticalAlign,
      headerVerticalAlign,
    },
    [prefixCls]
  )
    .split(' ')
    .reverse()
    .join(' ')
}
