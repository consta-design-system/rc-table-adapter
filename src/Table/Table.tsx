import React from 'react'

import { default as RCTable } from 'rc-table'

import { UseRcTableAdapterProps } from '../useRcTableAdapter/helper'
import { useRcTableAdapter } from '../useRcTableAdapter/useRcTableAdapter'

export type TableComponentType = <ITEM = unknown>(
  props: UseRcTableAdapterProps<ITEM>
) => React.ReactElement | null

export const Table: TableComponentType = props => {
  const tableProps = useRcTableAdapter(props)

  return <RCTable {...tableProps} />
}
