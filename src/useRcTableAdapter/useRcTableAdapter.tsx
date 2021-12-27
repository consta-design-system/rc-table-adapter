import { customPrefixCls } from '../customPrefixCls/customPrefixCls'
import './UseRcTableAdapter.css'
import { CustomExpandIcon } from '@/CustomExpanIcon/CustomExpandIcon'

import { DefaultItem, UseRcTableAdapterResults, UseRcTableAdapterProps } from './helper'

export function useRcTableAdapter<ITEM extends {} = DefaultItem>(
  props?: UseRcTableAdapterProps<ITEM>
): UseRcTableAdapterResults<ITEM> {
  const params = props || ({} as UseRcTableAdapterProps<ITEM>)
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

  const prefix = customPrefixCls({
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
    expandIcon: expandIcon || CustomExpandIcon,
    indentSize,
    emptyText: emptyText || 'Нет данных',
  }
}
