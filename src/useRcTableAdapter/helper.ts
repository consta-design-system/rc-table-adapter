import React from 'react'

import { RenderExpandIcon } from 'rc-table/lib/interface'

export const propSize = ['s', 'm', 'l'] as const
export type PropSize = typeof propSize[number]
export const defaultPropSize: PropSize = propSize[0]

export type DefaultItem = {
  key?: string | number
  dataIndex?: string
  render?: () => React.ReactElement | null
  chlidren?: DefaultItem[]
}

export type UseRcTableAdapterResults<ITEM extends {} = DefaultItem> = {
  indentSize?: number
  expandIcon?: RenderExpandIcon<ITEM>
  prefixCls?: string
  emptyText?: string
}

export type UseRcTableAdapterProps<ITEM = unknown> = UseRcTableAdapterResults<ITEM> & {
  size?: PropSize
  zebraStriped?: 'odd' | 'even'
  borderBetweenColumns?: boolean
  borderBetweenRows?: boolean
  verticalAlign?: 'top' | 'center' | 'bottom'
  headerVerticalAlign?: 'center' | 'bottom'
}

export type UseRcTableAdapter<ITEM = unknown> = (
  props: UseRcTableAdapterProps<ITEM>
) => UseRcTableAdapterResults<ITEM>
