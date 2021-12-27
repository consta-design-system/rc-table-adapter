import { cn } from '@/__private__/utils/bem'
import { PropSize } from '@/useRcTableAdapter/helper'

import '@/useRcTableAdapter/UseRcTableAdapter.css'

export const cnTable = cn('rc-table')

type CustomPrefixClsProps = {
  size?: PropSize
  zebraStriped?: 'odd' | 'even'
  borderBetweenColumns?: boolean
  borderBetweenRows?: boolean
  verticalAlign?: 'top' | 'center' | 'bottom'
  headerVerticalAlign?: 'center' | 'bottom'
  prefixCls?: string
}

type CustomPrefixCls = (props?: CustomPrefixClsProps) => string

export const customPrefixCls: CustomPrefixCls = props => {
  const params = props || ({} as CustomPrefixClsProps)
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
