import React from 'react'

import { default as RCTable } from 'rc-table'

import { UseRcTableThemeProps } from '../useRcTableTheme/helper'
import { useRcTableTheme } from '../useRcTableTheme/useRcTableTheme'

export type TableComponentType = <ITEM = unknown>(
  props: UseRcTableThemeProps<ITEM>
) => React.ReactElement | null

export const Table: TableComponentType = props => {
  const tableProps = useRcTableTheme(props)

  return <RCTable {...tableProps} />
}
