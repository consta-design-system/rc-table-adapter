import { cnRcTable } from '../RcTable/RcTable'
import { ExpandIcon } from '@/ExpandIcon/ExpandIcon'

import { DefaultItem, RcTableAdapterProps, RcTableAdapterResults } from './helper'

export function rcTableAdapter<ITEM extends {} = DefaultItem>(
  props?: RcTableAdapterProps<ITEM>
): RcTableAdapterResults<ITEM> {
  const params = props || ({} as RcTableAdapterProps<ITEM>)
  const {
    prefixCls,
    size,
    zebraStriped,
    borderBetweenColumns,
    borderBetweenRows,
    verticalAlign,
    headerVerticalAlign,
    expandIcon,
    emptyText,
    indentSize = 24,
  } = params

  const prefix = cnRcTable({
    size,
    zebraStriped,
    borderBetweenColumns,
    borderBetweenRows,
    verticalAlign,
    headerVerticalAlign,
    prefixCls,
  })

  return {
    prefixCls: prefix,
    expandIcon: expandIcon || ExpandIcon,
    indentSize,
    emptyText: emptyText || 'Нет данных',
  }
}
