import React from 'react'

import { default as RCTable } from 'rc-table'

import { TableComponentType } from './types'

export const Table: TableComponentType = props => {
  return <RCTable {...props} />
}
