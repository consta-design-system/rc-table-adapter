import React from 'react'
import { default as RCTable } from 'rc-table'
import { expandData, columns } from '@/rcTableAdapter/__mock__/mock.data'
import { cnRcTable } from '@/RcTable/RcTable'
import { ExpandIcon } from '@/ExpandIcon/ExpandIcon'

export const ExpandIconExample = () => {
  const prefix = cnRcTable(
    {
      size: 's',
      zebraStriped: 'odd',
      borderBetweenColumns: true,
      borderBetweenRows: true,
      verticalAlign: 'center',
      headerVerticalAlign: 'center',
    },
    ['CustomTable']
  )

  return <RCTable expandIcon={ExpandIcon} prefixCls={prefix} data={expandData} columns={columns} />
}
