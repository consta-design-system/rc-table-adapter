import React from 'react'

import { IconArrowDown } from '@consta/uikit/IconArrowDown'
import { RenderExpandIconProps } from 'rc-table/lib/interface'

import { cn } from '@/__private__/utils/bem'

import '../Table/Table.css'

import { DefaultItem, RcTableProps, UseRcTableThemeProps } from './helper'

const cnTable = cn('rc-table')

export function useRcTableTheme<ITEM extends {} = DefaultItem>(
  props: UseRcTableThemeProps<ITEM>
): RcTableProps<ITEM> {
  const {
    prefixCls,
    size = 's',
    zebraStriped,
    data,
    borderBetweenColumns = true,
    borderBetweenRows = true,
    verticalAlign = 'top',
    headerVerticalAlign = 'center',
    expandIcon,
    emptyText,
    indentSize = 24,
  } = props

  const customPrefixCls = cnTable(
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

  const CustomExpandIcon = (params: RenderExpandIconProps<ITEM>) => {
    const { onExpand, record, expandable, expanded } = params
    return (
      <IconArrowDown
        className={cnTable('icon', {
          expanded,
          hidden: !(Array.isArray(expandable) && expandable.length > 0),
        })}
        onClick={e => onExpand(record, e)}
        size="xs"
      />
    )
  }
  return {
    data,
    prefixCls: customPrefixCls,
    expandIcon: expandIcon || CustomExpandIcon,
    indentSize,
    emptyText: emptyText || 'Нет данных',
    ...props,
  }
}
