import React from 'react'

import { cn } from '@/__private__/utils/bem'
import { IconArrowDown } from '@consta/uikit/IconArrowDown'
import { RenderExpandIconProps } from 'rc-table/lib/interface'

import './ExpandIcon.css'

const cnExpandIcon = cn('ExpandIcon')

export function ExpandIcon<ITEM>(params: RenderExpandIconProps<ITEM>) {
  const { onExpand, record, expandable, expanded } = params
  return (
    <IconArrowDown
      className={cnExpandIcon({
        expanded,
        hidden: !(Array.isArray(expandable) && expandable.length > 0),
      })}
      onClick={e => onExpand(record, e)}
      size="xs"
    />
  )
}
