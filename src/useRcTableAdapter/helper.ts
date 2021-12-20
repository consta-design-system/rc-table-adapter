import React from 'react'

import {
  ColumnsType,
  ColumnType,
  ExpandableConfig,
  GetComponentProps,
  RenderExpandIcon,
} from 'rc-table/lib/interface'
import { TableProps } from 'rc-table/lib/Table'

export const propSize = ['s', 'm', 'l'] as const
export type PropSize = typeof propSize[number]
export const defaultPropSize: PropSize = propSize[0]

export type DefaultItem = {
  key?: string | number
  dataIndex?: string
  render?: () => React.ReactElement | null
  chlidren?: DefaultItem[]
}

type ExcludeProps =
  | 'data'
  | 'children'
  | 'columns'
  | 'expandable'
  | 'onHeaderRow'
  | 'transformColumns'
  | 'expandIcon'
  | 'prefixCls'

export type RcTableProps<ITEM extends {} = DefaultItem> = Omit<TableProps, ExcludeProps> & {
  data?: ITEM[]
  columns?: ColumnsType<ITEM>
  expandable?: ExpandableConfig<ITEM>
  onHeaderRow?: GetComponentProps<ReadonlyArray<ColumnType<ITEM>>>
  transformColumns?: (columns: ColumnsType<ITEM>) => ColumnsType<ITEM>
  expandIcon?: RenderExpandIcon<ITEM>
  prefixCls?: string
}

export type UseRcTableAdapterProps<ITEM = unknown> = RcTableProps<ITEM> & {
  size?: PropSize
  zebraStriped?: 'odd' | 'even'
  borderBetweenColumns?: boolean
  borderBetweenRows?: boolean
  verticalAlign?: 'top' | 'center' | 'bottom'
  headerVerticalAlign?: 'center' | 'bottom'
}
