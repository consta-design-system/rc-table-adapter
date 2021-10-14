import React from 'react'

import { default as RCTable } from 'rc-table'

import { TableComponentType } from './types'
import './Table.css'

export const Table: TableComponentType = props => {
  const { prefixCls = 'rc-table' } = props

  return <RCTable {...props} prefixCls={prefixCls} />
}
