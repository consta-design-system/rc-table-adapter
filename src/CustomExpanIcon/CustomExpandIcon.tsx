import { cnTable } from '@/customPrefixCls/customPrefixCls'
import { IconArrowDown } from '@consta/uikit/IconArrowDown'
import { RenderExpandIconProps } from 'rc-table/lib/interface'
import React from 'react'

import '@/useRcTableAdapter/UseRcTableAdapter.css'

export function CustomExpandIcon<ITEM>(params: RenderExpandIconProps<ITEM>) {
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
